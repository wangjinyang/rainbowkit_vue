import { Component, DeepReadonly } from "vue";
import type { WalletConnector } from "../..";
export type LoadingSpinnerIconProps = {
    wallet: WalletConnector;
};
export type MobileWalletButtonProps = {
    onClose: () => void;
    wallet: DeepReadonly<WalletConnector>;
    connecting: boolean;
};
export declare enum MobileWalletSteps {
    Connect = "CONNECT",
    Get = "GET"
}
export type MobileWalletGetProps = {
    wallets: Array<WalletConnector>;
    isIOS: boolean;
};
export type MobileWalletConnectProps = {
    wallets: Array<WalletConnector>;
    disclaimer: Component | undefined;
    onClose: () => void;
    changeWalletStep: (step: MobileWalletSteps) => void;
    walletStep: MobileWalletSteps;
    learnMoreUrl?: string;
};
export type MobileOptionsProps = {
    onClose: () => void;
};
export type MobileWalletSummary = {
    headerLabel?: string;
    headerBackgroundContrast?: boolean;
    headerBackButtonLink?: MobileWalletSteps;
    currentWalletStep: MobileWalletSteps;
};
export type MobileWalletSummaryReturnType = {
    [key in MobileWalletSteps]: MobileWalletSummary;
};
//# sourceMappingURL=mobileOption.d.ts.map