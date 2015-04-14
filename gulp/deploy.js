'use strict';

var gulp = require('gulp');
var awspublish = require('gulp-awspublish');

gulp.task('publish', function() {

  var publisher = awspublish.create({ bucket: bucket });

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
