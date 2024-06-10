import { AsyncImageSrc } from '../../types';
import { PropType } from 'vue';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
export declare const createQrCodeProps: {
    readonly ecl: {
        readonly type: PropType<QRCodeErrorCorrectionLevel>;
        readonly default: "M";
    };
    readonly logoMargin: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly logoSize: {
        readonly type: NumberConstructor;
        readonly default: 50;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly uri: StringConstructor;
    readonly logoBackground: StringConstructor;
    readonly logo: PropType<string | AsyncImageSrc>;
};
export declare const QrCode: import("vue").DefineComponent<{
    readonly ecl: {
        readonly type: PropType<QRCodeErrorCorrectionLevel>;
        readonly default: "M";
    };
    readonly logoMargin: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly logoSize: {
        readonly type: NumberConstructor;
        readonly default: 50;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly uri: StringConstructor;
    readonly logoBackground: StringConstructor;
    readonly logo: PropType<string | AsyncImageSrc>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly ecl: {
        readonly type: PropType<QRCodeErrorCorrectionLevel>;
        readonly default: "M";
    };
    readonly logoMargin: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly logoSize: {
        readonly type: NumberConstructor;
        readonly default: 50;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly uri: StringConstructor;
    readonly logoBackground: StringConstructor;
    readonly logo: PropType<string | AsyncImageSrc>;
}>>, {
    readonly size: number;
    readonly ecl: QRCodeErrorCorrectionLevel;
    readonly logoMargin: number;
    readonly logoSize: number;
}, {}>;
//# sourceMappingURL=QrCode.d.ts.map