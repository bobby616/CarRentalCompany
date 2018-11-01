// Karma configuration

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],

    // Could be used with karma-webpack. Uncomment the two lines below.
    // frameworks: ['jasmine', 'webpack'],
    // webpack: webpackConfig,

    // list of files / patterns to load in the browser
    files: [{
        pattern: "src/**/!(main).ts"
      },
      {
        pattern: "spec/**/*.ts"
      }
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.ts": ['karma-typescript'],
      "spec/**/*.ts": ['karma-typescript']

      // Could be used with webpack instead of karma-webpack. Uncomment the two lines below.
      // "src/**/*.ts": [ 'webpack'],
      // "spec/**/*.ts": ['webpack']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['kjhtml'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeDebugging'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333'],
      }
    },

    // Ensure all browsers can run tests written in .ts files
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    }
  })
}