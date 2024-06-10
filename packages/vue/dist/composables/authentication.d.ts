import { AuthenticationConfig, Context, RainbowKitPluginOptions } from "../types";
export declare function createAuthenticationConfigContext(option: RainbowKitPluginOptions): Context<AuthenticationConfig>;
export declare function useAuthenticationConfigContext(): import("vue").ToRefs<{
    adapter?: {
        getNonce: () => Promise<string>;
        createMessage: (args: {
            nonce: string;
            address: string;
            chainId: number;
        }) => any;
        getMessageBody: (args: {
            message: any;
        }) => any;
        verify: (args: {
            message: any;
            signature: string;
        }) => Promise<boolean>;
        signOut: () => Promise<void>;
    } | undefined;
    status?: import("../types").AuthenticationStatus | undefined;
}>;
//# sourceMappingURL=authentication.d.ts.map