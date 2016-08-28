#!/usr/bin/env bash

#
# Super-Simple script that creates a build ('dist' folder) for an angular2 application

# Remove previous content
rm -rf dist/ && mkdir dist/

# create minified bundle
npm run mini

# PrimeUI CSS dependencies
mkdir -p dist/node_modules/primeui/themes/ && cp -R node_modules/primeui/themes/omega/ "$_"
mkdir -p dist/node_modules/primeui/ && cp node_modules/primeui/primeui-ng-all.min.css "$_"

# Load Angular libraries
mkdir -p dist/node_modules/zone.js/dist/ && cp node_modules/zone.js/dist/zone.js "$_"
mkdir -p dist/node_modules/reflect-metadata/ && cp node_modules/reflect-metadata/Reflect.js "$_"

# 3rd party libs
mkdir -p dist/node_modules/codemirror/lib/ && cp node_modules/codemirror/lib/codemirror.js "$_"
mkdir -p dist/node_modules/codemirror/mode/clike/ && cp node_modules/codemirror/mode/clike/clike.js "$_"
mkdir -p dist/node_modules/file-saver/ && cp node_modules/file-saver/FileSaver.js "$_"

#Import files from project
find . -name '*.js' -not -path "./node_modules/*" -exec cp --parents \{\} dist/ \;
#find . -name '*.js.map' -not -path "./node_modules/*" -exec cp --parents \{\} dist/ \;
find . -name '*.html' -not -path "./node_modules/*" -exec cp --parents \{\} dist/ \;
find . -name '*.css' -not -path "./node_modules/*" -exec cp --parents \{\} dist/ \;

#remove duplicated dist folder
rm -rf dist/dist/

#Import assets files
rm -rf dist/assets/
cp -R assets/ dist/assets/
