import {
    argentWallet,
    bifrostWallet,
    bitgetWallet,
    bitskiWallet,
    bloomWallet,
    braveWallet,
    clvWallet,
    coin98Wallet,
    coinbaseWallet,
    coreWallet,
    dawnWallet,
    desigWallet,
    enkryptWallet,
    foxWallet,
    frameWallet,
    frontierWallet,
    imTokenWallet,
    injectedWallet,
    kresusWallet,
    ledgerWallet,
    metaMaskWallet,
    mewWallet,
    oktoWallet,
    okxWallet,
    omniWallet,
    oneKeyWallet,
    phantomWallet,
    rabbyWallet,
    rainbowWallet,
    ramperWallet,
    roninWallet,
    safeWallet,
    safeheronWallet,
    safepalWallet,
    subWallet,
    tahoWallet,
    talismanWallet,
    tokenaryWallet,
    tokenPocketWallet,
    trustWallet,
    uniswapWallet,
    walletConnectWallet,
    xdefiWallet,
    zealWallet,
    zerionWallet,
    RainbowKitVuePlugin,  
    RainbowKitPluginOptions,
    mainnet,
    zkSync,
    scroll,
    polygonZkEvm,
    immutableZkEvm,
    RainbowKitChain,
    //createRainbowKitDefaultLocaleAdapter
} from 'use-rainbowkit-vue';
import { RainbowKitVueI18nLocaleAdapterPlugin } from 'use-rainbowkit-vue-i18n-locale-provider';
import { RainbowKitVueSiweAuthAdapterPlugin } from 'use-rainbowkit-vue-siwe-auth-provider';

import { App, h } from 'vue';
import { createI18n } from 'vue-i18n';
//import { Chain } from 'viem';


export function createRainbowKitConfig(app: App) : App{
    const RAINBOW_TERMS = 'https://rainbow.me/terms-of-use';
    const avalanche = {
        id: 43_114,
        name: 'Avalanche',
        iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
        iconBackground: '#fff',
        nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
        rpcUrls: {
            default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
        },
        blockExplorers: {
            default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
        },
        contracts: {
            multicall3: {
                address: '0xca11bde05977b3631167028862be2a173976ca11',
                blockCreated: 11_907_934,
            },
        },
    } as const satisfies RainbowKitChain;

    function configure():RainbowKitPluginOptions{

        const { create: createI18nAdapter } = RainbowKitVueI18nLocaleAdapterPlugin();
        const { create: createAuthAdapter } = RainbowKitVueSiweAuthAdapterPlugin();

        ///if having existing i18n 
        const newI18n = createI18n({
            locale: 'en',
            fallbackLocale: 'en',
            legacy: true,
            globalInjection: true,
            messages: {
                'en': {
                    "wallet.module": "The wording is the default word"
                }
            }
        });

        app.use(newI18n);
        
        const i18nAdapter = createI18nAdapter(app,{ 
            messages:{ "en": { "wallet.module": "You can override the existing language with same key or add your new language wording" }},
            i18n: newI18n
        });
        const authAdapter = createAuthAdapter(app);

        //If want to change locale and don't want to use vue-i18n, use default locale adapter
        //const { install: createDefaultLocaleAdapter } = createRainbowKitDefaultLocaleAdapter();
        //const defaultLocaleAdapter = createDefaultLocaleAdapter({ locale: 'en', fallbackLocale:  'en' , message: { "en": { "wallet.module": "You can override the existing language with same key or add your new language wording" }}})
        
        return {
            chains: [
                mainnet,
                zkSync,
                scroll,
                polygonZkEvm,
                immutableZkEvm,
                avalanche
            ],
            locale: i18nAdapter,
            connectModalTeleportTarget: '#rainbowkit-modal',
            wallets: [
                {
                    groupName: "Populars",
                    wallets: [
                        metaMaskWallet,
                        coinbaseWallet,
                        rainbowWallet,
                        walletConnectWallet,
                    ],
                },
                {
                    groupName: "Others",
                    wallets: [
                        metaMaskWallet,
                        argentWallet,
                        bifrostWallet,
                        bitgetWallet,
                        bitskiWallet,
                        bloomWallet,
                        braveWallet,
                        clvWallet,
                        coin98Wallet,
                        coinbaseWallet,
                        coreWallet,
                        dawnWallet,
                        desigWallet,
                        enkryptWallet,
                        foxWallet,
                        frameWallet,
                        frontierWallet,
                        imTokenWallet,
                        injectedWallet,
                        kresusWallet,
                        ledgerWallet,
                        metaMaskWallet,
                        mewWallet,
                        oktoWallet,
                        okxWallet,
                        omniWallet,
                        oneKeyWallet,
                        phantomWallet,
                        rabbyWallet,
                        rainbowWallet,
                        ramperWallet,
                        roninWallet,
                        safeWallet,
                        safeheronWallet,
                        safepalWallet,
                        subWallet,
                        tahoWallet,
                        talismanWallet,
                        tokenaryWallet,
                        tokenPocketWallet,
                        trustWallet,
                        uniswapWallet,
                        walletConnectWallet,
                        xdefiWallet,
                        zealWallet,
                        zerionWallet,
                    ]
                }
            ],
            auth: {
                allowAuthenticate: false,
                authenticateAdapter: authAdapter,
            },
            coolMode: true,
            currencyAddress: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
            appName: 'RainbowKit Vue Demo',
            projectId: 'YOUR_PROJECT_ID',
            avatar: ({ size },_)=>{
                return ()=> h('div',{
                    style: {
                        alignItems: 'center',
                        backgroundColor: 'lightpink',
                        color: 'black',
                        display: 'flex',
                        height: `${size}px`,
                        justifyContent: 'center',
                        width: `${size}px`,
                    },
                });
            },
            disclaimer: ({ text: DisclaimerText, link: DisclaimerLink })=>{
                return () => h(DisclaimerText, ()=>[
                    'By connecting, you agree to this demo\'s ',
                    h(DisclaimerLink, { href: RAINBOW_TERMS }, () => 'Terms of Service'),
                    ' and acknowledge you have read and understand our ',
                    h(DisclaimerLink, { href: RAINBOW_TERMS }, () => 'Disclaimer')
                ])
            },
            connectModalIntro: ()=>{
                return ()=>{
                    return h('div','You can start your journey here by using web3 wallet.');
                }
            },
        };
    }

    app.use(RainbowKitVuePlugin,configure());
    return app;
}