import * as styles from './styles';
import { createContext, Provider, useContext } from 'react';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
<<<<<<< HEAD
 
  Card: typeof styles;
  Image: typeof styles;


  // Modal: typeof styles.modalStyles.base;
  // Overlay: typeof styles.overlayStyles.base;
  // Text: typeof styles.textStyles.base;
  // Avatar: typeof styles.avatarStyles;
=======
  Accordion: typeof styles.accordionStyles;
  Card: typeof styles.cardStyles;
  Modal: typeof styles.modalStyles.base;
  Overlay: typeof styles.overlayStyles.base;
  Text: typeof styles.textStyles.base;
  Avatar: typeof styles.avatarStyles;
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
};

const defaultTheme: Theme = {
  components: {
<<<<<<< HEAD
 
    Card: styles,
    Image:styles,
    // Modal: styles.modalStyles.base,
    // Overlay: styles.overlayStyles.base,
    // Text: styles.textStyles.base,
    // Avatar: styles.avatarStyles,
=======
    Accordion: styles.accordionStyles,
    Card: styles.cardStyles,
    Modal: styles.modalStyles.base,
    Overlay: styles.overlayStyles.base,
    Text: styles.textStyles.base,
    Avatar: styles.avatarStyles,
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
 
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
