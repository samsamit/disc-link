import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const { nextui } = require("@nextui-org/react");
const { nextUiCustomThemeConfig } = require("./themeConfig");

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(nextUiCustomThemeConfig)],
} satisfies Config;
