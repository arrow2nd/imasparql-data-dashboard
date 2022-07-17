import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";

export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      default: ['"M PLUS Rounded 1c"', "sans-serif"],
    },
    extend: {
      colors: {
        background: "#F5F5F5",
        card: "#FFFFFF",
        text: "#1C1C1C",
        icon: "#7B7B7B",
      },
    },
  },
};

if (IS_BROWSER) setup(config);
