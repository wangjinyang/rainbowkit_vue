import type { Atoms } from "../../../css";
import { type IntrinsicElementAttributes } from "vue";
export type IntrinsicElementAttributesKey = keyof IntrinsicElementAttributes;
export type ContainerProps<K extends IntrinsicElementAttributesKey> = {
    as?: K;
} & Partial<Omit<Atoms, 'resetKey'>> & IntrinsicElementAttributes[K];
export interface ContainerElementProps<K extends IntrinsicElementAttributesKey> extends /* @vue-ignore */ Partial<Omit<Atoms, 'resetKey'>> {
    as?: K;
}
//# sourceMappingURL=container.d.ts.map