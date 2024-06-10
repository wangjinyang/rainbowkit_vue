import { hover, active } from './touchable.css';
interface TouchableStylesOptions {
    hover?: keyof typeof hover;
    active: keyof typeof active;
}
export declare function touchable({ active: activeKey, hover: hoverKey }: TouchableStylesOptions): string;
export {};
//# sourceMappingURL=touchable.d.ts.map