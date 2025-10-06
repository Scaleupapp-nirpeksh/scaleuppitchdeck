# 🚀 ScaleUp Pitch Deck - Quick Deployment Guide

## Complete Project Setup

### 1️⃣ IMMEDIATE DEPLOYMENT (5 minutes)

```bash
# Step 1: Install dependencies
npm install

# Step 2: Test locally
npm run dev
# Open http://localhost:3000

# Step 3: Deploy to Vercel
npx vercel --prod
```

### 2️⃣ ADD YOUR IMAGES

Replace placeholder images with your actual files:

```
public/
├── logo.svg (or logo.png)         # Your ScaleUp logo
├── founders/
│   ├── nirpeksh.jpg               # Nirpeksh's photo
│   └── pratiksha.jpg              # Pratiksha's photo
├── team/
│   └── gulshan.jpg                # Gulshan's photo
├── advisors/
│   ├── kriti.jpg                  # Kriti Srivastava's photo
│   └── akash.jpg                  # Akash Srivastava's photo
└── companies/                     # Optional company logos
    ├── target.png
    ├── vodafone.png
    ├── ge.png
    ├── socialbeat.png
    └── anarock.png
```

### 3️⃣ UPDATE CONTACT INFO

Edit `/components/sections/ContactSection.tsx`:
- Replace phone numbers
- Update LinkedIn URLs
- Add actual Calendly link

### 4️⃣ CUSTOMIZE CONTENT

Each section is in `/components/sections/`:
- Edit text directly in the component files
- Numbers and metrics are clearly marked
- Colors can be changed in `tailwind.config.js`

## Deployment Options

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Upload your project folder
4. Click "Deploy"

### Option B: Deploy via GitHub

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial ScaleUp pitch deck"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Connect GitHub to Vercel
3. Auto-deploy on every push

### Option C: Deploy via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow prompts - it auto-detects Next.js
```

## Custom Domain Setup

In Vercel Dashboard:
1. Go to your project
2. Settings → Domains
3. Add `pitch.scaleup.in` (or your domain)
4. Update DNS records as shown

## Environment Variables (Optional)

If you add analytics or forms:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
```

## Performance Checklist

- [ ] All images optimized (<100KB each)
- [ ] Tested on mobile devices
- [ ] PDF download working
- [ ] Smooth animations (60fps)
- [ ] Fast load time (<2s)

## Troubleshooting

**Build Error?**
```bash
npm run build  # Check for errors locally
```

**Images Not Showing?**
- Check file extensions match code
- Ensure files are in `/public` folder
- Clear browser cache

**Deployment Failed?**
```bash
vercel logs  # Check deployment logs
```

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: dev@scaleup.in

---

Ready to deploy in 5 minutes! 🚀
