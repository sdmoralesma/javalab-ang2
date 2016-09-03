#!/usr/bin/env bash
set -e -x

#
# Creates a 'dist' folder for an angular2 application with all needed files for deployment

# remove previous content
rm -rf dist/ && mkdir dist/
rm -rf prod/ && mkdir prod/

# change values for prod mode
sed -i 's/http:\/\/localhost:48080\///' app/services/*.ts
sed -i 's/\/\/enableProdMode/enableProdMode/' app/main.ts

# create optimized bundles, configured on webpack.config.js
webpack

# copy PrimeNG CSS
mkdir -p dist/node_modules/primeng/resources/themes && cp -R node_modules/primeng/resources/themes/omega/ $_
mkdir -p dist/node_modules/primeng/resources/images && cp node_modules/primeng/resources/images/password-meter.png $_
cp node_modules/primeng/resources/primeng.min.css dist/node_modules/primeng/resources

# copy 3rd party libs
mkdir -p dist/node_modules/codemirror/lib/ && cp node_modules/codemirror/lib/codemirror.js $_
mkdir -p dist/node_modules/codemirror/mode/clike/ && cp node_modules/codemirror/mode/clike/clike.js $_
mkdir -p dist/node_modules/file-saver/ && cp node_modules/file-saver/FileSaver.js $_

# copy html and css
find . -name '*.html' -not -path "./node_modules/*" -exec cp --parents \{\} dist/ \;
find . -name '*.css' -not -path "./node_modules/*" -exec cp --parents \{\} dist/ \;

# copy javascript files
cp -R prod/ dist/prod

# remove duplicated dist folder
rm -rf dist/dist/

# copy assets files
rm -rf dist/assets/
cp -R assets/ dist/assets/
