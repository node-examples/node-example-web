const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const config = require('config');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

module.exports = function runBuildClient() {
    // Browserify the content into a single file and resolve 'require's
    const bundler = browserify({
        entries: config.get('build.client.entryPoint'),
        debug: config.get('build.options.debug'),
    });

    // Translate ES6 to a suitable dialect for compatibility
    bundler.transform('babelify', {
        presets: [config.get('build.client.transpiler.babel-preset')] });

    return bundler.bundle()
        .pipe(source(config.get('build.client.outputFile')))
        .pipe(buffer())
        .pipe(gulp.dest(config.get('build.client.outputPath')))
        .pipe(rename(config.get('build.client.outputFileMinified')))
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(uglify({
            mangle: config.get('build.client.mangleNames'),
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.get('build.client.sourceMapsPath')));
};
