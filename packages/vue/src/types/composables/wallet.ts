
import type { ConnectMutateAsync } from '@wagmi/vue/query';
import { Connector,  CreateConnectorFn, Config } from '@wagmi/vue';
import { type WalletConnectParameters } from '@wagmi/vue/connectors';
import { type EIP1193Provider } from 'viem';

export const latestWalletStorageKey = "rk-latest-id";
export const recentWalletStorageKey = "rk-recent";
export type RainbowKitInstructionStepName = 'install' | 'create' | 'scan' | 'connect' | 'refresh';
export type RainbowKitInstructionStep = {
  step: RainbowKitInstructionStepName
  title: string
  description: string
}
export type RainbowKitInstruction = {
  learnMoreUrl: string
  steps: Array<RainbowKitInstructionStep>
}
export type RainbowKitConnector = {
  mobile?: {
    getUri?: (uri: string) => string
  }
  deskstop?: {
    getUri?: (uri: string) => string
    instructions?: RainbowKitInstruction
  }
  qrCode?: {
    getUri?: (uri: string) => string
    instructions?: RainbowKitInstruction
  }
  extensions?: {
    instructions?: RainbowKitInstruction
  }
}
export type Wallet = {
  id: string
  name: string
  rdns?: string
  shortName?: string
  iconUrl: string | (() => Promise<string>)
  iconAccent?: string
  iconBackground: string
  installed?: boolean
  downloadUrls?: {
    android?: string
    ios?: string
    mobile?: string
    qrCode?: string
    chrome?: string
    edge?: string
    firefox?: string
    opera?: string
    safari?: string
    browserExtension?: string
    macos?: string
    windows?: string
    linux?: string
    desktop?: string
  }
  hidden?: () => boolean
  createConnector: (walletDetails: WalletDetailsParams) => CreateConnectorFn
} & RainbowKitConnector
export type DefaultWalletOptions = {
  projectId: string
  appName: string
  appIcon?: string
  walletConnectParameters?: RainbowKitWalletConnectParameters
  walletConnectParametersForOthers?: RainbowKitWalletConnectParameters
}
export type CreateWalletFn = (createWalletParams: DefaultWalletOptions) => Wallet
export type WalletList = Array<{
  groupName: string
  wallets: CreateWalletFn[]
}>
export type RainbowKitWalletConnectParameters = Omit<
  WalletConnectParameters,
  'showQrModal' | 'projectId'
>
export type RainbowKitDetails = Omit<Wallet, 'createConnector' | 'hidden'> & {
  index: number
  groupIndex: number
  groupName: string
  isWalletConnectModalConnector?: boolean
  isRainbowKitConnector: boolean
  walletConnectModalConnector?: Connector
  showQrModal?: true
}
export type WalletDetailsParams = { details: RainbowKitDetails }
export type CreateConnector = (walletDetails: { details: RainbowKitDetails }) => CreateConnectorFn
export type WagmiConnectorInstance = Connector & {
  details?: RainbowKitDetails
}
export type WalletInstance = Connector & RainbowKitDetails
export type WalletConnectorsParam = {
  projectId: string
  appName: string
  appDescription?: string
  appUrl?: string
  appIcon?: string
  walletConnectParameters?: RainbowKitWalletConnectParameters
}
export type WalletMetaDataParameters = {
  appName: string
  appDescription?: string
  appUrl?: string
  appIcon?: string
}
export type WalletListItem = {
  index: number
  groupIndex: number
  groupName: string
} & Wallet
export type InjectedProviderRequest = {
  flag?: string
  namespace?: string
  target?: any
}

export interface WalletConnector extends WalletInstance {
  ready?: boolean;
  connect: () => ReturnType<ConnectMutateAsync<Config, unknown>>;
  showWalletConnectModal?: () => void;
  recent: boolean;
  mobileDownloadUrl?: string;
  extensionDownloadUrl?: string;
  desktopDownloadUrl?: string;
  getDesktopUri?: () => Promise<string>;
  getQrCodeUri?: () => Promise<string>;
  getMobileUri?: () => Promise<string>;
}

export interface GetWalletConnectConnectorParams {
  projectId: string
  walletConnectParameters?: RainbowKitWalletConnectParameters
}

export interface CreateWalletConnectConnectorParams {
  projectId: string
  walletDetails: WalletDetailsParams
  walletConnectParameters?: RainbowKitWalletConnectParameters
}

export interface GetOrCreateWalletConnectInstanceParams {
  projectId: string
  walletConnectParameters?: RainbowKitWalletConnectParameters
  showQrModal?: RainbowKitDetails['showQrModal']
}

export interface ConnectorsWithWalletsParams {
  wallets: WalletInstance[];
  recentWallets: WalletInstance[];
}


/** Combines members of an intersection into a readable type. */
export type Evaluate<type> = { [key in keyof type]: type[key] } & unknown;

/** Removes `readonly` from all properties of an object. */
export type Mutable<type extends object> = {
  -readonly [key in keyof type]: type[key];
};

// window.ethereum types

export type WalletProviderFlags =
  | 'isApexWallet'
  | 'isAvalanche'
  | 'isBackpack'
  | 'isBifrost'
  | 'isBitKeep'
  | 'isBitski'
  | 'isBlockWallet'
  | 'isBraveWallet'
  | 'isCoinbaseWallet'
  | 'isDawn'
  | 'isEnkrypt'
  | 'isExodus'
  | 'isFrame'
  | 'isFrontier'
  | 'isGamestop'
  | 'isHyperPay'
  | 'isImToken'
  | 'isKuCoinWallet'
  | 'isMathWallet'
  | 'isMetaMask'
  | 'isNestWallet'
  | 'isOkxWallet'
  | 'isOKExWallet'
  | 'isOneInchAndroidWallet'
  | 'isOneInchIOSWallet'
  | 'isOpera'
  | 'isPhantom'
  | 'isPortal'
  | 'isRabby'
  | 'isRainbow'
  | 'isStatus'
  | 'isTally'
  | 'isTokenPocket'
  | 'isTokenary'
  | 'isTrust'
  | 'isTrustWallet'
  | 'isXDEFI'
  | 'isZerion'
  | 'isTalisman'
  | 'isZeal'
  | 'isCoin98'
  | 'isMEWwallet'
  | 'isSafeheron'
  | 'isSafePal'
  | '__seif';

export type WalletProvider = Evaluate<
  EIP1193Provider & {
    [key in WalletProviderFlags]?: true | undefined;
  } & {
    providers?: any[] | undefined;
    /** Only exists in MetaMask as of 2022/04/03 */
    _events?: { connect?: (() => void) | undefined } | undefined;
    /** Only exists in MetaMask as of 2022/04/03 */
    _state?:
      | {
          accounts?: string[];
          initialized?: boolean;
          isConnected?: boolean;
          isPermanentlyDisconnected?: boolean;
          isUnlocked?: boolean;
        }
      | undefined;
  }
>;

export type WindowProvider = {
  coinbaseWalletExtension?: WalletProvider | undefined;
  ethereum?: WalletProvider | undefined;
  phantom?: { ethereum: WalletProvider } | undefined;
  providers?: any[] | undefined; // Adjust the type as needed
};