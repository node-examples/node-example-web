'use strict';

const config = require('config');
const eslint = require('gulp-eslint');
const gulp = require('gulp');

module.exports = function runLinting() {
    return gulp.src(config.get('build.linting.paths.client'))
    .pipe(eslint({
        extends: 'airbnb',
        rules: {
            indent: [2, 4],
            strict: [2, 'global'],
        },
        ecmaFeatures: {
            modules: false,
        },
        env: {
            browser: true,
            es6: true,
        },
    }))
    .pipe(eslint.format(config.get('build.linting.formatter')))
    .pipe(eslint.failAfterError());
};
