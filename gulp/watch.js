'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['markups', 'inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,shared}/**/*.scss',
    paths.src + '/{app,shared}/**/*.sass',
    paths.src + '/{app,shared}/**/*.js',
    'bower.json'
  ], ['inject']);
  gulp.watch(paths.src + '/{app,shared}/**/*.jade', ['markups']);
});
