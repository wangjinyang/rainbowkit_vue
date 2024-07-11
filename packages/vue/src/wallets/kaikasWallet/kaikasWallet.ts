import { DefaultWalletOptions, Wallet, WalletProvider } from '@/types/composables/wallet';
import { isMobile } from '@/utils';
import { getInjectedConnector, getWalletConnectConnector, hasInjectedProvider } from '@/utils/wallet';

declare global {
    interface Window{
        klaytn?:WalletProvider
    }
}

export type KaikasWalletOptions = DefaultWalletOptions;
export const kaikasWallet = ({
    projectId,
    walletConnectParameters,
  }: KaikasWalletOptions): Wallet => {
    const isKaikasWalletInjected = hasInjectedProvider({
      namespace: 'klaytn',
    });
  
    const shouldUseWalletConnect = !isKaikasWalletInjected;
  
    const getUri = () => {
      return `kaikas://wallet/browser?url=${encodeURI(window.location.origin)}`
    };
  
    return {
      id: 'kaikas',
      name: 'Kaikas Wallet',
      iconUrl: (import.meta.glob<{ default: string }>('./kaikasWallet.svg',{ query: '?url',eager: true }))['./kaikasWallet.svg'].default,
      installed: isKaikasWalletInjected || undefined,
      iconBackground: '#fff',
      downloadUrls: {
        chrome:
          'https://chromewebstore.google.com/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi',
        browserExtension: 'https://app.kaikas.io',
        qrCode: 'https://app.kaikas.io',
        ios: 'https://apps.apple.com/us/app/kaikas-mobile-crypto-wallet/id1626107061',
        android: 'https://play.google.com/store/apps/details?id=io.klutch.wallet',
        mobile: 'https://app.kaikas.io',
      },
      mobile: { getUri: shouldUseWalletConnect ? getUri : (uri: string) => `kaikas://wc?uri=${encodeURIComponent(uri)}` },
      qrCode: shouldUseWalletConnect
        ? {
            getUri: (uri: string) => uri,
            instructions: {
              learnMoreUrl: 'https://kaikas.io',
              steps: [
                {
                  description:
                    'wallet_connectors.kaikas.qr_code.step1.description',
                  step: 'install',
                  title: 'wallet_connectors.kaikas.qr_code.step1.title',
                },
                {
                  description:
                    'wallet_connectors.kaikas.qr_code.step2.description',
                  step: 'create',
                  title: 'wallet_connectors.kaikas.qr_code.step2.title',
                },
                {
                  description:
                    'wallet_connectors.kaikas.qr_code.step3.description',
                  step: 'refresh',
                  title: 'wallet_connectors.kaikas.qr_code.step3.title',
                },
              ],
            },
          }
        : undefined,
      extensions: {
        instructions: {
          learnMoreUrl: 'https://kaikas.io',
          steps: [
            {
              description: 'wallet_connectors.kaikas.extension.step1.description',
              step: 'install',
              title: 'wallet_connectors.kaikas.extension.step1.title',
            },
            {
              description: 'wallet_connectors.kaikas.extension.step2.description',
              step: 'create',
              title: 'wallet_connectors.kaikas.extension.step2.title',
            },
            {
              description: 'wallet_connectors.kaikas.extension.step3.description',
              step: 'refresh',
              title: 'wallet_connectors.kaikas.extension.step3.title',
            },
          ],
        },
      },
      createConnector: shouldUseWalletConnect
        ? getWalletConnectConnector({
            projectId,
            walletConnectParameters,
          })
        : getInjectedConnector(isMobile ? { target: typeof window !== 'undefined' ? window.klaytn : undefined } : { namespace: 'klaytn' }),
    };
  };