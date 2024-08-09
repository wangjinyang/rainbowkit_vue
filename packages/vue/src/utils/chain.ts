import { mainnet, RainbowKitChain } from "@/types";
import type { Chain } from "@wagmi/vue/chains";
export const chainToExplorerUrl = (chain?: Chain): string | undefined => chain?.blockExplorers?.default?.url; // using wagmi's built-in Chain.blockExplorers and grab the default URL
export function computeChainId({ initialChainId, currentChainId, walletChainId, chains, ignoreChainModalOnConnect }:{ 
    initialChainId?:number,
    walletChainId?: number, 
    currentChainId?: number,
    chains?: RainbowKitChain[], 
    ignoreChainModalOnConnect:boolean 
}): number{
    ///Take the current chain id when Ignore chain modal is true
    if(ignoreChainModalOnConnect){
        const isCurrentChainSupported = chains?.some(({ id }) => id === currentChainId);
        if(currentChainId && isCurrentChainSupported) return currentChainId;
    }

    ///If current chain id not supported, return initial chain id
    if(initialChainId) return initialChainId;

    ///If chains is undefined, return mainnet id
    if(chains === undefined) return mainnet.id;
    const newRainbowKitChains = chains;
    return newRainbowKitChains.find(({ id }) => id === walletChainId)?.id ?? newRainbowKitChains[0].id;
}