module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/animations/**.ts',
    '!src/**/story.tsx',
    '!src/**/styles.ts',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/mocks/**/*.ts',
    '!src/utils/**/*.ts(x)?',
    '!src/helpers/**/*.ts(x)?',
    '!src/shared/**/*.ts',
    '!src/models/**/*.ts',
    '!src/hooks/**/*.ts(x)?',
    '!src/services/**/*.ts(x)?',
    '!src/components/Modal/*.ts(x)?',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
}
