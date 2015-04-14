'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;

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
  environment.deploy_bucket = 'app.idlecars.com';
} else {
  environment.deploy_bucket = 'staging.app.idlecars.com';
}
