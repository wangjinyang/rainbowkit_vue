import { isAndroid } from '@/utils/mobile';
import { DefaultWalletOptions, Wallet } from '@/types/composables/wallet';
import { getWalletConnectConnector } from '@/utils/wallet';

export type BinanceWalletOptions = DefaultWalletOptions;

export const binanceWallet = ({
  projectId,
  walletConnectParameters,
}: BinanceWalletOptions): Wallet => {
 
  const getUri = (uri: string) => {
    return isAndroid
      ? uri
      : `https://app.bifrostwallet.com/wc?uri=${encodeURIComponent(uri)}`;
  };

  return {
    id: 'binance',
    name: 'Binance Wallet',
    iconUrl: (import.meta.glob<{ default: string }>('./binanceWallet.svg',{ query: '?url',eager: true }))['./binanceWallet.svg'].default,
    iconBackground: '#fff',
    downloadUrls: {
        android: 'https://play.google.com/store/apps/details?id=com.binance.dev',
        ios: 'https://apps.apple.com/us/app/id1436799971',
        mobile: 'https://www.binance.com/en/download',
        qrCode: 'https://www.binance.com/en/web3wallet',
    },
    mobile: {
      getUri,
    },
    qrCode: {
        getUri,
        instructions: {
            learnMoreUrl: 'https://www.binance.com/en/web3wallet',
            steps: [
              {
                description: 'wallet_connectors.binance.qr_code.step1.description',
                step: 'install',
                title: 'wallet_connectors.binance.qr_code.step1.title',
              },
              {
                description: 'wallet_connectors.binance.qr_code.step2.description',
                step: 'create',
                title: 'wallet_connectors.binance.qr_code.step2.title',
              },
              {
                description: 'wallet_connectors.binance.qr_code.step3.description',
                step: 'scan',
                title: 'wallet_connectors.binance.qr_code.step3.title',
              },
            ],
        },
    },
    createConnector: getWalletConnectConnector({
        projectId,
        walletConnectParameters,
    }),
  };
};
