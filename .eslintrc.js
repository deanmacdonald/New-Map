const { getESLintConfig } = require('@applint/spec');

// https://www.npmjs.com/package/@applint/spec
module.exports = getESLintConfig('common', {
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
  },
});
