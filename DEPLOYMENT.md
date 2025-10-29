# GitHub Pages Deployment Instructions

This guide will help you deploy the CatBot project to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Git repository set up
- GitHub account with push access to the repository

## Deployment Steps

### 1. Build the React App

Navigate to the React app directory and build it:

```bash
cd app/CatBotAI
npm install  # If you haven't already
npm run build
```

This creates a production build in `app/CatBotAI/build/`.

### 2. Copy Build to Deployment Location

Copy the contents of the `build/` directory to the `app/` directory in the root:

```bash
# From the CatBot-docs root directory
rm -rf app/index.html app/static app/asset-manifest.json app/manifest.json app/robots.txt app/favicon.ico app/logo*.png
cp -r app/CatBotAI/build/* app/
```

**Or manually:**
1. Delete old build files from `app/` (if any)
2. Copy all contents from `app/CatBotAI/build/` to `app/`

Your structure should look like:
```
CatBot-docs/
├── index.html              # Main landing page
├── style.css
├── visuals/
├── .nojekyll              # Tells GitHub to serve all files
├── app/                    # Built React app
│   ├── index.html         # React app entry
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   ├── asset-manifest.json
│   └── ...
└── app/CatBotAI/          # Source code (not deployed)
```

### 3. Commit and Push to GitHub

```bash
git add .
git commit -m "Deploy CatBot to GitHub Pages"
git push origin main
```

### 4. Configure GitHub Pages

1. Go to your GitHub repository: `https://github.com/vitalune/CatBot`
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### 5. Wait for Deployment

GitHub will build and deploy your site. This usually takes 1-2 minutes.

You'll see a message like:
```
Your site is live at https://vitalune.github.io/CatBot/
```

## Accessing Your Site

- **Main landing page**: `https://vitalune.github.io/CatBot/`
- **Interactive React app**: `https://vitalune.github.io/CatBot/app/`

## Making Updates

When you make changes:

1. **For static site** (index.html, style.css, visuals):
   - Edit files directly
   - Commit and push

2. **For React app** (anything in `app/CatBotAI/src/`):
   - Make changes in source files
   - Rebuild: `cd app/CatBotAI && npm run build`
   - Copy build: `cp -r app/CatBotAI/build/* app/`
   - Commit and push

## Troubleshooting

### Blank page or 404 errors
- Check that `.nojekyll` file exists in root
- Verify `package.json` has `"homepage": "/CatBot/app"`
- Clear browser cache

### CSS/JS not loading
- Check browser console for errors
- Verify paths in `app/index.html` are correct
- Ensure `app/static/` directory exists with CSS and JS files

### Navigation not working
- Verify links in `index.html` point to `app/index.html`
- Verify Header.js link points to `/CatBot/index.html`

### Images not showing
- Check that `visuals/` directory is committed to Git
- Verify image paths use `visuals/` prefix in HTML and CSS

## Local Testing Before Deploy

To test the built version locally:

```bash
# Install a simple HTTP server
npm install -g serve

# From the CatBot-docs root directory
serve .

# Open browser to http://localhost:3000
```

Test both:
- Main page: `http://localhost:3000/index.html`
- React app: `http://localhost:3000/app/index.html`

Ensure navigation works between both pages.

## Additional Notes

- The `.nojekyll` file is required to serve files starting with `_`
- React app builds are optimized and minified for production
- Source code in `app/CatBotAI/` doesn't need to be deployed (but keep it in repo for development)
- GitHub Pages serves static files only (no server-side processing)

## Quick Deploy Script

Create a script `deploy.sh` for easy deployment:

```bash
#!/bin/bash
cd app/CatBotAI
npm run build
cd ../..
rm -rf app/index.html app/static app/asset-manifest.json
cp -r app/CatBotAI/build/* app/
git add .
git commit -m "Deploy: $(date)"
git push origin main
echo "Deployed! Check https://vitalune.github.io/CatBot/"
```

Make it executable: `chmod +x deploy.sh`

Run with: `./deploy.sh`

---

**Need help?** Check the GitHub Pages documentation: https://docs.github.com/en/pages
