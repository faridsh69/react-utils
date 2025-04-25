import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

// eslint-disable-next-line import/no-default-export
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...react.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      'no-template-curly-in-string': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-promise-executor-return': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'require-atomic-updates': 'error',
      'no-unreachable-loop': 'error',
      'no-trailing-spaces': 'error',
      'no-await-in-loop': 'error',
      'no-multi-spaces': 'error',
      'accessor-pairs': 'error',
      'react/jsx-key': 'error',
      'brace-style': 'error',

      'import/no-default-export': 'warn',
      'object-curly-spacing': 'warn',
      'no-console': 'warn',

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-use-before-define': 'off',
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
    },
  },
  prettier,
  { ignores: ['node_modules/*'] },
]
