import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color palette using CSS variables
      colors: {
        background: "var(--background)", // Customize this color for dark/light themes
        foreground: "var(--foreground)", // Accent or primary color
        primary: "#1e40af", // Dark blue for primary elements
        secondary: "#f97316", // Orange for call-to-actions
        accent: "#10b981", // Green for secondary buttons or highlights
      },
      // Customize font family for improved typography
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      // Tailor typography for headings and body text
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
      },
      // Add custom spacing scale for uniform layout
      spacing: {
        '18': '4.5rem', // Example for consistent padding/margin
      },
      // Max-width for responsive containers
      maxWidth: {
        'screen-xl': '1280px', // Limit container size for large screens
      },
    },
  },
  plugins: [],
};
export default config;
