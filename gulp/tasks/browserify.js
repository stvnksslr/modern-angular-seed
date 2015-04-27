'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var partialify = require('partialify');

gulp.task('browserify', function() {
    gulp.src(['index.html'])
        .pipe(gulp.dest('build/'));

    gulp.src(['app/*.html', 'app/**/*.html', 'app/**/*.json'])
        .pipe(gulp.dest('build/app'));

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
        .pipe(gulp.dest('./build/app'));
});
