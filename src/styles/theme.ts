export const theme = {
  light: {
    bg: "bg-white",
    text: "text-black",
    muted: "text-black/50",
    accent:
      "bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent",
    button:
      "bg-gray-900 text-white hover:bg-gray-700",
  },

  dark: {
    bg: "bg-black",
    text: "text-white",
    muted: "text-white/50",
    accent:
      "bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent",
    button:
      "bg-white text-black hover:bg-gray-200",
  },
};


export function getTheme(darkMode: boolean) {
  return darkMode ? theme.dark : theme.light;
}