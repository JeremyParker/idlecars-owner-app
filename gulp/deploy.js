'use strict';

var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var argv = require('yargs').argv;

gulp.task('environment', function() {
  gulp.environment = {};
  var envArg = argv.env || 'staging';
  if (envArg === 'production') {
    gulp.environment.deploy_bucket = 'app.idlecars.com';
  } else {
    gulp.environment.deploy_bucket = 'app.staging.idlecars.com';
  }
})

gulp.task('publish', ['environment'], function() {

  console.log('DEPLOYING TO: ' + gulp.environment.deploy_bucket);

  var publisher = awspublish.create({ bucket: gulp.environment.deploy_bucket });

  // TODO(jefk): figure out what the right cache-control is, this max age is 1 day
  var headers = {
    'Cache-Control': 'max-age=86400, no-transform, public'
  };

  return gulp.src('./dist/**')
    // TODO(jefk): figure out how to gzip assets
    // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});
