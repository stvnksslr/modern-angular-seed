'use strict';

const gulp = require('gulp'),
    webpack = require('webpack'),
    path = require('path'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    yargs = require('yargs'),
    gutil = require('gulp-util'),
    serve = require('browser-sync'),
    eslint = require('gulp-eslint'),
    webpackDevMiddelware = require('webpack-dev-middleware'),
    webpachHotMiddelware = require('webpack-hot-middleware'),
    colorsSupported = require('supports-color'),
    inject = require('gulp-inject-string'),
    config = require('config'),
    apiConfig = config.get('Frontend.apiServer'),
    historyApiFallback = require('connect-history-api-fallback');

var root = 'client';

// helper method for resolving paths
var resolveToApp = function resolveToApp() {
    var glob = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return path.join(root, 'app', glob); // app/{glob}
};

var resolveToComponents = function resolveToComponents() {
    var glob = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
var paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    styl: resolveToApp('**/*.scss'), // stylesheets
    html: [resolveToApp('**/*.html'), path.join(root, 'index.html')],
    entry: path.join(__dirname, root, 'app/app.js'),
    output: root,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', function(cb) {
    var config = require('./webpack.dist.config');
    config.entry.app = paths.entry;

    gulp.src('app/app.js')
        .pipe(inject.replace('//localhost:3000', apiConfig));

    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('[webpack]', stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
});

gulp.task('serve', function() {
    var config = require('./webpack.dev.config');

    config.entry.app = [
        // this modules required to make HRM working
        // it responsible for all this webpack magic
        'webpack-hot-middleware/client?reload=true',
        // application entry point
        paths.entry
    ];

    var compiler = webpack(config);

    serve({
        port: process.env.PORT || 8000,
        open: false,
        server: { baseDir: root },
        middleware: [historyApiFallback(), webpackDevMiddelware(compiler, {
            stats: {
                colors: colorsSupported,
                chunks: false,
                modules: false
            },
            publicPath: config.output.publicPath
        }), webpachHotMiddelware(compiler)]
    });
});

gulp.task('watch', ['serve']);

gulp.task('component', function() {
    var cap = function cap(val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    var name = yargs.argv.name;
    var parentPath = yargs.argv.parent || '';
    var destPath = path.join(resolveToComponents(), parentPath, name);

    return gulp.src(paths.blankTemplates).pipe(template({
        name: name,
        upCaseName: cap(name)
    })).pipe(rename(function(path) {
        path.basename = path.basename.replace('temp', name);
    })).pipe(gulp.dest(destPath));
});

gulp.task('lint', function() {
    return gulp.src('client/**/!(*.spec.js|*.html)').pipe(eslint({})).pipe(eslint.format());
    // Brick on failure to be super strict
    //.pipe(eslint.failOnError())
});

gulp.task('default', ['serve']);
