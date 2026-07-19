# Environment Configuration Guide

## Overview

This document describes all environment variables used in the portfolio project, their purpose, and configuration for each environment.

## Environment Variables

### Required Variables

| Variable                    | Description                                          | Required | Default        |
| --------------------------- | ---------------------------------------------------- | -------- | -------------- |
| `VITE_SITE_URL`             | Canonical site URL for SEO, sitemap, structured data | Yes      | -              |
| `VITE_CONTACT_API_ENDPOINT` | API endpoint for contact form submissions            | Yes      | `/api/contact` |

### Optional Variables

| Variable                  | Description                                      | Required | Default |
| ------------------------- | ------------------------------------------------ | -------- | ------- |
| `VITE_GA_MEASUREMENT_ID`  | Google Analytics 4 Measurement ID (G-XXXXXXXXXX) | No       | -       |
| `VITE_ENABLE_ANALYTICS`   | Enable analytics tracking (true/false)           | No       | `false` |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key for contact form           | No       | -       |

## Environment Files

### Development (`.env.local`)

```bash
# Local development
VITE_SITE_URL=http://localhost:5173
VITE_CONTACT_API_ENDPOINT=/api/contact
VITE_ENABLE_ANALYTICS=false
```

### Preview/Staging (Vercel Preview Deployments)

```bash
VITE_SITE_URL=https://portfolio-git-main-username.vercel.app
VITE_CONTACT_API_ENDPOINT=/api/contact
VITE_ENABLE_ANALYTICS=false
```

### Production (Vercel Production)

```bash
VITE_SITE_URL=https://myporto-lime.vercel.app
VITE_CONTACT_API_ENDPOINT=/api/contact
VITE_ENABLE_ANALYTICS=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Usage in Code

### Accessing Variables

```typescript
// In any component or utility
const siteUrl = import.meta.env.VITE_SITE_URL
const apiEndpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT
```

### TypeScript Declarations

Create `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_CONTACT_API_ENDPOINT: string
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_ENABLE_ANALYTICS?: string
  readonly VITE_RECAPTCHA_SITE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## Validation

### Build-Time Validation

The build will fail if required variables are missing. Add to `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(process.env.VITE_SITE_URL),
  },
  // Validate required env vars
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MISSING_EXPORT') return
        warn(warning)
      },
    },
  },
})
```

### Runtime Validation (Optional)

```typescript
// src/shared/utils/env-validation.ts
const requiredEnvVars = ['VITE_SITE_URL', 'VITE_CONTACT_API_ENDPOINT']

export function validateEnv() {
  const missing = requiredEnvVars.filter((key) => !import.meta.env[key])

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    )
  }
}
```

## Security Considerations

### Never Commit Secrets

- ❌ Never commit `.env.local`, `.env.production`, or any `.env` files with real values
- ✅ Use `.env.example` as template with placeholder values
- ✅ Store production secrets in Vercel/GitHub Secrets only

### Client-Side Exposure

All `VITE_*` variables are **embedded in the client bundle** at build time.

- Safe: Public URLs, API endpoints, feature flags
- Unsafe: API keys, secrets, private tokens (use serverless functions instead)

### API Keys

For services requiring API keys (e.g., reCAPTCHA, email services):

1. Store keys in Vercel Environment Variables
2. Create serverless API routes in `/api/` that use the keys
3. Frontend calls your API route, not the external service directly

## Vercel Configuration

### Project Settings → Environment Variables

Add variables for each environment:

- **Production**: Production values
- **Preview**: Preview deployment values
- **Development**: Local development values (optional)

### CLI Commands

```bash
# Pull production env to local
vercel env pull .env.local

# List all env vars
vercel env ls

# Add new env var
vercel env add VITE_NEW_VAR production

# Remove env var
vercel env rm VITE_OLD_VAR production
```

## Troubleshooting

### Variable Not Available

1. Restart dev server after adding `.env.local`
2. Check variable name starts with `VITE_`
3. Verify no typos in variable name
4. Check Vercel deployment logs for build-time values

### TypeScript Errors

Run `npm run build` to trigger type checking, or add `vite-env.d.ts` as shown above.

### Different Values Per Environment

Vercel automatically uses the correct environment's variables. For local testing:

```bash
# Simulate production
VITE_SITE_URL=https://production.com npm run dev
```

## Example: Adding Google Analytics

1. Create GA4 property → Get Measurement ID (G-XXXXXXXXXX)
2. Add to Vercel Production env: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Add to Vercel Production env: `VITE_ENABLE_ANALYTICS=true`
4. Create analytics component:

```tsx
// src/shared/components/Analytics.tsx
import { useEffect } from 'react'

export function Analytics() {
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
  const ENABLED = import.meta.env.VITE_ENABLE_ANALYTICS === 'true'

  useEffect(() => {
    if (!ENABLED || !GA_ID || typeof window === 'undefined') return

    // Load gtag script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script1)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', GA_ID)

    return () => {
      document.head.removeChild(script1)
    }
  }, [GA_ID, ENABLED])

  return null
}
```

5. Add to `MainLayout.jsx`:

```tsx
import { Analytics } from '../shared/components/Analytics'
// ...
;<Analytics />
```
