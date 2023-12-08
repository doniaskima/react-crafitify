import * as styles from './styles/Card.styles.scss';
import { createContext, Provider, useContext } from 'react';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
 
  Card: typeof styles;
  Image: typeof styles;


  // Modal: typeof styles.modalStyles.base;
  // Overlay: typeof styles.overlayStyles.base;
  // Text: typeof styles.textStyles.base;
  // Avatar: typeof styles.avatarStyles;
};

const defaultTheme: Theme = {
  components: {
 
    Card: styles,
    Image:styles,
    // Modal: styles.modalStyles.base,
    // Overlay: styles.overlayStyles.base,
    // Text: styles.textStyles.base,
    // Avatar: styles.avatarStyles,
 
  },
};

export type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const ThemeProvider: Provider<ThemeContextType> = ThemeContext.Provider;

export function useTheme(): Theme {
  return useContext(ThemeContext)?.theme || defaultTheme;
}

export function useComponentTheme<C extends keyof ThemeComponents>(component: C) {
  const theme = useTheme();

  return theme.components[component];
}
