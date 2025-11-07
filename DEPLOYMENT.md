# Deployment Guide - FreeHoroscopeNow.com

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Website

1. **Push to Git Repository**
   - Create a new repository on GitHub, GitLab, or Bitbucket
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Coming Soon page"
     git branch -M main
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

3. **Configure Custom Domain (Optional)**
   - Once deployed, go to Project Settings → Domains
   - Add your custom domain: `freehoroscopenow.com`
   - Follow Vercel's instructions to update DNS records

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Deploy to Other Platforms

### Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js` with base path:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your Git repository
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or higher

## Environment Variables

Currently, this project doesn't require environment variables. If you add any in the future:

1. Create `.env` file locally (already in .gitignore)
2. For Vercel: Add in Project Settings → Environment Variables
3. For other platforms: Follow their specific documentation

## Performance Optimization

The build is already optimized for production:
- ✅ Minified JavaScript and CSS
- ✅ Tree-shaking to remove unused code
- ✅ Code splitting for faster loads
- ✅ Compressed assets (gzip)

## Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test on mobile devices
- [ ] Check all animations work smoothly
- [ ] Verify SEO meta tags in browser inspector
- [ ] Test social media preview (Facebook, Twitter)
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate (usually automatic)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

## Monitoring

Consider adding monitoring services:
- **Vercel Analytics** (built-in if using Vercel)
- **Google Analytics**
- **Plausible Analytics** (privacy-friendly)
- **Sentry** (error tracking)

## Updating the Site

1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push to Git
5. Vercel will automatically deploy (if connected to Git)

Or use Vercel CLI:
```bash
vercel --prod
```

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18+
- Clear cache: `rm -rf node_modules dist && npm install`
- Check for TypeScript errors: `npm run build`

### Styles Not Loading
- Verify `index.html` links to correct CSS
- Check Tailwind configuration
- Clear browser cache

### 404 Errors
- Ensure `vercel.json` includes rewrites configuration
- Check build output directory is `dist`

## Support

For issues with:
- **Vite:** [Vite Documentation](https://vite.dev/)
- **Vercel:** [Vercel Documentation](https://vercel.com/docs)
- **Tailwind CSS:** [Tailwind Documentation](https://tailwindcss.com/docs)





