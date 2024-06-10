import { ResponsiveValue } from "../../css";
import { AccountStatus, ChainStatus, ConnectionStatus, GetEnsAddressReturnType, GetEnsAvatarReturnType, GetEnsNameReturnType } from "../../types";
import { PropType, SlotsType } from "vue";
export declare const createConnectButtonProps: {
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "Connect Wallet";
    };
    readonly accountStatus: {
        readonly type: PropType<ResponsiveValue<AccountStatus>>;
        readonly default: "full";
    };
    readonly chainStatus: {
        readonly type: PropType<ResponsiveValue<ChainStatus>>;
        readonly default: () => {
            largeScreen: string;
            smallScreen: string;
        };
    };
    readonly showBalance: {
        readonly type: PropType<ResponsiveValue<boolean>>;
        readonly default: () => {
            largeScreen: boolean;
            smallScreen: boolean;
        };
    };
};
export declare const ConnectButton: import("vue").DefineComponent<{
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "Connect Wallet";
    };
    readonly accountStatus: {
        readonly type: PropType<ResponsiveValue<AccountStatus>>;
        readonly default: "full";
    };
    readonly chainStatus: {
        readonly type: PropType<ResponsiveValue<ChainStatus>>;
        readonly default: () => {
            largeScreen: string;
            smallScreen: string;
        };
    };
    readonly showBalance: {
        readonly type: PropType<ResponsiveValue<boolean>>;
        readonly default: () => {
            largeScreen: boolean;
            smallScreen: boolean;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "Connect Wallet";
    };
    readonly accountStatus: {
        readonly type: PropType<ResponsiveValue<AccountStatus>>;
        readonly default: "full";
    };
    readonly chainStatus: {
        readonly type: PropType<ResponsiveValue<ChainStatus>>;
        readonly default: () => {
            largeScreen: string;
            smallScreen: string;
        };
    };
    readonly showBalance: {
        readonly type: PropType<ResponsiveValue<boolean>>;
        readonly default: () => {
            largeScreen: boolean;
            smallScreen: boolean;
        };
    };
}>>, {
    readonly showBalance: ResponsiveValue<boolean>;
    readonly label: string;
    readonly accountStatus: ResponsiveValue<AccountStatus>;
    readonly chainStatus: ResponsiveValue<ChainStatus>;
}, SlotsType<{
    custom: {
        account?: {
            address: string;
            balanceDecimals?: number;
            balanceSymbol?: string;
            balance?: string;
            displayName?: GetEnsNameReturnType | GetEnsAddressReturnType;
            ensAvatar?: GetEnsAvatarReturnType;
            ensName?: GetEnsNameReturnType;
            hasPendingTransactions: boolean;
            displayBalance: boolean;
        };
        chain?: {
            hasIcon: boolean;
            iconUrl?: string;
            iconBackground?: string;
            id: number;
            name?: string;
            unsupported?: boolean;
            loading: boolean;
            shouldHideChainButton?: boolean;
        };
        connectionStatus?: ConnectionStatus;
        accountModalOpen: boolean;
        chainModalOpen: boolean;
        connectModalOpen: boolean;
        openAccountModal: () => void;
        openChainModal: () => void;
        openConnectModal: () => void;
    };
}>>;
//# sourceMappingURL=ConnectButton.d.ts.map