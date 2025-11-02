# Panduan Deployment ke GitHub Pages

## Prasyarat
- Repository sudah di-push ke GitHub dengan nama `rochiyat.github.io`
- GitHub Actions sudah diaktifkan di repository

## Langkah-langkah Deployment

### 1. Aktifkan GitHub Pages di Repository Settings

1. Buka repository di GitHub: https://github.com/rochiyat/rochiyat.github.io
2. Klik **Settings** di tab menu atas
3. Klik **Pages** di menu sidebar kiri
4. Di bagian **Source**, pilih:
   - Source: **GitHub Actions**
5. Klik **Save**

### 2. Push Code ke GitHub

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin master
```

### 3. Tunggu Deployment Selesai

- Buka tab **Actions** di repository GitHub
- Anda akan melihat workflow "Deploy to GitHub Pages" sedang berjalan
- Tunggu hingga status berubah menjadi hijau (✓)
- Biasanya proses ini memakan waktu 2-5 menit

### 4. Akses Website

Setelah deployment selesai, website Anda akan tersedia di:
- **https://rochiyat.github.io**

## Automatic Deployment

Setiap kali Anda push code ke branch `master`, GitHub Actions akan otomatis:
1. Build Next.js project
2. Generate static files ke folder `out/`
3. Deploy ke GitHub Pages

## Manual Deployment (Opsional)

Jika ingin deploy manual tanpa GitHub Actions:

```bash
# Build project
npm run build

# Install gh-pages
npm install -g gh-pages

# Deploy ke gh-pages branch
gh-pages -d out -t true
```

## Troubleshooting

### Website tidak muncul setelah deploy
- Tunggu 5-10 menit untuk propagasi DNS
- Clear browser cache (Ctrl + Shift + R)
- Periksa GitHub Actions logs untuk error

### Images tidak muncul
- Pastikan semua image ada di folder `public/images/`
- Cek `next.config.js` sudah set `images.unoptimized: true`

### 404 Error di halaman tertentu
- Pastikan `trailingSlash: true` di `next.config.js`
- Akses URL dengan trailing slash: `/about/` bukan `/about`

## Custom Domain (Opsional)

Jika ingin menggunakan custom domain (misalnya: www.rochiyat.com):

1. Buka **Settings** > **Pages** di GitHub
2. Di bagian **Custom domain**, masukkan domain Anda
3. Tambahkan DNS record di domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
4. Untuk subdomain www:
   ```
   Type: CNAME
   Name: www
   Value: rochiyat.github.io
   ```

## Resource

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Nextra Deployment](https://nextra.site/docs/guide/deploy)
