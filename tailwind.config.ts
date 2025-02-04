// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 30s linear infinite", // Adjust scrolling speed (time in seconds)
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" }, // Start from the right
          "100%": { transform: "translateX(-50%)" }, // Move left
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
