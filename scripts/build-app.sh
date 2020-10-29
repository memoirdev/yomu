#!/bin/bash

echo 'Building react'

rm -rf dist/*
export INLINE_RUNTIME_CHUNK=false
export GENERATE_SOURCEMAP=false

react-scripts build

mkdir -p dist
mv build/static/js/main*.js build/main.js
cp -r build/* dist
