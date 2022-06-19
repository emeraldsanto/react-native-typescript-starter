const path = require('path');

const project = path.resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    require.resolve('@vercel/style-guide/eslint/jest'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
