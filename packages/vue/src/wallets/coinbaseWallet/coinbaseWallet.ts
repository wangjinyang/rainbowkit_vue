import type { CreateConnectorFn, Wallet, WalletDetailsParams } from '@/types';
import { isIOS} from "@/utils/mobile";
import { coinbaseWallet as coinbaseConnector, CoinbaseWalletParameters } from '@wagmi/vue/connectors';
import { createConnector } from '@wagmi/vue';
import { hasInjectedProvider } from '@/utils/wallet';

export interface CoinbaseWalletOptions {
  appName: string;
  appIcon?: string;
}

export const coinbaseWallet = (preference:CoinbaseWalletParameters<'4'>['preference'] = 'all') =>{
  if(preference === 'eoaOnly' || preference === 'all'){
    const isCoinbaseInjected = hasInjectedProvider({ flag: 'isCoinbaseWallet' });
    ///When user does not have coinbase extension installed, smart wallet popup screen would always display, return smart wallet instances would do. 
    return isCoinbaseInjected ? preference === 'eoaOnly' ? eoa : all : smartWallet;
  }

  return smartWallet;
}

const all = ({
  appName,
  appIcon,
}: CoinbaseWalletOptions) : Wallet=> {

  const getUri = (uri: string) => uri;
  const ios = isIOS;

  return {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    shortName: 'Coinbase',
    rdns: 'com.coinbase.wallet',
    iconUrl:  (import.meta.glob<{ default: string }>('./coinbaseWallet.svg',{ query: '?url',eager: true }))['./coinbaseWallet.svg'].default,
    iconAccent: '#2c5ff6',
    iconBackground: '#2c5ff6',
    // If the coinbase wallet browser extension is not installed, a popup will appear
    // prompting the user to connect or create a wallet via passkey. This means if you either have
    // or don't have the coinbase wallet browser extension installed it'll do some action anyways
    installed: true,
    downloadUrls: {
      android: 'https://play.google.com/store/apps/details?id=org.toshi',
      ios: 'https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455',
      mobile: 'https://coinbase.com/wallet/downloads',
      qrCode: 'https://coinbase-wallet.onelink.me/q5Sx/fdb9b250',
      chrome:
        'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
      browserExtension: 'https://coinbase.com/wallet',
    },
    ...(ios
      ? {}
      : {
          qrCode: {
            getUri,
            instructions: {
              learnMoreUrl:
                'https://coinbase.com/wallet/articles/getting-started-mobile',
              steps: [
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.coinbase.qr_code.step1.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.coinbase.qr_code.step2.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step3.description',
                  step: 'scan',
                  title: 'wallet_connectors.coinbase.qr_code.step3.title',
                },
              ],
            },
          },
          extension: {
            instructions: {
              learnMoreUrl:
                'https://coinbase.com/wallet/articles/getting-started-extension',
              steps: [
                {
                  description:
                    'wallet_connectors.coinbase.extension.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.coinbase.extension.step1.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.extension.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.coinbase.extension.step2.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.extension.step3.description',
                  step: 'refresh',
                  title: 'wallet_connectors.coinbase.extension.step3.title',
                },
              ],
            },
          },
        }),
    createConnector: (walletDetails: WalletDetailsParams) => {
      const connector: CreateConnectorFn = coinbaseConnector({
        appName,
        appLogoUrl: appIcon,
        preference: 'all',
        version: '4',
      });
      return createConnector((config) => 
        ({
          ...connector(config),
          ...walletDetails
        })
    );
    },
  };
};

const smartWallet = ({
  appName,
  appIcon,
}: CoinbaseWalletOptions) : Wallet=> {
  const getUri = (uri: string) => uri;
  const ios = isIOS;
  return {
    id: 'smart-wallet-coinbase',
    name: 'Coinbase Smart Wallet',
    shortName: 'Coinbase',
    iconUrl:  (import.meta.glob<{ default: string }>('./coinbaseWallet.svg',{ query: '?url',eager: true }))['./coinbaseWallet.svg'].default,
    iconAccent: '#2c5ff6',
    iconBackground: '#2c5ff6',
    // If the coinbase wallet browser extension is not installed, a popup will appear
    // prompting the user to connect or create a wallet via passkey. This means if you either have
    // or don't have the coinbase wallet browser extension installed it'll do some action anyways
    installed: true,
    downloadUrls: {
      android: 'https://play.google.com/store/apps/details?id=org.toshi',
      ios: 'https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455',
      mobile: 'https://coinbase.com/wallet/downloads',
      qrCode: 'https://coinbase-wallet.onelink.me/q5Sx/fdb9b250',
      chrome:
        'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
      browserExtension: 'https://coinbase.com/wallet',
    },
    ...(ios
      ? {}
      : {
          qrCode: {
            getUri,
            instructions: {
              learnMoreUrl:
                'https://coinbase.com/wallet/articles/getting-started-mobile',
              steps: [
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.coinbase.qr_code.step1.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.coinbase.qr_code.step2.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step3.description',
                  step: 'scan',
                  title: 'wallet_connectors.coinbase.qr_code.step3.title',
                },
              ],
            },
          },
          extension: {
            instructions: {
              learnMoreUrl:
                'https://coinbase.com/wallet/articles/getting-started-extension',
              steps: [
                {
                  description:
                    'wallet_connectors.coinbase.extension.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.coinbase.extension.step1.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.extension.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.coinbase.extension.step2.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.extension.step3.description',
                  step: 'refresh',
                  title: 'wallet_connectors.coinbase.extension.step3.title',
                },
              ],
            },
          },
        }),
    createConnector: (walletDetails: WalletDetailsParams) => {
      const connector: CreateConnectorFn = coinbaseConnector({
        appName,
        appLogoUrl: appIcon,
        preference: 'smartWalletOnly',
        version: '4',
      });
      return createConnector((config) => 
        ({
          ...connector(config),
          ...walletDetails
        })
    );
    },
  };
};

const eoa = ({
  appName,
  appIcon,
}: CoinbaseWalletOptions) : Wallet=> {

  const getUri = (uri: string) => uri;
  const ios = isIOS;

  return {
    id: 'eoa-coinbase',
    name: 'Coinbase Wallet',
    shortName: 'Coinbase',
    rdns: 'com.coinbase.wallet',
    iconUrl:  (import.meta.glob<{ default: string }>('./coinbaseWallet.svg',{ query: '?url',eager: true }))['./coinbaseWallet.svg'].default,
    iconAccent: '#2c5ff6',
    iconBackground: '#2c5ff6',
    // If the coinbase wallet browser extension is not installed, a popup will appear
    // prompting the user to connect or create a wallet via passkey. This means if you either have
    // or don't have the coinbase wallet browser extension installed it'll do some action anyways
    installed: true,
    downloadUrls: {
      android: 'https://play.google.com/store/apps/details?id=org.toshi',
      ios: 'https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455',
      mobile: 'https://coinbase.com/wallet/downloads',
      qrCode: 'https://coinbase-wallet.onelink.me/q5Sx/fdb9b250',
      chrome:
        'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
      browserExtension: 'https://coinbase.com/wallet',
    },
    ...(ios
      ? {}
      : {
          qrCode: {
            getUri,
            instructions: {
              learnMoreUrl:
                'https://coinbase.com/wallet/articles/getting-started-mobile',
              steps: [
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.coinbase.qr_code.step1.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.coinbase.qr_code.step2.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.qr_code.step3.description',
                  step: 'scan',
                  title: 'wallet_connectors.coinbase.qr_code.step3.title',
                },
              ],
            },
          },
          extension: {
            instructions: {
              learnMoreUrl:
                'https://coinbase.com/wallet/articles/getting-started-extension',
              steps: [
                {
                  description:
                    'wallet_connectors.coinbase.extension.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.coinbase.extension.step1.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.extension.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.coinbase.extension.step2.title',
                },
                {
                  description:
                    'wallet_connectors.coinbase.extension.step3.description',
                  step: 'refresh',
                  title: 'wallet_connectors.coinbase.extension.step3.title',
                },
              ],
            },
          },
        }),
    createConnector: (walletDetails: WalletDetailsParams) => {
      const connector: CreateConnectorFn = coinbaseConnector({
        appName,
        appLogoUrl: appIcon,
        preference: 'eoaOnly',
        version: '4',
      });
      return createConnector((config) => 
        ({
          ...connector(config),
          ...walletDetails
        })
    );
    },
  };
};