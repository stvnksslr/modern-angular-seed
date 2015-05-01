'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {
    cb = cb || function() {};
    global.isProd = false;
    runSequence('styles', 'browserify', 'views', cb);
});
