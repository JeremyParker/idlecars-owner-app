'use strict';

var gulp = require('gulp');
var fs = require('fs');
var argv = require('yargs').argv;
var ngConstant = require('gulp-ng-constant');
var paths = gulp.paths;

var environment = argv.env || 'development';

gulp.task('config', function () {
  // TODO: don't use dest key, it is deprecated
  gulp.src(paths.config + '/' + environment + '.json')
    .pipe(ngConstant({
      name: 'ic.appConfig',
      dest: 'config.js'
    }))
    .pipe(gulp.dest('src/app'));
});
