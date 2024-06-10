import { type ModalContext, type Context, type ModalSize, type RainbowKitPluginOptions } from '../types';
export declare function configureModalSizeContext(): void;
export declare function configureModalContext(): void;
export declare function createModalSizeContext(option: RainbowKitPluginOptions): Context<ModalSize>;
export declare function createModalContext(option: RainbowKitPluginOptions): Context<ModalContext>;
export declare function useModalSizeContext(): {
    compactModeEnabled: import("vue").ComputedRef<boolean>;
    modalSize: Context<ModalSize>;
};
export declare function useModalContext(): import("vue").ToRefs<{
    accountModalOpen: boolean;
    chainModalOpen: boolean;
    connectModalOpen: boolean;
    isWalletConnectModalOpen: boolean;
    isUnauthenticate: boolean;
    connectModalTeleportTarget?: string | undefined;
    chainModalTeleportTarget?: string | undefined;
    accountModalTeleportTarget?: string | undefined;
    openAccountModal: () => void;
    openChainModal: () => void;
    openConnectModal: () => void;
    closeAccountModal: () => void;
    closeChainModal: () => void;
    closeConnectModal: () => void;
    closeAllModal: (keepConnectModal: boolean) => void;
}>;
//# sourceMappingURL=modal.d.ts.map