import type { WalletConnector } from "../..";
export type WalletButtonRendererProps = {
    error: boolean;
    loading: boolean;
    connected: boolean;
    ready: boolean;
    connector?: WalletConnector;
    connect: () => Promise<void>;
};
export type WalletButtonProps = {
    wallet?: string;
};
//# sourceMappingURL=walletButton.d.ts.map