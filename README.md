# 🚀 Rochiyat's Portfolio & Documentation Site

A modern, fast, and fully-featured portfolio website built with Next.js 14 and Nextra. Features include a personal portfolio, blog, project showcase, documentation, and code snippets.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🎨 Design & UI
- **Modern, Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Automatic theme switching
- **Smooth Animations** - Elegant transitions and effects
- **Tailwind CSS** - Utility-first styling
- **Beautiful Typography** - Optimized reading experience

### 📝 Content Management
- **MDX Support** - Write content in Markdown with React components
- **Blog System** - Full-featured blog with categories and tags
- **Project Showcase** - Portfolio with GitHub integration
- **Documentation** - Technical guides and tutorials
- **Code Snippets** - Reusable code collection

### 🔍 Features
- **Full-Text Search** - Fast search across all content
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **RSS Feed** - Subscribe to blog updates
- **Syntax Highlighting** - Beautiful code blocks
- **Table of Contents** - Auto-generated navigation
- **Social Sharing** - Open Graph and Twitter cards

### ⚡ Performance
- **Static Site Generation** - Pre-rendered pages for speed
- **Image Optimization** - Automatic image optimization
- **Code Splitting** - Optimized bundle size
- **Fast Loading** - Lighthouse score 90+

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Theme**: [Nextra](https://nextra.site/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

## 📦 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rochiyat/rochiyat.github.io.git
cd rochiyat.github.io
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

This site automatically deploys to GitHub Pages when you push to the `master` branch.

1. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Source: GitHub Actions

2. **Push your changes**

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

3. **Wait for deployment**
   - Check Actions tab for deployment status
   - Site will be live at `https://rochiyat.github.io`

### Manual Deployment

```bash
npm run build
```

The static site will be generated in the `out` directory.

## 📁 Project Structure

```
rochiyat.github.io/
├── .github/
│   └── workflows/          # GitHub Actions workflows
│       ├── deploy.yml      # Auto-deploy configuration
│       └── ci.yml          # CI checks
│
├── components/             # React components
│   ├── ui/                 # UI components (Button, Card)
│   ├── layout/             # Layout components (Hero, Newsletter)
│   ├── projects/           # Project components (ProjectCard, TechStack)
│   └── features/           # Feature components (ContactForm)
│
├── pages/                  # Site pages (MDX)
│   ├── _app.tsx           # Custom App component
│   ├── _meta.json         # Navigation configuration
│   ├── index.mdx          # Homepage
│   ├── about.mdx          # About page
│   ├── contact.mdx        # Contact page
│   ├── blog/              # Blog posts
│   ├── projects/          # Project showcase
│   ├── docs/              # Documentation
│   └── snippets/          # Code snippets
│
├── public/                 # Static assets
│   ├── .nojekyll          # GitHub Pages configuration
│   ├── robots.txt         # SEO configuration
│   ├── sitemap.xml        # Sitemap
│   └── images/            # Images
│
├── styles/                 # Global styles
│   └── globals.css        # Tailwind + custom styles
│
├── lib/                    # Utility functions
│   └── utils.ts
│
├── next.config.js         # Next.js configuration
├── theme.config.tsx       # Nextra theme configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **theme.config.tsx** - Site logo, footer, social links
2. **pages/index.mdx** - Homepage content
3. **pages/about.mdx** - About page content
4. **pages/contact.mdx** - Contact information

### Styling

1. **Colors** - Edit `tailwind.config.js` and `theme.config.tsx`
2. **Typography** - Modify `styles/globals.css`
3. **Components** - Customize components in `components/`

### Content

1. **Blog Posts** - Add `.mdx` files in `pages/blog/`
2. **Projects** - Add projects in `pages/projects/`
3. **Docs** - Add documentation in `pages/docs/`
4. **Snippets** - Add code snippets in `pages/snippets/`

### Images

Place your images in `public/images/`:

- `avatar.jpg` - Your profile picture (200x200px)
- `og-image.png` - Social sharing image (1200x630px)
- `blog/` - Blog post images
- `projects/` - Project screenshots

## 📝 Creating Content

### Blog Post

Create a new file in `pages/blog/`:

```mdx
---
title: 'Your Post Title'
date: '2023-10-27'
author: 'Your Name'
description: 'Post description'
tags: ['tag1', 'tag2']
---

# Your Post Title

Your content here...
```

### Project

Add your project to `pages/projects/index.mdx`:

```jsx
<ProjectCard
  title="Project Name"
  description="Project description"
  tags={["React", "TypeScript"]}
  demoUrl="https://demo.com"
  repoUrl="https://github.com/user/repo"
  featured={true}
  stats={{ stars: 100, forks: 20 }}
/>
```

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Quality

This project uses:

- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (configure as needed)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- SEO Score: 100

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rochiyat**

- Website: [https://rochiyat.github.io](https://rochiyat.github.io)
- GitHub: [@rochiyat](https://github.com/rochiyat)
- Twitter: [@rochiyat](https://twitter.com/rochiyat)
- LinkedIn: [rochiyat](https://linkedin.com/in/rochiyat)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Nextra](https://nextra.site/) - Next.js Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vercel](https://vercel.com/) - Deployment Platform
- [GitHub Pages](https://pages.github.com/) - Hosting

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me via [email](mailto:your.email@example.com)
- DM me on [Twitter](https://twitter.com/rochiyat)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!

Made with ❤️ by [Rochiyat](https://github.com/rochiyat)
