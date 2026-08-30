/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        ring: "hsl(var(--ring))",
        shell: "#fdfbf9",
        garnet: "#4a3d3c",
        rose: "#ea8c92",
        blossom: "#e8a0a4"
      },
      fontFamily: {
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        heading: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
