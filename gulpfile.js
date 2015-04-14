'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  config: 'config',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

var environment = {};
var envArg = argv.env || 'staging';
if (envArg === 'production') {
  environment.bucket = 'app.idlecars.com';
} else {
  environment.bucket = 'staging.app.idlecars.com';
}
