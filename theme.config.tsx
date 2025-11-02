import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
      <span style={{ 
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Rochiyat
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/rochiyat',
  },
  docsRepositoryBase: 'https://github.com/rochiyat/rochiyat.github.io',
  footer: {
    text: (
      <span style={{ width: '100%' }}>
        <span style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <span>
            © {new Date().getFullYear()} Rochiyat. All rights reserved.
          </span>
          <span style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="https://github.com/rochiyat" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ opacity: 0.7, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com/rochiyat" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ opacity: 0.7, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/in/rochiyat" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ opacity: 0.7, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              LinkedIn
            </a>
          </span>
        </span>
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Rochiyat - Full Stack Developer" />
      <meta property="og:description" content="Personal portfolio, blog, and documentation site" />
      <meta property="og:image" content="/images/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rochiyat" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 217,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Rochiyat',
      defaultTitle: 'Rochiyat - Full Stack Developer',
      description: 'Personal portfolio, blog, and documentation site',
    }
  },
  search: {
    placeholder: 'Search documentation...',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
}

export default config
