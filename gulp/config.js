'use strict';

var gulp = require('gulp');
var fs = require('fs');
var argv = require('yargs').argv;
var ngConstant = require('gulp-ng-constant');
var paths = gulp.paths;

var environment = argv.env || 'development';
// var ENV = JSON.parse(fs.readFileSync('./src/app/config-' + environment + '.json', 'utf8')).ENV;

gulp.task('config', function () {
  gulp.src(paths.config + '/' + environment + '.json')
    .pipe(ngConstant({
      name: 'AppConfig',
      dest: 'zconfig.js'
    }))
    .pipe(gulp.dest('src/app'));
});
