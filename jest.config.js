// Jest configuration file
// Specifies the testing environment as Node.js
module.exports = {
  testEnvironment: 'node',
  // Use babel-jest for transforming JavaScript files
  transform: {
    '^.+\.js$': 'babel-jest',
  },
  // Regex pattern to identify test files
  testRegex: '(/__tests__/.*|(.|/)(test|spec))\.js$'
};