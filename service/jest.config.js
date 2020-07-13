// https://github.com/facebook/jest/blob/master/docs/Configuration.md

const path = require('path')

module.exports = {
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    path.join(__dirname, 'test'),
  ],
  testEnvironment: 'jest-environment-node',
  verbose: true,
}
