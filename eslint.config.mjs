import { defineConfig } from 'eslint-define-config'
import ts from '@typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignorePatterns: ['/node_modules'],
    plugins: {
      react,
      reactHooks,
      jsxA11y,
      import: importPlugin,
      '@typescript-eslint': ts,
      prettier,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    rules: {
      'prettier/prettier': ['error', { semi: false }],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/prop-types': 'off',
      'import/extensions': 'off',
      'react/react-in-jsx-scope': 'off',
      semi: ['error', 'never'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
