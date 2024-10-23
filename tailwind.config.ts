import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        muted: "var(--muted)",
        'muted-foreground': "var(--muted-foreground)",
        card: "var(--card)",
        'card-foreground': "var(--card-foreground)",
        popover: "var(--popover)",
        'popover-foreground': "var(--popover-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        'primary-foreground': "var(--primary-foreground)",
        secondary: "var(--secondary)",
        'secondary-foreground': "var(--secondary-foreground)",
        accent: "var(--accent)",
        'accent-foreground': "var(--accent-foreground)",
        destructive: "var(--destructive)",
        'destructive-foreground': "var(--destructive-foreground)",
        ring: "var(--ring)",
        warning: "hsl(var(--warning))",
        'warning-foreground': "hsl(var(--warning-foreground))",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        heading: ['var(--font-cormorant)', ...fontFamily.serif],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;
