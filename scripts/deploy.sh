#!/usr/bin/env bash

npm run lint
npm run test

rm -rf dist/

cd projects/ngx-nullish
npm version patch

VERSION=$(jq -r '.version' package.json)

cd ../../

git commit -am "$VERSION"
git tag "$VERSION"

npm run build

npm publish --folder ./dist/ngx-nullish
