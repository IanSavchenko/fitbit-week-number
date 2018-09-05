module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'off',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-console': [
      'warn'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    'default-case': [
      'error'
    ],
    'object-curly-spacing': [
      'error',
      'never'
    ]
  }
};