import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  // Reglas base de Next, TS y compatibilidad con Prettier
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'plugin:@typescript-eslint/recommended',
    'prettier' // ✅ nombre del paquete como string
  ),
  // ignores
  {
    ignores: [
      'node_modules',
      'build',
      'dist',
      'coverage',
      '.next',
      '.turbo',
      'out',
      'public/static'
    ]
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypescript
    },
    rules: {
      // 🔑 Usa el archivo prettier.config.cjs (no sobreescribas aquí)
      'prettier/prettier': 'error',

      // Reglas adicionales útiles
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
]

export default eslintConfig
