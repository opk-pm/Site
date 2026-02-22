import { definePackage, BunPm } from '@opk/ts-pkg'

export default definePackage({
  pm: BunPm,
  name: '@opk/site',
  description:
    'The landing page for Opk - The universal package manager for JS/TS.',
  license: 'Apache-2.0',

  type: 'module',

  scriptPresets: ['prettier'],

  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview',
  },

  dependencies: {
    '@iconify/vue': '^5.0.0',
    '@opk/ts-pkg': '^0.5.0',
    '@vitejs/plugin-vue': '^6.0.4',
    sass: '^1.97.3',
    vite: '^7.3.1',
    vue: '^3.5.28',
  },

  private: false,
})
