module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [{pattern: 'spec.bundle.js', watched: false}],
    exclude: [],
    plugins: [
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-webpack')
    ],
    preprocessors: {'spec.bundle.js': ['webpack', 'sourcemap']},
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel-loader'},
          {test: /\.html/, loader: 'raw-loader'},
          {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
          {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
      }
    },
    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
