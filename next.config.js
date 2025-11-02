const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  staticImage: true,
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
