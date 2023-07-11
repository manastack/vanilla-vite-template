const internalPackages = 'common|tools'

const styleExtensions = '\\.style$|\\.s?css$'

const extendsDict = {
  airbnb: ['airbnb-base', 'airbnb-typescript/base'],
  base: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  prettier: ['prettier'],
}

const rules = {
  '@typescript-eslint/no-unused-expressions': 'off', // - for <condition> && <expression>

  '@typescript-eslint/no-non-null-assertion': 'off', // - for smt!

  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],

  'import/no-extraneous-dependencies': 'off', // - for import in vite.config ets

  'import/prefer-default-export': 'off', // - for reexport from index

  'jsx-a11y/anchor-is-valid': 'off', // - for using anchor w/ button together

  'no-param-reassign': 'off',

  'no-redeclare': 'off', // - for typescript fn-overloading

  'no-restricted-exports': 'off', // - for export { default } from somewhere

  'no-underscore-dangle': 'off', // - for typescript getters/setters

  'no-unused-vars': 'warn',

  'prettier/prettier': [
    'error',
    {},
    { endOfLine: 'auto', usePrettierrc: true },
  ],

  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Imports w/o from.
        ['^\\u0000'],

        // Internal packages.
        [
          `^(${internalPackages})(?!${styleExtensions})`,

          // Parent imports. Put `..` last.
          '^\\.\\.(?!/?$)',
          '^\\.\\./?$',

          // Other relative imports. Put same-folder imports and `.` last.
          '^\\./(?=.*/)(?!/?$)',
          '^\\.(?!/?$)',
          '^\\./?$',
        ],

        // Style imports.
        [`^.+${styleExtensions}`],
      ],
    },
  ],

  'sort-keys-fix/sort-keys-fix': 'warn',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    ...extendsDict.airbnb,
    ...extendsDict.base,

    // prettier at last:
    ...extendsDict.prettier,
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'sort-keys-fix',
    'simple-import-sort',
    'prettier',
  ],
  rules,
}
