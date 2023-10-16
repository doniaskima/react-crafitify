
import { createContext, Provider, useContext } from 'react';
import { textVariants } from './variants/Text.variants';
import { accordionVariants } from './variants/Accordion.variants';

export type Variant = {
  components: VariantComponents;
};

type VariantComponents = {
  Text: typeof textVariants;
  Accordion: typeof accordionVariants;
};

const defaultVariant: Variant = {
  components: {
    Accordion: accordionVariants,
    Text: textVariants,
  },
};

export type VariantContextType = {
  variant: Variant;
};

const VariantContext = createContext<VariantContextType>({
  variant: defaultVariant,
});

export const VariantProvider: Provider<VariantContextType> = VariantContext.Provider;

export function useVariant(): Variant {
  return useContext(VariantContext)?.variant || defaultVariant;
}

export function useComponentVariant<C extends keyof VariantComponents>(
  component: C,
  componentVariant?: keyof VariantComponents[C]
) {
  const variant = useVariant();

  if (!componentVariant) {
    return {};
  }

  return variant.components[component][componentVariant];
}
