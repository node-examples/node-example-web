const buildClient = require('./bld/build-client');
const documentation = require('./bld/documentation');
const instrument = require('./bld/instrument-coverage');
const lint = require('./bld/lint.js');
const test = require('./bld/test.js');
const gulp = require('gulp');

gulp.task('documentation', documentation);
gulp.task('lint', lint);
gulp.task('instrument-coverage', instrument);
gulp.task('unit-test', ['instrument-coverage'], test);
gulp.task('build-client', buildClient);
gulp.task('full-build', ['documentation', 'lint', 'unit-test', 'build-client']);

gulp.task('default', ['full-build']);
