# Auvora Marketing Website - Setup Instructions

## Overview
This is a complete marketing website for MyAuvora.com built with Next.js, TypeScript, and Tailwind CSS.

## What's Included
- ✅ Home page with hero, features, and product sections
- ✅ Auvora Fitness page with pricing and features
- ✅ Auvora Education page with enrollment pipeline
- ✅ Auvora Wellness page for wellness practices
- ✅ Auvora Beauty page (coming soon)
- ✅ Auvora Auxiliary page (coming soon)
- ✅ Book a Demo page with contact form
- ✅ Responsive navigation with Auvora logo
- ✅ Mobile-first responsive design
- ✅ Brand colors (teal and gold) throughout

## GitHub Repository Setup

Since I don't have permission to create repositories in your GitHub organization, please follow these steps:

### 1. Create the GitHub Repository
```bash
# Go to https://github.com/MyAuvora
# Click "New repository"
# Name it: my-auvora-website
# Make it Public
# Do NOT initialize with README, .gitignore, or license
# Click "Create repository"
```

### 2. Push the Code
```bash
cd /home/ubuntu/my-auvora-website

# Add the remote (replace with your actual repo URL)
git remote add origin https://github.com/MyAuvora/my-auvora-website.git

# Push the code
git push -u origin devin/1763142711-auvora-marketing-website

# Also push main branch
git checkout main
git push -u origin main
```

### 3. Create a Pull Request
```bash
# Go to your GitHub repository
# You should see a banner to create a PR from your branch
# Click "Compare & pull request"
# Review the changes and create the PR
```

## Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Run Production Build
```bash
npm start
```

## Deployment Options

### Vercel (Recommended for Next.js)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js and configure everything
4. Deploy!

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Import your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

## Project Structure
```
my-auvora-website/
├── app/
│   ├── components/
│   │   └── Navigation.tsx       # Shared navigation component
│   ├── auxiliary/
│   │   └── page.tsx             # Auxiliary coming soon page
│   ├── beauty/
│   │   └── page.tsx             # Beauty coming soon page
│   ├── demo/
│   │   └── page.tsx             # Book a demo form
│   ├── education/
│   │   └── page.tsx             # Education vertical page
│   ├── fitness/
│   │   └── page.tsx             # Fitness vertical page
│   ├── wellness/
│   │   └── page.tsx             # Wellness vertical page
│   ├── globals.css              # Global styles with brand colors
│   ├── layout.tsx               # Root layout with navigation
│   └── page.tsx                 # Home page
├── public/
│   └── images/
│       └── auvora-logo.png      # Auvora logo
└── package.json
```

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Brand Guidelines
- **Primary Color**: Teal (#0f5257, teal-700)
- **Accent Color**: Gold/Amber (#d4af37)
- **Typography**: Inter font family
- **Design**: Clean, modern, minimal with plenty of white space

## Notes
- All pages are fully responsive and mobile-friendly
- The demo form is client-side only (no backend integration yet)
- Logo is included in public/images/auvora-logo.png
- All routes are set up and working
- Build completed successfully with no errors
