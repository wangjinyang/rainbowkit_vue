import type { AsyncImageSrc } from "../types";
import { type Ref } from "vue";
export declare function useResolveAsyncImage(url?: Ref<string | AsyncImageSrc>): string | undefined;
export declare function loadImage(url?: string | AsyncImageSrc): Promise<string | undefined>;
export declare function loadImages(...urls: Array<string | AsyncImageSrc>): Promise<(string | undefined)[]>;
//# sourceMappingURL=image.d.ts.map