#!/usr/bin/env bash

if ! [ -d "node_modules" ]; then
    npm install
fi

if ! bundle exec jekyll serve; then
    bundle install
fi
