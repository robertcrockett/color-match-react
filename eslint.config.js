import jest from 'eslint-plugin-jest'
import babel from '@babel/eslint-parser'
import js from '@eslint/js'

// eslint.config.js
export default [
    js.configs.recommended,
    {
    ignores: [
      '!.*',
      '**/assets/.*',
      '**/node_modules/.*',
      './dist/**',
      '**/coverage/.*',
      '*.json',
      '**/.git/.*'
    ],
    rules: {
      camelcase: 'off',
      'eslint-comments/no-use': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'import/no-commonjs': 'off',
      'import/no-namespace': 'off',
      'no-console': 'off',
      'no-unused-vars': 'warn',
      semi: 'off'
    },
    plugins: {
      jest
    },
    languageOptions: {
      ecmaVersion: 2023,
      parser: babel,
      parserOptions: {
        ecmaVersion: 2023,
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['jest']
        }
      }
    }
  }
]
