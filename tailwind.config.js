const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./**/*.html", "./**/*.md"],
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
