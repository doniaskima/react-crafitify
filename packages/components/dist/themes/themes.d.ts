import { CraftifyUIThemes } from './presets/index';
import { DeepPartial } from '../utils/type';
export type CraftifyUserTheme = DeepPartial<CraftifyUIThemes> & {
    type: string;
};
export declare const isObject: (target: unknown) => unknown;
export declare const deepDuplicable: <T extends Record<string, unknown>>(source: T, target: T) => T;
declare const Themes: {
    isPresetTheme: (themeOrType?: CraftifyUserTheme | CraftifyUIThemes | string) => boolean;
    isAvailableThemeType: (type?: string) => boolean;
    hasUserCustomTheme: (themes?: Array<CraftifyUIThemes>) => boolean;
    getPresets: () => Array<CraftifyUIThemes>;
    getPresetStaticTheme: () => CraftifyUIThemes;
    create: (base: CraftifyUIThemes, custom: CraftifyUserTheme) => CraftifyUIThemes;
    createFromDark: (custom: CraftifyUserTheme) => CraftifyUIThemes;
    createFromLight: (custom: CraftifyUserTheme) => CraftifyUIThemes;
};
export default Themes;
