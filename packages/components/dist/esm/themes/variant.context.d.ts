import { Provider } from 'react';
import { textVariants } from './variants/Text.variants';
export type Variant = {
    components: VariantComponents;
};
type VariantComponents = {
    Text: typeof textVariants;
};
export type VariantContextType = {
    variant: Variant;
};
export declare const VariantProvider: Provider<VariantContextType>;
export declare function useVariant(): Variant;
export declare function useComponentVariant<C extends keyof VariantComponents>(component: C, componentVariant?: keyof VariantComponents[C]): VariantComponents[C][keyof VariantComponents[C]] | {};
export {};
