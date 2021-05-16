const mix = require("laravel-mix");
const path = require("path");

mix.setPublicPath("./jekyll_src/assets");

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

mix.postCss("./src/css/index.css", "./jekyll_src/assets/css/index.css", [
    require("tailwindcss"),
]);

mix.ts("./src/ts/index.ts", "./jekyll_src/assets/js/index.js");
