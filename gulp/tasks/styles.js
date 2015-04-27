'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
    return gulp.src('./app/app.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(gulp.dest('build/app'))
        .pipe(notify({
            message: 'Styles task complete'
        }));

});
