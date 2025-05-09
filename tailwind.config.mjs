/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        content: '1550px'
      },

      backgroundColor: {
        template: '#fff'
      },

      borderColor: {
        card: '#eeeeee'
      },
      zIndex: {
        dartkTemplateUp: '10'
      }
    },
  },
  plugins: [],
};
