import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Path to all your pages, components, and other files where you use Tailwind classes
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors using CSS variables for better theming
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1e40af", // Dark blue for primary elements
        secondary: "#f97316", // Orange for call-to-actions
        accent: "#10b981", // Green for secondary buttons or highlights
      },
      // Custom font families for typography
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      // Define font sizes with custom line heights
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
      },
      // Custom spacing scale for margins and paddings
      spacing: {
        '18': '4.5rem', // Example: consistent spacing
      },
      // Max-width for responsive containers
      maxWidth: {
        'screen-xl': '1280px', // Limit container size for large screens
      },
    },
  },
  plugins: [], // Add plugins like forms, typography, or aspect-ratio here if needed
};

export default config;
