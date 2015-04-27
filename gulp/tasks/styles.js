'use strict';

var config = require('../config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {

    return gulp.src('./app/app.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(gulp.dest('build/app'));

});
