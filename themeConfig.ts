import {
  ConfigTheme,
  LayoutTheme,
  NextUIPluginConfig,
} from "@nextui-org/react";

export type Theme = "dark" | "light";

const themeConfig: Record<Theme, ConfigTheme> = {
  dark: {
    colors: {
      foreground: "#fff",
    },
  },
  light: {
    colors: {
      foreground: "#000",
    },
  },
} as const;

const layoutTheme: LayoutTheme = {} as const;

export const nextUiCustomThemeConfig: NextUIPluginConfig = {
  layout: layoutTheme,
  themes: themeConfig,
};
