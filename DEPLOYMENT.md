# 🚀 Deployment Guide

Complete guide for deploying your portfolio to GitHub Pages.

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Updated personal information in all pages
- [ ] Added your profile picture to `public/images/avatar.jpg`
- [ ] Created og-image.png for social sharing
- [ ] Updated social media links in `theme.config.tsx`
- [ ] Tested site locally with `npm run dev`
- [ ] Built site successfully with `npm run build`
- [ ] Fixed all ESLint warnings with `npm run lint`
- [ ] Reviewed all content for typos and errors

## GitHub Repository Setup

### Option 1: New Repository

1. Create a new repository on GitHub named `yourusername.github.io`
2. Initialize and push:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio site"
git branch -M master
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin master
```

### Option 2: Existing Repository

If you already have a repository:

```bash
# Remove existing remote (if needed)
git remote remove origin

# Add your repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to master
git push -u origin master
```

## Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: **GitHub Actions**
4. Save the settings

## Automatic Deployment

The site uses GitHub Actions for automatic deployment:

### Workflow Files

- `.github/workflows/deploy.yml` - Deploys on push to master
- `.github/workflows/ci.yml` - Runs checks on pull requests

### How It Works

1. You push code to `master` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the site
   - Deploys to GitHub Pages
3. Site is live at `https://yourusername.github.io`

### First Deployment

After pushing to master:

1. Go to **Actions** tab in your repository
2. Click on the running workflow
3. Wait for all steps to complete (2-5 minutes)
4. Check deployment status
5. Visit your site!

## Custom Domain (Optional)

### Add Custom Domain

1. Purchase a domain from any registrar
2. In your domain registrar, add DNS records:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     yourusername.github.io
```

3. In GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Check **Enforce HTTPS**

4. Create `public/CNAME` file:

```
yourdomain.com
```

5. Update `next.config.js`:

```js
module.exports = withNextra({
  // ... other config
  basePath: '', // Keep empty for custom domain
  assetPrefix: '', // Keep empty for custom domain
})
```

### Update Sitemap

Update `public/sitemap.xml` with your custom domain:

```xml
<loc>https://yourdomain.com/</loc>
```

## Verify Deployment

After deployment completes:

### Check Site Loading

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Dark mode works
- [ ] Mobile responsive design works

### Test SEO

- [ ] Meta tags are correct
- [ ] Open Graph image displays on social media
- [ ] Sitemap.xml is accessible
- [ ] Robots.txt is working

### Performance Check

Use [PageSpeed Insights](https://pagespeed.web.dev/):

- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score = 100

## Updating Content

### Regular Updates

To update content:

```bash
# 1. Edit files locally
# 2. Test changes
npm run dev

# 3. Commit and push
git add .
git commit -m "Update: description of changes"
git push origin master

# GitHub Actions will automatically redeploy
```

### Rolling Back

If you need to rollback:

```bash
# View commit history
git log --oneline

# Rollback to specific commit
git revert <commit-hash>
git push origin master
```

## Troubleshooting

### Deployment Fails

**Check Actions tab** for error messages:

1. Click on failed workflow
2. Expand failed step
3. Read error message
4. Fix issue and push again

### Common Issues

#### Build Error: "Module not found"

```bash
# Solution: Reinstall dependencies
rm -rf node_modules
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

#### Images Not Loading

```bash
# Check:
- Images are in public/images/
- Paths use /images/ not ./images/
- File extensions are correct
- File names match in code
```

#### 404 on Page Reload

This shouldn't happen with `output: 'export'`, but if it does:

1. Verify `trailingSlash: true` in next.config.js
2. Check `.nojekyll` exists in public/
3. Clear browser cache

### GitHub Actions Permission Error

If you see permission errors:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**:
   - Select **Read and write permissions**
   - Check **Allow GitHub Actions to create and approve pull requests**
3. Save and retry

## Monitoring

### Set Up Monitoring

#### Google Analytics

Add to `pages/_app.tsx`:

```tsx
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
```

#### GitHub Actions Status Badge

Add to README.md:

```md
![Deploy](https://github.com/yourusername/yourusername.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

## Performance Optimization

### Image Optimization

Before uploading images:

```bash
# Use tools like:
- TinyPNG.com
- Squoosh.app
- ImageOptim (Mac)

# Keep images:
- Under 200KB
- WebP format when possible
- Appropriate dimensions
```

### Lighthouse Audit

Run regular audits:

```bash
npm install -g lighthouse

lighthouse https://yourusername.github.io --view
```

## Security

### Security Headers

Headers are automatically set by Next.js, but verify:

- [ ] Content Security Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy

### Dependency Updates

Keep dependencies updated:

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Major updates (careful!)
npx npm-check-updates -u
npm install
```

## Backup

### Regular Backups

Your code is safe on GitHub, but also:

1. Keep local backups
2. Export important data
3. Save content separately
4. Document custom changes

## Support

If you encounter issues:

1. Check [GitHub Actions logs](https://docs.github.com/en/actions)
2. Review [Next.js deployment docs](https://nextjs.org/docs/deployment)
3. Check [Nextra documentation](https://nextra.site)
4. Open an issue on the repository

## Post-Deployment

After successful deployment:

- [ ] Share on social media
- [ ] Submit to search engines
- [ ] Add to developer communities
- [ ] Get feedback from peers
- [ ] Start creating content!

---

🎉 Congratulations! Your portfolio is now live!

Questions? Check the [README.md](README.md) or [SETUP.md](SETUP.md)
