import * as styles from './styles';
import { Provider } from 'react';
export type Theme = {
  components: ThemeComponents;
};
type ThemeComponents = {
  Accordion: typeof styles.accordionStyles;
  Card: typeof styles.cardStyles;
  Modal: typeof styles.modalStyles.base;
  Overlay: typeof styles.overlayStyles.base;
  Text: typeof styles.textStyles.base;
  Avatar: typeof styles.avatarStyles;
};
export type ThemeContextType = {
  theme: Theme;
};
export declare const ThemeProvider: Provider<ThemeContextType>;
export declare function useTheme(): Theme;
export declare function useComponentTheme<C extends keyof ThemeComponents>(
  component: C,
): ThemeComponents[C];
export {};
