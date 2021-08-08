# amalfi-tw
A free Tailwind boilerplate theme for Winter CMS.

### Installation
Use git to clone the theme to your /themes folder and install the required dependencies using npm.
```
git clone https://github.com/datune/amalfi-tw.git
cd amalfi-tw
npm install
```

### Compiling Assets
Use Lavel Mix's default commands to compile your assets for development or production. This theme uses PostCSS to process the css and runs PurgeCSS to remove unwanted css on the production build to minimize the css file size. Tailwinds jit mode is also enabled by default.

Development Build
```
npm run development 
```

Watching Development Build
```
npm run watch
```

Production Build
```
npm run prod
```

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
 
