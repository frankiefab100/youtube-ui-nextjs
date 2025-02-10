import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        backgroundPrimary: "var(--background-primary)",
        backgroundSecondary: "var(--background-secondary)",
        backgroundAccent: "var(--background-accent)",
        colorPrimary: "var(--color-primary)",
        colorSecondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
