/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0080A9",
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
            },
            borderRadius: {
                DEFAULT: "0.625rem",
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(93deg, #0080A9 0%, #62D4A8 100%)',
            },
            borderImage: {
                "gradient-primary": 'linear-gradient(to_top_right,#f6b73c,#4d9f0c)_30'
            }
        },
    },
    plugins: [],
}

