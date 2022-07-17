import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, Plugins, setup } from "twind";

export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      default: ['"M PLUS Rounded 1c"', "sans-serif"],
    },
  },
};
export const plugins: Plugins = {
  "fix-jaggy": `transform: rotate(0.05deg);`,
};

if (IS_BROWSER) setup(config);
