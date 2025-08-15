/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        "mobile-primary": "#FB923C", // Orange-400
        "mobile-secondary": "#FB923C", // Violet-500
        "mobile-accent": "#FB923C", // Emerald-500

        // Optional: You might want to define these too
        foreground: "hsl(var(--foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        secondary: "hsl(var(--secondary))",
      },
    },
  },
  plugins: [],
};
