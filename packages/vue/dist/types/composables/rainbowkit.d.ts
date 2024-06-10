import type { CreateConfigParameters } from "@wagmi/vue";
import type { Transport, Chain, Address } from "viem";
import type { AvatarComponentSetupFn } from "../components/AccountModal/avatar";
import type { LocaleAdapterInstance } from "./locale";
import type { ModalSize } from "./modal";
import type { RainbowKitChain } from "./chain";
import type { ThemeOption } from "../css/theme.css.type";
import type { WalletList } from "./wallet";
import type { AuthenticateOption } from "./account";
import type { ResponsiveValue } from "../../css";
import { ConnectModalIntroComponentSetupFn } from "../../components/ConnectModal/ConnectModalIntro";
import { DisclaimerComponentSetupFn } from "../components/Others/disclaimer";
export type Chains = readonly [Chain, ...Chain[]];
export type Transports = Record<Chains[number]['id'], Transport>;
export type RainbowKitChains = readonly [RainbowKitChain, ...RainbowKitChain[]];
export type RainbowKitTransports = Record<RainbowKitChains[number]['id'], Transport>;
export type RainbowKitPluginConfig = {
    appName: string;
    appDescription?: string;
    appUrl?: string;
    appIcon?: string;
    projectId: string;
    connectModalTeleportTarget?: string;
    chainModalTeleportTarget?: string;
    accountModalTeleportTarget?: string;
    learnMoreUrl?: string;
    showRecentTransactions?: boolean;
    coolMode?: boolean;
    initialChainId?: number;
    ignoreChainModalOnConnect?: boolean;
    currencyAddress?: Address;
    showBalance?: ResponsiveValue<boolean>;
    disclaimer?: DisclaimerComponentSetupFn;
    avatar?: AvatarComponentSetupFn;
    connectModalIntro?: ConnectModalIntroComponentSetupFn;
    wallets?: WalletList;
    theme?: ThemeOption;
    locale?: LocaleAdapterInstance;
    modalSize?: ModalSize;
    auth?: AuthenticateOption;
};
export type RainbowKitPluginOptions = RainbowKitPluginConfig & WagmiConfigParameters<RainbowKitChains, RainbowKitTransports>;
export type WagmiConfigParameters<chains extends RainbowKitChains, transport extends RainbowKitTransports> = Omit<CreateConfigParameters<chains, transport>, 'client' | 'connectors'>;
//# sourceMappingURL=rainbowkit.d.ts.map