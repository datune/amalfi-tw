let mix = require('laravel-mix');

let postCssPlugins = [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
];

mix.setPublicPath('./')
    .js('assets/src/js/vendor.js', 'assets/dist/js')
    .js('assets/src/js/app.js', 'assets/dist/js')
    .postCss('assets/src/css/style.css', 'assets/dist/css', postCssPlugins)
    .options({
        terser: {
            extractComments: false,
        }
    });