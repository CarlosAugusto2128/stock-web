module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier/react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
