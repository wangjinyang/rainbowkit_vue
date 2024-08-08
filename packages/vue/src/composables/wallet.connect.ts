import { WalletConnectStoreContextKey } from "@/types";
import { getWalletConnectWallet, getWalletsFromConnectors, WalletConnectStore } from "@/utils";
import { useChainId, useConfig, useConnect } from "@wagmi/vue";
import { inject } from "vue";
import { useRainbowKitChainContext } from "./chain";

export function configureWalletConnectStoreContext(){
    const store = useWalletConnectStoreContext();
    const config = useConfig();
    const { connectors } = useConnect();

    const wallets = getWalletsFromConnectors({ connectors });
    const connector = getWalletConnectWallet({
        walletId: 'walletConnect',
        wallets,
      })?.createWalletConnectModalConnector;
    
    ///preload wallet connect   
    if(connector){
        store.createWalletConnectModalConnector({ createConnector:connector, config });
    }
}

export function createWalletConnectStoreContext(){
    return new WalletConnectStore();
}

export function useWalletConnectStoreContext(){
    const context = inject(WalletConnectStoreContextKey);
    if(!context){
        throw Error(`Could not find injected '${String(WalletConnectStoreContextKey)}' instance.`);
    }
    return context;
}

export function useWalletConnectRequestUri(){

    const store = useWalletConnectStoreContext();
    
    const config = useConfig();
    const currentChainId = useChainId();
    const { connectAsync, connectors } = useConnect();
    const { initialChainId, rainbowKitChains: chains, enableChainModalOnConnect: ignoreChainModalOnConnect } = useRainbowKitChainContext();

    const wallets = getWalletsFromConnectors({ connectors });
    const connector = getWalletConnectWallet({ wallets });

    if(!connector) return;
    
    store.requestWalletConnectUri({
        config,
        connectAsync,
        currentChainId: currentChainId.value,
        chains: chains?.value ?? [],
        walletConnectWallet: connector,
        initialChainId: initialChainId?.value,
        ignoreChainModalOnConnect: ignoreChainModalOnConnect?.value ?? false,
    })
}