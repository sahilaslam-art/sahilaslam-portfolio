/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#0A0A0A",
                secondary: "#B0A898",
                tertiary: "#141414",
                "black-100": "#111111",
                "black-200": "#0D0D0D",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #1A1710",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/herobg.png')",
            },
        },
    },
    plugins: [],
};
