const { getESLintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getESLintConfig('common', {
  "rules": {
    "semi": "warn",
    "eol-last": "warn",
    "quote-props": "warn",
    "no-unused-vars": "warn",
    "dot-notation": "off"
  }
});
