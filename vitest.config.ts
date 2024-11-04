import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['src/**/*.spec.*', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
      coverage: {
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: [
          'src/**/*.d.ts',
          'src/**/types.ts',
          'src/**/globals.ts',
          'src/**/index.stories.tsx',
          'src/**/componentStates.tsx',
          // Specific files
          'src/domain/*', // Contains types only
          'src/infra/api/dtos/*', // Contains types only
          'src/infra/store', // It's not intended to be tested
          'src/tests/*', // It's not intended to be tested
          'src/main.tsx',
          'src/routes/*',
        ],
        all: true,
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
        watermarks: {
          statements: [80, 90],
          functions: [80, 90],
          branches: [80, 90],
          lines: [80, 90],
        },
      },
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/tests/setup.ts',
      alias: {
        '~': '/src',
      },
    },
  }),
)
