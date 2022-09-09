import { Options } from "$fresh/plugins/twind.ts";

export default {
  darkMode: "class",
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
  selfURL: import.meta.url,
} as Options;

