'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    partialify = require('partialify'),
    notify = require('gulp-notify');

gulp.task('browserify', function() {

    return browserify({
            debug: true
        })
        .transform(babelify)
        .transform(partialify)
        .require('./app/index.js', {
            entry: true
        })
        .bundle()
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(source('index.js'))
        .pipe(gulp.dest('./build/app'))
        .pipe(notify({
            message: 'Browserify task complete'
        }));
});
