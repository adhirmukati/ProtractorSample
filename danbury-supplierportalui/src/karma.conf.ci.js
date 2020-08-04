// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = config =>
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: true
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../reports/coverage'),
      reports: ['cobertura', 'html', 'lcovonly'],
      'report-config': {
        html: {
          subdir: 'html'
        },
        cobertura: {
          file: 'cobertura.xml'
        },
        lcovonly: {
          file: 'lcov.info'
        }
      }
    },
    junitReporter: {
      outputDir: require('path').join(__dirname, '../reports/unit-tests')
    },
    reporters: ['junit'], // NOTE: coverage-instanbul is forced in-line by angular-cli so we don't need to add it here
    port: 9876,
    colors: false,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--disable-gpu',
          '--headless',
          '--no-sandbox',
          '--remote-debugging-port=9222',
          '--remote-debugging-address=0.0.0.0',
          '--disable-dev-shm-usage'
        ]
      }
    },
    singleRun: true
  });
