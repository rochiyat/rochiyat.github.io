# 🚀 Quick Setup Guide

This guide will help you get your portfolio site up and running in minutes.

## Prerequisites

Before you begin, make sure you have:

- ✅ Node.js 18.17 or later installed
- ✅ Git installed
- ✅ A GitHub account
- ✅ Basic knowledge of Markdown

## 📋 Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, Nextra, TypeScript, and Tailwind CSS.

### 2. Start Development Server

```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Customize Your Content

#### Update Personal Information

1. **theme.config.tsx** - Update logo, footer, and social links
2. **pages/index.mdx** - Update homepage hero and content
3. **pages/about.mdx** - Add your bio, experience, and skills
4. **pages/contact.mdx** - Update contact information

#### Add Your Images

Place your images in the `public/images/` directory:

- `avatar.jpg` - Your profile picture (200x200px recommended)
- `og-image.png` - Social sharing image (1200x630px recommended)
- `blog/` - Blog post hero images
- `projects/` - Project screenshots

#### Customize Colors

Edit `theme.config.tsx` to change the primary color:

```tsx
primaryHue: 217, // Change this number (0-360) for different colors
```

### 4. Create Content

#### Add a Blog Post

Create a new file in `pages/blog/`:

```mdx
---
title: 'My First Post'
date: '2023-10-27'
author: 'Your Name'
description: 'This is my first blog post'
tags: ['tutorial', 'nextjs']
---

# My First Post

Your content here...
```

Don't forget to update `pages/blog/_meta.json`:

```json
{
  "index": "Blog Home",
  "getting-started-nextjs": "Getting Started with Next.js 14",
  "my-first-post": "My First Post"
}
```

#### Add a Project

Update `pages/projects/index.mdx` to add your project:

```jsx
<ProjectCard
  title="My Awesome Project"
  description="A cool project I built"
  tags={["React", "TypeScript", "Tailwind"]}
  demoUrl="https://demo.example.com"
  repoUrl="https://github.com/yourusername/project"
  featured={true}
/>
```

### 5. Test Your Site

Before deploying, test everything:

```bash
# Check for linting errors
npm run lint

# Build the site
npm run build
```

Fix any errors before proceeding to deployment.

## 🌐 Deploy to GitHub Pages

### Configure GitHub Repository

1. **Create a new repository** named `yourusername.github.io`
2. **Initialize git** (if not already done):

```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Add remote and push**:

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M master
git push -u origin master
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will automatically deploy on every push to `master`

### Wait for Deployment

- Check the **Actions** tab to see deployment progress
- First deployment takes 2-5 minutes
- Site will be live at `https://yourusername.github.io`

## ✏️ Making Updates

After the initial setup, updating your site is simple:

```bash
# 1. Make your changes (edit MDX files, add images, etc.)

# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Update content"
git push origin master

# 4. GitHub Actions will automatically deploy
```

## 🎨 Customization Tips

### Change Theme Color

Edit `theme.config.tsx`:

```tsx
primaryHue: 217, // Blue (default)
// Try: 0 (red), 120 (green), 280 (purple)
```

### Modify Layout

- **Homepage**: Edit `pages/index.mdx`
- **Navigation**: Edit `pages/_meta.json`
- **Components**: Modify files in `components/`

### Add Custom Fonts

Add to `theme.config.tsx` head section:

```tsx
head: (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  </>
)
```

### Add Analytics

Add Google Analytics or other tracking in `pages/_app.tsx`.

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Clear cache: `npm cache clean --force`

### Images Not Showing

Make sure:

- Images are in `public/images/` directory
- Paths start with `/images/` (not `./images/`)
- File extensions are correct (.jpg, .png, etc.)

### GitHub Pages Not Deploying

Check:

- Repository name is `yourusername.github.io`
- GitHub Pages source is set to "GitHub Actions"
- Check Actions tab for error messages
- `.nojekyll` file exists in `public/`

## 📚 Next Steps

Once your site is live:

1. ✅ Add custom domain (optional)
2. ✅ Set up analytics
3. ✅ Create more blog posts
4. ✅ Add more projects
5. ✅ Share on social media

## 🆘 Need Help?

- **Documentation**: Check the [README.md](README.md)
- **Nextra Docs**: [https://nextra.site](https://nextra.site)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Issues**: Open an issue on GitHub

---

Happy building! 🎉
