import { addRecentWalletId, isEIP6963Connector, isRainbowKitConnector, isRecentWallet, getRecentWalletIds, getConnectorsWithRecentWallets, getDeskstopDownloadUrl, getExtensionDownloadUrl, getMobileDownloadUrl, computeChainId, getWalletsFromConnectors, getWalletConnectConnector } from '@/utils'
import { useRainbowKitChainContext } from '@/composables/chain'
import { type WalletInstance, type WalletConnector } from '@/types'
import { useConnect, Connector, useChainId, useConfig, useDisconnect } from '@wagmi/vue'
import { computed, ComputedRef } from 'vue'
import {
  METAMASK_WALLET_ID,
  MetaMaskConnector,
} from '@/wallets/metaMaskWallet/metaMaskWallet';
import { useWalletConnectRequestUri, useWalletConnectStoreContext } from './wallet.connect'

export function useWalletConectors(mergeEIP6963WithRkConnectors = false) : ComputedRef<Array<WalletConnector>> {
  const MAX_RECENT_WALLETS = 3
  const config = useConfig();
  const { initialChainId, enableChainModalOnConnect: ignoreChainModalOnConnect, rainbowKitChains: chains } = useRainbowKitChainContext()
  const { connectAsync, connectors: defaultUntypedConnector } = useConnect()
  const { disconnectAsync  }  = useDisconnect();
  const currentChainId = useChainId();
  const store = useWalletConnectStoreContext();

  ///functions 
  function pollForWalletConnectUri(uriConverter: (uri: string) => string,): Promise<string>{
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        const walletConnectUri = store.currentWalletConnectURI;
        if (walletConnectUri) {
          clearInterval(intervalId);
          resolve(
            uriConverter ? uriConverter(walletConnectUri) : walletConnectUri,
          );
        }
      }, 1000);
    });
  };

  function notExistsInEIP6963WithRkConnectors(wallet: WalletInstance, connectors: Array<WalletInstance>) {
    if (!mergeEIP6963WithRkConnectors) return true
    return !connectors.some((eip6963) => eip6963.id == wallet.rdns)
  }

  ///Async function
  async function connectWallet(connector: Connector){
    await disconnectAsync({ connector });
    const walletChainId = await connector.getChainId();
    const chainId = computeChainId({
      initialChainId: initialChainId?.value,
      walletChainId,
      currentChainId: currentChainId.value,
      ignoreChainModalOnConnect: ignoreChainModalOnConnect?.value?? false
    });
    const result = await connectAsync({ chainId, connector })
    if (result) {
      addRecentWalletId(connector.id)
    }
  }

  async function waitUntilConnected(connector: WalletInstance): Promise<void>{
    const { id  } = connector;  
    store.setCurrentWalletId(id);    
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        const isConnected = config.state.status === 'connected';
        if (isConnected) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  };

  async function getWalletConnectUri(
    connector: Connector,
    uriConverter: (uri: string) => string
  ): Promise<string>{
    if (connector.id === 'coinbase') {
      const provider = await connector.getProvider();
      // @ts-expect-error
      return provider.qrUrl
    }

    if (connector.id === METAMASK_WALLET_ID) {
      const provider = await connector.getProvider();
      return (connector as unknown as MetaMaskConnector).getDisplayUri(provider);
    }

    if(store.currentWalletConnectURI) return uriConverter(store.currentWalletConnectURI);
    return pollForWalletConnectUri(uriConverter);
  }
  

  ///computed function
  return computed<Array<WalletConnector>>(()=>{

    const connectors: Array<WalletConnector> = [];
    const defaultConnectors = getWalletsFromConnectors({ connectors: defaultUntypedConnector });
    const eip6963Connectors = defaultConnectors.filter(isEIP6963Connector).map((connector) => {
      return {
        ...connector,
        groupIndex: 0
      }
    })  
    const filteredConnectors = defaultConnectors
        .filter(isRainbowKitConnector)
        .filter((instance)=>notExistsInEIP6963WithRkConnectors(instance,eip6963Connectors));
    const wallets = [...eip6963Connectors, ...filteredConnectors]
    const walletInstanceById = wallets.indexBy((walletInstance) => walletInstance.id)
    const recentWallets: WalletInstance[] = getRecentWalletIds()
      .map((walletId) => walletInstanceById[walletId])
      .filter(Boolean)
      .slice(0, MAX_RECENT_WALLETS)
    const combinedConnectorsWithRecentWallets = getConnectorsWithRecentWallets({ wallets, recentWallets })

    for (const wallet of combinedConnectorsWithRecentWallets) {

      if (!wallet) continue;
      
      const eip6963 = isEIP6963Connector(wallet)
      const recent = isRecentWallet(recentWallets, wallet.id)
      const isWalletConnectConnector = wallet.connectorId === 'walletConnect';
  
      if (eip6963) {
        connectors.push({
          ...wallet,
          iconUrl: wallet.icon ?? '',
          ready: true,
          connectWallet: () => connectWallet(wallet),
          groupName: 'Installed',
          recent
        })
        continue
      }

      if(connectors.some((connector)=> connector.id === wallet.id)){
        continue;
      }

      connectors.push({
        ...wallet,
        ready: wallet.installed ?? true,
        recent,
        connectWallet: isWalletConnectConnector
        ? ()=>waitUntilConnected(wallet)
        : ()=>connectWallet(wallet),
        desktopDownloadUrl: getDeskstopDownloadUrl(wallet),
        extensionDownloadUrl: getExtensionDownloadUrl(wallet),
        groupName: wallet.groupName,
        mobileDownloadUrl: getMobileDownloadUrl(wallet),
        getQrCodeUri: wallet.qrCode?.getUri
          ? () => getWalletConnectUri(wallet, wallet.qrCode?.getUri!)
          : undefined,
        getDesktopUri: wallet.deskstop?.getUri
          ? () => getWalletConnectUri(wallet, wallet.deskstop?.getUri!)
          : undefined,
        getMobileUri: wallet.mobile?.getUri
          ? () => getWalletConnectUri(wallet, wallet.mobile?.getUri!)
          : undefined,
      })
      
    }
    return connectors;
  });
}
