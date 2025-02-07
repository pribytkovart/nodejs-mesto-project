module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['@typescript-eslint/eslint-plugin'],
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base'
  ],
  'root': true,
  'env': {
    'node': true,
    'es2021': true,
  },
  'settings': {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.ts',
                    '.js',
                    '.json'
                ]
            }
        },
        'import/extensions': [
            '.js',
            '.ts'
        ]
  },
  'rules': {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  }
};