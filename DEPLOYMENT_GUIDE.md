# Deployment Guide

This guide covers deploying the portfolio to Vercel with GitHub Actions CI/CD.

## Prerequisites

- GitHub account
- Vercel account (free tier)
- Node.js 20+ installed locally

## Quick Start (Vercel Dashboard)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Vite + React
   - Click **Deploy**

3. **Configure Domain** (Optional)
   - Go to Project Settings → Domains
   - Add custom domain or use `*.vercel.app`

## Environment Variables (Vercel Dashboard)

Go to Project Settings → Environment Variables and add:

| Name                   | Value                            | Environment |
| ---------------------- | -------------------------------- | ----------- |
| `VITE_SITE_URL`        | `https://your-domain.vercel.app` | Production  |
| `VITE_GA_ID`           | `G-XXXXXXXXXX` (optional)        | Production  |
| `VITE_CONTACT_API_URL` | `/api/contact`                   | All         |

## GitHub Actions CI/CD

The repository includes `.github/workflows/ci-cd.yml` for automated deployment.

### Required Secrets (GitHub Repository Settings → Secrets → Actions)

| Secret              | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `VERCEL_TOKEN`      | From [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID`     | Run `vercel inspect` or get from Vercel dashboard                   |
| `VERCEL_PROJECT_ID` | Run `vercel inspect` or get from Vercel dashboard                   |

### Workflow Triggers

- **Pull Requests** → Preview deployment
- **Push to main** → Production deployment
- **Manual** → `workflow_dispatch`

### Local Vercel CLI Setup

```bash
npm i -g vercel@latest
vercel login
vercel link
```

## Build Configuration

### `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### `vite.config.ts` (Production Optimizations)

```typescript
export default defineConfig({
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@heroicons/react'],
        },
      },
    },
  },
})
```

## Performance Checklist (Pre-Deploy)

- [ ] Run `npm run build` locally — verify no errors
- [ ] Run `npm run lint` — zero warnings
- [ ] Test `npm run preview` — verify production build
- [ ] Check bundle size: `npx vite-bundle-analyzer dist`
- [ ] Lighthouse CI: Performance > 90, Accessibility > 95
- [ ] Test all sections on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Verify SEO meta tags in page source
- [ ] Test contact form submission
- [ ] Verify PDF resume download works
- [ ] Check sitemap.xml and robots.txt accessible

## Post-Deploy Verification

1. **Visit deployed URL**
2. **Run Lighthouse** (Chrome DevTools → Lighthouse)
3. **Check Search Console** — submit sitemap
4. **Test contact form** — check Vercel Function logs
5. **Verify analytics** — Real-time report in GA4
6. **Test 404 page** — visit `/nonexistent`

## Rollback Procedure

```bash
# Via Vercel CLI
vercel rollback [deployment-url]

# Via GitHub Actions
# Go to Actions → Re-run failed deployment or deploy previous commit
```

## Monitoring

### Vercel Analytics (Free)

Enable in Project Settings → Analytics

### Uptime Monitoring

- [UptimeRobot](https://uptimerobot.com) (free)
- [Better Stack](https://betterstack.com) (free tier)

### Error Tracking (Optional)

Add Sentry:

```bash
npm install @sentry/react @sentry/tracing
```

## Troubleshooting

### Build Fails

- Check Node version: `node -v` (must be 20+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

### API Routes Not Working

- Verify `vercel.json` rewrites
- Check function logs in Vercel Dashboard → Functions
- Ensure API files in `api/` directory

### Styles Missing

- Verify Tailwind content paths in `tailwind.config.js`
- Check `npm run build` output for purged classes

### 404 on Refresh (SPA Routing)

- Verify `vercel.json` has catch-all rewrite to `/index.html`
- Check `_redirects` file in `public/` (alternative)

## Custom Domain Setup

### Vercel Dashboard

1. Project Settings → Domains
2. Add domain → follow DNS instructions
3. Wait for SSL provisioning (automatic)

### DNS Records (Example)

| Type  | Name | Value                |
| ----- | ---- | -------------------- |
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

## Cost Optimization

- **Vercel Free Tier**: 100GB bandwidth, unlimited personal projects
- **Functions**: 100GB-hours/month free
- **Analytics**: Free on Vercel
- **Custom Domains**: Free

## Security Headers

Already configured in `vercel.json`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Backup Strategy

- **Code**: GitHub (primary) + local clones
- **Deployments**: Vercel retains 30 days of deployments
- **Database**: N/A (static site)
- **Analytics**: GA4 retains 14 months (configurable)

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **React Docs**: [react.dev](https://react.dev)
- **Tailwind Docs**: [tailwindcss.com](https://tailwindcss.com)
