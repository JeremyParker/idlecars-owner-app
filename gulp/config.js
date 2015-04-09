'use strict';

var gulp = require('gulp');
var fs = require('fs');
var argv = require('yargs').argv;
var ngConstant = require('gulp-ng-constant');
var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

var environment = argv.env || 'development';

gulp.task('config', function () {
  gulp.src(paths.config + '/' + environment + '.json')
    .pipe(ngConstant({
      name: 'ic.appConfig'
    }))
    .pipe($.rename('config.js'))
    .pipe(gulp.dest('src/app'));
});
