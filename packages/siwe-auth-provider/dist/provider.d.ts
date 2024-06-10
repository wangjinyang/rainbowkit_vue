import { CreateSiweMessageReturnType, type SiweMessage } from "viem/siwe";
import { AuthenticationAdapter } from "use-rainbowkit-vue";
import { Options } from "vue-auth3";
import { App } from "vue";
export declare const RainbowKitVueSiweAuthAdapterPlugin: () => {
    create: (app: App, options?: Partial<Options & Omit<SiweMessage, "chainId" | "address" | "nonce">>) => AuthenticationAdapter<CreateSiweMessageReturnType>;
};
//# sourceMappingURL=provider.d.ts.map