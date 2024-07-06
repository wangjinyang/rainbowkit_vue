import type { Wallet } from '@/types';
import {
  getInjectedConnector,
  hasInjectedProvider,
} from '@/utils';

export const compassWallet = (): Wallet => {
  const isCompassInjected = hasInjectedProvider({ namespace: 'compassEvm' });

  return {
    id: 'compass',
    name: 'Compass Wallet',
    installed: isCompassInjected,
    iconUrl: (import.meta.glob<{ default: string }>('./compassWallet.svg',{ query: '?url',eager: true }))['./compassWallet.svg'].default,
    iconBackground: '#fff',
    downloadUrls: {
      chrome:
        'https://chromewebstore.google.com/detail/compass-wallet-for-sei/anokgmphncpekkhclmingpimjmcooifb',
      browserExtension: 'https://compasswallet.io/download',
    },
    extensions: {
      instructions: {
        learnMoreUrl: 'https://compasswallet.io/download',
        steps: [
          {
            description:
              'wallet_connectors.compass.extension.step1.description',
            step: 'install',
            title: 'wallet_connectors.compass.extension.step1.title',
          },
          {
            description:
              'wallet_connectors.compass.extension.step2.description',
            step: 'create',
            title: 'wallet_connectors.compass.extension.step2.title',
          },
          {
            description:
              'wallet_connectors.compass.extension.step3.description',
            step: 'refresh',
            title: 'wallet_connectors.compass.extension.step3.title',
          },
        ],
      },
    },
    createConnector: getInjectedConnector({ namespace: 'compassEvm' }),
  };
};