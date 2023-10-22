import {
  ConfigTheme,
  LayoutTheme,
  NextUIPluginConfig,
} from "@nextui-org/react";

type Theme = "dark" | "light";

const themeConfig: Record<Theme, ConfigTheme> = {
  dark: {
    colors: {
      default: "red",
    },
  },
  light: {
    colors: {
      default: "green",
    },
  },
} as const;

const layoutTheme: LayoutTheme = {} as const;

export const nextUiCustomThemeConfig: NextUIPluginConfig = {
  layout: layoutTheme,
  themes: themeConfig,
};
