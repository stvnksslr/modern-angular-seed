'use strict';

var config = require('../config');
var gulp = require('gulp');

// Views task
gulp.task('views', function() {

    gulp.src(['index.html'])
        .pipe(gulp.dest('build/'));

    gulp.src(['app/*.html', 'app/**/*.html', 'app/**/*.json'])
        .pipe(gulp.dest('build/app'));
});
