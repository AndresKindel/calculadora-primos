const eslintConfig = {
  ignorePatterns: ['/node_modules', 'dist'],
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        'import',
        '@typescript-eslint',
        'prettier',
      ],
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
  ],
}

export default eslintConfig
