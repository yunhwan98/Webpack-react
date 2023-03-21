// .eslintrc.js
module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended', // 추가
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
  },
};
