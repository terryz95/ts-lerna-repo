module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: '../coverage',
  globals: {
    skipBabel: true,
    'ts-jest': {
      tsconfig: 'tsconfig.base.json',
    },
  },
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-junit',
      { suiteName: 'jest tests', suiteNameTemplate: '{filepath}' },
    ],
  ],
}
