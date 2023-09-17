import * as styles from './styles/Text.styles';
import { createContext, Provider, useContext } from 'react';

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Text: typeof styles.textStyles.base;
};

const defaultTheme: Theme = {
  components: {
    Text: styles.textStyles.base,
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
