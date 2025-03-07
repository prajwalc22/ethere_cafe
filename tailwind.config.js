import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindForms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        // Coffee Brown Color Palette - Primary brand colors
        primary: {
          50: "#f9f6f3", // Lightest coffee cream - Page backgrounds, subtle highlights
          100: "#f0e9e0", // Very light cream - Card backgrounds, hover states
          200: "#e5d7c3", // Light cream - Secondary elements, borders
          300: "#d3bd9e", // Medium-light coffee - Subtle accents, secondary backgrounds
          400: "#c4a87c", // Medium golden coffee - Icons, highlights
          500: "#a98b62", // Rich medium coffee - Primary buttons, key UI elements
          600: "#8d6e48", // Medium-dark coffee - Hover states for primary elements
          700: "#735232", // Dark roast coffee - Active states, text on light backgrounds
          800: "#5a3d21", // Deep espresso - Headers on light backgrounds
          900: "#3a2615", // Darkest coffee bean - Text, deep backgrounds
        },
        // Neutral Color Palette - Warm grayscale colors for text, backgrounds, etc.
        neutral: {
          50: "#f8f7f6", // Almost white (warm) - Page backgrounds, light mode
          100: "#edeae7", // Very light warm gray - Cards, subtle backgrounds
          200: "#dcd7d2", // Light warm gray - Borders, dividers, subtle elements
          300: "#c8c2bb", // Medium-light warm gray - Disabled elements
          400: "#aaa39b", // Medium warm gray - Placeholders, tertiary elements
          500: "#8c8378", // Base warm gray - Secondary text, icons
          600: "#6e665d", // Medium-dark warm gray - Body text
          700: "#544e46", // Dark warm gray - Subheadings, emphasis text
          800: "#3c3630", // Very dark warm gray - Headings, important text
          900: "#28211c", // Almost black (warm) - High contrast text, dark mode
        },
        // Accent Color Palette - Complementary coffee shop colors
        accent: {
          light: "#f3dfc1", // Light caramel - Subtle highlights, selected items
          DEFAULT: "#e8b872", // Medium caramel - Default accent, notifications
          dark: "#c08c38", // Dark caramel - Pressed states, contrasting elements
          // Alternative accent colors for variety
          green: {
            light: "#d7e1cf", // Light mint/plant green - Fresh accent color
            DEFAULT: "#a3b18a", // Medium plant green - Natural elements
            dark: "#588157", // Dark plant green - Contrast elements
          },
          red: {
            light: "#f2d6d3", // Light cinnamon - Warm accent
            DEFAULT: "#d4a59a", // Medium cinnamon - Special features
            dark: "#b07d62", // Dark cinnamon - Important elements
          },
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(58, 38, 21, 0.07)", // Updated for coffee theme
        "glass-hover": "0 8px 32px 0 rgba(58, 38, 21, 0.15)", // Updated for coffee theme
        neumorph: "10px 10px 20px #cfc2b3, -10px -10px 20px #ffffff", // Warmer shadow for coffee theme
      },
    },
  },
  plugins: [
    // Provides better styling for form elements
  ],
};
