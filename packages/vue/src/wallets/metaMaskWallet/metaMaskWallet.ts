import { hasInjectedProvider } from "@/utils/wallet"
import { isMobile } from "@/utils/mobile"
import type { CreateConnectorFn, CreateWalletFn, DefaultWalletOptions, Wallet, WalletDetailsParams } from '@/types';
import { metaMask, MetaMaskParameters } from "@wagmi/vue/connectors";
import { createConnector } from "@wagmi/vue";

export const METAMASK_WALLET_ID = 'metaMask';
export type MetaMaskWalletOptions = DefaultWalletOptions;

export type MetaMaskWalletSDKOptions = Pick<
  Parameters<CreateWalletFn>[0],
  'appName' | 'appIcon'
>;

export interface MetamaskWallet {
  (params: MetaMaskWalletOptions): Wallet;
  parameters?: Pick<MetaMaskParameters, 'infuraAPIKey'>;
}

export interface MetaMaskConnector extends ReturnType<CreateConnectorFn> {
  getDisplayUri: (provider:any) => Promise<string>;
}

function _configureCreateMetamaskConnector(
  information: WalletDetailsParams, 
  wallet: MetamaskWallet,
  options:MetaMaskWalletSDKOptions,
  isExtensionInjected:boolean,
):CreateConnectorFn{
  return createConnector((config)=>{  
      const displayUri: { value?: string } = {};
      const connector = metaMask({
        ...wallet.parameters,
        enableAnalytics: true,
        extensionOnly: isExtensionInjected ? true : undefined,
        dappMetadata: {
          name: options.appName,
          iconUrl: options.appIcon,
          url: window.location.href,
        },
        logging: {
          developerMode: false,
        },
        checkInstallationImmediately: true,
        modals: {
          install: ({ link }) => {
            return {
              mount: () => {
                displayUri.value = link;
              },
              unmount: (shouldTerminate) => {
                if(!shouldTerminate) return;
                displayUri.value = undefined;
              },
            };
          },
        },
      })(config);

      const getChainId = connector.getChainId;
        connector.getChainId = async () => {
          try {
            return await getChainId();
          } catch {
            return config.chains[0]?.id ?? 1;
          }
      };

      const getDisplayUri = async (provider: any) => {
        if (displayUri.value) {
          return displayUri.value;
        }

        displayUri.value = await new Promise((resolve) => {
          const onDisplayUri = (uri: unknown) => {
            displayUri.value = uri as string;
          };
          provider.once('display_uri', (uri:string) => {
            provider.on('display_uri', onDisplayUri);
            provider.once('disconnect', () => {
              provider.removeListener('display_uri', onDisplayUri);
              displayUri.value = undefined;
            });

            resolve(uri as string);
          });
        });

        return displayUri.value;
      }

      return {
        getDisplayUri,
        ...connector,
        ...information
      }

    })
}

export const metaMaskWallet = ({ appName, appIcon }: MetaMaskWalletSDKOptions): Wallet => {
  const isExtensionInjected = hasInjectedProvider({ flag: 'isMetaMask' });
  
  return {
    id: METAMASK_WALLET_ID,
    name: 'MetaMask',
    rdns: 'io.metamask',
    iconUrl: (import.meta.glob<{ default: string }>('./metaMaskWallet.svg',{ query: '?url',eager: true }))['./metaMaskWallet.svg'].default,
    iconAccent: '#f6851a',
    iconBackground: '#fff',
    installed: isExtensionInjected ? true : undefined,
    downloadUrls: {
      android: 'https://play.google.com/store/apps/details?id=io.metamask',
      ios: 'https://apps.apple.com/us/app/metamask/id1438144202',
      mobile: 'https://metamask.io/download',
      qrCode: 'https://metamask.io/download',
      chrome:
        'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
      edge: 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm',
      firefox: 'https://addons.mozilla.org/firefox/addon/ether-metamask',
      opera: 'https://addons.opera.com/extensions/details/metamask-10',
      browserExtension: 'https://metamask.io/download',
    },
    mobile: isMobile
      ? {
          getUri: (uri: string) => uri,
        }
      : undefined,
    qrCode: !isExtensionInjected
      ? {
          getUri: (uri: string) => uri,
          instructions: {
            learnMoreUrl: 'https://metamask.io/faqs/',
            steps: [
              {
                description:
                  'wallet_connectors.metamask.qr_code.step1.description',
                step: 'install',
                title: 'wallet_connectors.metamask.qr_code.step1.title',
              },
              {
                description:
                  'wallet_connectors.metamask.qr_code.step2.description',
                step: 'create',
                title: 'wallet_connectors.metamask.qr_code.step2.title',
              },
              {
                description:
                  'wallet_connectors.metamask.qr_code.step3.description',
                step: 'refresh',
                title: 'wallet_connectors.metamask.qr_code.step3.title',
              },
            ],
          },
        }
      : undefined,
    extensions: !isExtensionInjected
      ? {
          instructions: {
            learnMoreUrl: 'https://metamask.io/faqs/',
            steps: [
              {
                description:
                  'wallet_connectors.metamask.extension.step1.description',
                step: 'install',
                title: 'wallet_connectors.metamask.extension.step1.title',
              },
              {
                description:
                  'wallet_connectors.metamask.extension.step2.description',
                step: 'create',
                title: 'wallet_connectors.metamask.extension.step2.title',
              },
              {
                description:
                  'wallet_connectors.metamask.extension.step3.description',
                step: 'refresh',
                title: 'wallet_connectors.metamask.extension.step3.title',
              },
            ],
          },
        }
      : undefined,
      createConnector: (detail) => _configureCreateMetamaskConnector(detail,metaMaskWallet,{ appName,appIcon },isExtensionInjected)
  }
};
