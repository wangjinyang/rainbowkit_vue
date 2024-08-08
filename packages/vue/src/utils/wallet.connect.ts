import { Connector, ConnectParameters, CreateWalletConnectModalConnectorParameters, WalletConnectUriListener } from "@/types";
import { computeChainId } from "./chain";
import { addRecentWalletId } from "./wallet";

export const walletConnectStorageKey = 'WALLETCONNECT_DEEPLINK_CHOICE';

export const setWalletConnectDeepLink = ({ mobileUri, name }:{ mobileUri: string, name: string }) => 
    localStorage.setItem(walletConnectStorageKey, JSON.stringify({ href: mobileUri.split('?')[0], name }));

export const clearWalletConnectDeepLink = () => localStorage.removeItems(walletConnectStorageKey);

export class WalletConnectStore {
    private static MAX_REFETCH_ATTEMPTS = 5;

    private listeners: Set<WalletConnectUriListener> = new Set();
    private uri:string|undefined;
    private walletId:string|undefined;
    private connector: Connector|undefined;
    private refetchAttempts = 0;

    private async _connectAsync(parameter:ConnectParameters):Promise<void>{
        const {
            initialChainId,
            currentChainId,
            chains,
            ignoreChainModalOnConnect,
            connectAsync,
            walletConnectWallet,
            config
        } = parameter;
        const provider = await this.connector?.getProvider();
        const walletChainId = await this.connector?.getChainId();

        ///@ts-expect-error
        provider?.once('display_uri',(newURI:string)=>{
            if(!newURI) return;
            this.uri = newURI;
            this.notifyWalletConnectUriListeners(newURI);
        });

        const chainId = computeChainId({ 
            initialChainId, 
            currentChainId,  
            walletChainId, 
            chains, 
            ignoreChainModalOnConnect 
        });
        try{
            const result = await connectAsync({
                chainId,
                connector: walletConnectWallet
            });
            if(result){
                const currentWalletId = this.walletId;
                if (currentWalletId) addRecentWalletId(currentWalletId);
                this.walletId = undefined;
                this.uri = undefined;
                this.refetchAttempts = 0;
            }
        }catch(error){
            console.log("Provider result 4:",error);
            const isConnected = config.state.status === 'connected';
            if (!isConnected && this.refetchAttempts < WalletConnectStore.MAX_REFETCH_ATTEMPTS) {
                this.uri = undefined;
                this.refetchAttempts++;
                await this._connectAsync(parameter);
            }
        }
    }

    public notifyWalletConnectUriListeners(uri: string): void {
        for (const transactionListener of this.listeners) {
          transactionListener(uri);
        }
    }

    public async requestWalletConnectUri(parameters: ConnectParameters):Promise<void>{
        await this._connectAsync(parameters);
        console.log("Provider result 4:");
    }

    public onWalletConnectUri(listener: WalletConnectUriListener) {
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }
    
    public createWalletConnectModalConnector({
        createConnector,
        config,
    }: CreateWalletConnectModalConnectorParameters) {
        if (!this.connector) {
          const walletConnector = config._internal.connectors.setup(createConnector);
          this.connector = walletConnector;
        }
    }
    
    public resetWalletConnectUri() {
        this.uri = undefined;
    }

    public setCurrentWalletId(id?: string) {
        this.walletId = id;
    }
    
    get currentWalletId():string|undefined{
        return this.walletId;
    }

    get currentWalletConnectURI():string|undefined{
        return this.uri;
    }

    get currentWalletConnectConnector():Connector|undefined{
        return this.connector;
    }
}