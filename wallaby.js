'use strict';

const Fs = require('fs');
const Path = require('path');

const babelConfiguration = JSON.parse(Fs.readFileSync(Path.join(__dirname, '.babelrc')));
babelConfiguration.babel = require('babel-core');

module.exports = (wallaby) => {
  return {
    files: [
      'plugins/**/*',
      {pattern: '**/*.tests.js', ignore: true}
    ],
    tests: [
      '**/*.tests.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfiguration)
    }
  }
};