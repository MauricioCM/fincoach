import nextJest from 'next/jest'

// Indica la raíz del proyecto Next.js
const createJestConfig = nextJest({ dir: './' })

// Configuración personalizada
const customJestConfig = {
  // Archivos que se ejecutan antes de correr los tests (setup de jest-dom, etc.)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Entorno de prueba: simula el DOM para pruebas de React
  testEnvironment: 'jest-environment-jsdom',

  // Alias para tus imports personalizados
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1'
  },

  // Ignorar carpetas comunes al hacer testing
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  // Qué extensiones considerar como módulos válidos
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']
}

export default createJestConfig(customJestConfig)
