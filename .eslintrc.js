module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'brace-style': 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
