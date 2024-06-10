export declare enum PlatformType {
    Windows = "Windows",
    MacOS = "macOS",
    Linux = "Linux",
    Desktop = "Desktop"
}
export declare const isWindows: boolean;
export declare const isMacOS: boolean;
export declare const isLinux: boolean;
export declare const getPlatformType: () => PlatformType;
export declare const getPlatformTypeSrc: (selectedPlatformType: PlatformType) => string;
//# sourceMappingURL=platform.d.ts.map