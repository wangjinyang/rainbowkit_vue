import type { ContainerProps } from "../..";
import type { TextProps } from "../../../components";
export type Size = 'small' | 'medium' | 'large';
export type SizeCssProps = {
    paddingX: ContainerProps<'div'>['paddingX'];
    paddingY: ContainerProps<'div'>['paddingY'];
    fontSize: TextProps['size'];
    height?: ContainerProps<'div'>['height'];
};
export declare const css: Record<Size, SizeCssProps>;
//# sourceMappingURL=actionButton.d.ts.map