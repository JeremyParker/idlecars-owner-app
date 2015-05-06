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

function runConfig (environment) {
  environment = environment || argv.env || 'development';
  gulp.src(paths.config + '/' + environment + '.json')
    .pipe(ngConstant({
      name: 'ic.appConfig'
    }))
    .pipe($.rename('config.js'))
    .pipe(gulp.dest('src/app'));
};

gulp.task('config', function() { runConfig() });
gulp.task('config:e2e', function() { runConfig('e2e') });
gulp.task('config:reset', function() { runConfig('development') });
