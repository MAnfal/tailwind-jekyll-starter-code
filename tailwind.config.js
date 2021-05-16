const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./jekyll_src/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
