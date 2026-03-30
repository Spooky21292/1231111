import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#111114"
        },
        pearl: {
          50: "#f8f6f4"
        },
        mist: {
          100: "#efebe7"
        },
        line: {
          200: "#ddd6d1"
        },
        rosewood: {
          100: "#efe3e5",
          500: "#7f4c58",
          600: "#6f3f4b"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 30px rgba(17, 17, 20, 0.06)"
      },
      maxWidth: {
        layout: "1280px"
      }
    }
  },
  plugins: []
};

export default config;
