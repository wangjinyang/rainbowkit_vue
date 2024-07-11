
import { getInjectedConnector } from '@/utils/wallet';
import type { Wallet } from '@/types'

export const injectedWallet = (): Wallet => {
  return {
    id: 'injected',
    name: 'Browser Wallet',
    iconUrl: (import.meta.glob<{ default: string }>('./injectedWallet.svg',{ query: '?url',eager: true }))['./injectedWallet.svg'].default,
    iconBackground: '#fff',
    createConnector: getInjectedConnector({})
  }
}
