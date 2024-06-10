import type { InjectionKey, Ref, ToRef, UnwrapRef } from 'vue';
import type { AvatarComponentSetupFn } from "../AccountModal/avatar";
import type { LocaleAdapterInstance } from "../../composables/locale";
import type { ModalContext, ModalSize } from "../../composables/modal";
import type { RainbowKitChainContext } from "../../composables/chain";
import type { ThemeOption } from "../../css/theme.css.type";
import type { RainbowKitPluginOptions } from "../../composables/rainbowkit";
import type { TransactionStoreContext } from "../../composables/transaction";
import type { WalletConnector } from "../../composables/wallet";
import type { AuthenticationConfig } from "../../composables/account";
import type { ResponsiveValue } from '../../../css';
import { ConnectModalIntroComponentSetupFn } from '../../../components';
import { DisclaimerComponentSetupFn } from './disclaimer';
import { Address } from 'viem';
export type WalletButtonContext = {
    connector: WalletConnector | null;
};
export type AppInfoContext = {
    name?: string;
    disclaimer?: DisclaimerComponentSetupFn;
    learnMoreUrl?: string;
    connectModalTeleportTarget?: string;
    chainModalTeleportTarget?: string;
    accountModalTeleportTarget?: string;
    connectModalIntro?: ConnectModalIntroComponentSetupFn;
};
export type UseAppContextReturnType = {
    [K in keyof AppInfoContext]: ToRef<UnwrapRef<AppInfoContext[K]>>;
};
export type ShowBalanceContext = {
    showBalance: ResponsiveValue<boolean> | undefined;
    currencyAddress?: Address;
};
export type Context<T> = Ref<UnwrapRef<T>>;
export declare const ModalSizeContextKey: InjectionKey<Context<ModalSize>>;
export declare const ModalContextKey: InjectionKey<Context<ModalContext>>;
export declare const WalletButtonContextKey: InjectionKey<Context<WalletButtonContext>>;
export declare const AppContextKey: InjectionKey<Context<AppInfoContext>>;
export declare const ShowBalanceContextKey: InjectionKey<Context<ShowBalanceContext>>;
export declare const ShowRecentTransactionsContextKey: InjectionKey<Context<boolean>>;
export declare const TransactionStoreContextKey: InjectionKey<Context<TransactionStoreContext>>;
export declare const CoolModeContextKey: InjectionKey<Context<boolean>>;
export declare const RainbowKitChainContextKey: InjectionKey<Context<RainbowKitChainContext>>;
export declare const ThemeContextKey: InjectionKey<Context<ThemeOption>>;
export declare const AuthenticationConfigContextKey: InjectionKey<Context<AuthenticationConfig>>;
export declare const LocaleAdapterContextKey: InjectionKey<Context<LocaleAdapterInstance>>;
export declare const AvatarComponentContextKey: InjectionKey<Context<AvatarComponentSetupFn | undefined>>;
export declare const RainbowKitConfigContextKey: InjectionKey<RainbowKitPluginOptions>;
//# sourceMappingURL=rainbowkitProvider.d.ts.map