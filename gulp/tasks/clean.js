'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    del = require('del'),
    notify = require('gulp-notify');

gulp.task('clean', function(cb) {

    del([config.dist.root], cb);

});
