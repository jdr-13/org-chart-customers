# Chime Org Chart

Internal org chart for Chime Banking Products division - built with Next.js for Vercel deployment.

## Features

- **Org Chart View**: Interactive hierarchical org chart with expandable sections
- **Teams View**: Browse contacts organized by team
- **Contacts View**: Filter between CardSwitcher contacts and all contacts
- **LinkedIn Integration**: Direct links to LinkedIn profiles
- **Primary Contacts**: Katherine Cheng (PM) and Ben McClaughry (Business Ops) highlighted

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to project and deploy:
```bash
cd chime-org-chart
vercel
```

3. Follow the prompts to link to your Vercel account

### Option 2: Deploy via GitHub

1. Push this code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/chime-org-chart.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Making it Internal/Private

### Option A: Vercel Password Protection (Pro plan)
1. In Vercel dashboard → Project Settings → General
2. Enable "Password Protection"
3. Set a password

### Option B: Vercel Authentication (Enterprise)
- Use Vercel's built-in SSO integration

### Option C: Add Basic Auth Middleware

Create `middleware.js` in the root:

```javascript
import { NextResponse } from 'next/server'

export function middleware(request) {
  const basicAuth = request.headers.get('authorization')
  
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')
    
    if (user === 'knot' && pwd === process.env.AUTH_PASSWORD) {
      return NextResponse.next()
    }
  }
  
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  })
}

export const config = { matcher: '/:path*' }
```

Then set `AUTH_PASSWORD` in Vercel Environment Variables.

## Project Structure

```
chime-org-chart/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   └── page.js          # Main org chart component
├── public/              # Static assets
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## Updating Contacts

Edit the `allPeople` array in `app/page.js` to add/remove/update contacts.

Each contact object:
```javascript
{
  name: 'Full Name',
  role: 'Job Title',
  team: 'Team Name',
  email: 'email@chime.com',
  linkedin: 'https://linkedin.com/in/profile',
  cardswitcher: true,  // Show in CardSwitcher filter
  isPrimary: false     // Highlight as primary contact
}
```
