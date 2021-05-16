const mix = require("laravel-mix");
const path = require("path");

mix.setPublicPath("./assets");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/ts"),
        },
    },
});

if (mix.inProduction()) {
    mix.disableNotifications();
}

mix.postCss("./src/css/index.css", "./assets/css/index.css", [
    require("tailwindcss"),
]);

mix.ts("./src/ts/index.ts", "./assets/js/index.js");
