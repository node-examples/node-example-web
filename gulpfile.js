'use strict';

const buildClient = require('./bld/build-client');
const documentation = require('./bld/documentation');
const instrument = require('./bld/instrument-coverage');
const lintClient = require('./bld/lint-client');
const lintServer = require('./bld/lint-server');
const lintShared = require('./bld/lint-shared');
const lintTests = require('./bld/lint-tests');
const test = require('./bld/test.js');
const gulp = require('gulp');

gulp.task('documentation', documentation);
gulp.task('lint-shared', lintShared);
gulp.task('lint-client', ['lint-shared'], lintClient);
gulp.task('lint-server', ['lint-shared'], lintServer);
gulp.task('lint-tests', lintTests);
gulp.task('instrument-coverage', instrument);
gulp.task('unit-test', ['instrument-coverage'], test);
gulp.task('build-client', buildClient);
gulp.task('lint', ['lint-client', 'lint-server', 'lint-tests']);
gulp.task('full-build', ['documentation', 'lint', 'unit-test', 'build-client']);

gulp.task('default', ['full-build']);
