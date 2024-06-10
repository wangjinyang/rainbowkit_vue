export declare function useRainbowKitAccountContext(): {
    connector: import("vue").Ref<undefined> | import("vue").Ref<import("@wagmi/vue").Connector> | import("vue").Ref<import("@wagmi/vue").Connector | undefined>;
    address: import("vue").Ref<undefined> | import("vue").Ref<`0x${string}`> | import("vue").Ref<`0x${string}` | undefined>;
    addresses: import("vue").Ref<undefined> | import("vue").Ref<readonly [`0x${string}`, ...`0x${string}`[]]> | import("vue").Ref<readonly `0x${string}`[] | undefined>;
    isConnected: import("vue").Ref<boolean> | import("vue").Ref<false> | import("vue").Ref<true>;
    isConnecting: import("vue").Ref<false> | import("vue").Ref<true>;
    chainId: import("vue").Ref<undefined> | import("vue").Ref<number> | import("vue").Ref<number | undefined>;
    isDisconnected: import("vue").Ref<false> | import("vue").Ref<true>;
    isReconnecting: import("vue").Ref<false> | import("vue").Ref<true>;
    chain: import("vue").Ref<undefined> | import("vue").Ref<import("viem").Chain | undefined>;
    connectionStatus: import("vue").ComputedRef<import("../types").ConnectionStatus>;
    status: import("vue").Ref<"disconnected"> | import("vue").Ref<"connected"> | import("vue").Ref<"reconnecting"> | import("vue").Ref<"connecting">;
};
//# sourceMappingURL=account.d.ts.map