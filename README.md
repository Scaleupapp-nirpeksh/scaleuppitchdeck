# ScaleUp Pitch Deck - Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (for deployment)

### Installation

1. **Install dependencies**
```bash
npm install
# or
yarn install
```

2. **Run development server**
```bash
npm run dev
# or
yarn dev
```

3. **Open browser**
Navigate to `http://localhost:3000`

## 📸 Image Placeholders - WHERE TO ADD YOUR IMAGES

### 1. Logo
**Location:** `/public/logo.png`
- Add your ScaleUp logo here
- Recommended: PNG with transparent background
- Size: 200x60px or similar aspect ratio
- Used in: Navigation component (`/components/Navigation.tsx`)

### 2. Founder Photos
Create folder: `/public/founders/`

Add these images:
- `/public/founders/nirpeksh.jpg` - Nirpeksh's photo
- `/public/founders/pratiksha.jpg` - Pratiksha's photo
- Recommended: Square images, 400x400px minimum
- Used in: TeamSection component (`/components/sections/TeamSection.tsx`)

### 3. Team Photos
Create folder: `/public/team/`

Add:
- `/public/team/gulshan.jpg` - Gulshan's photo
- Recommended: Square images, 400x400px minimum

### 4. Advisor Photos
Create folder: `/public/advisors/`

Add:
- `/public/advisors/kriti.jpg` - Kriti Srivastava's photo
- `/public/advisors/akash.jpg` - Akash Srivastava's photo
- Recommended: Square images, 400x400px minimum

### 5. Company Logos (Optional)
Create folder: `/public/companies/`

Add logos for:
- `/public/companies/target.png`
- `/public/companies/vodafone.png`
- `/public/companies/ge.png`
- `/public/companies/socialbeat.png`
- `/public/companies/anarock.png`
- `/public/companies/deloitte.png`

## 🎨 Customization

### Colors
Edit `/tailwind.config.js` to change brand colors:
```javascript
colors: {
  primary: '#1E40AF',    // Your primary color
  secondary: '#0891B2',  // Your secondary color
  accent: '#F97316',     // Your accent color
}
```

### Content
All text content is in the component files under `/components/sections/`
- Edit section content directly in these files
- Data is structured for easy modification

## 🚢 Deployment to Vercel

### Method 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```
Follow the prompts. Vercel will automatically detect Next.js and configure everything.

### Method 2: Deploy via GitHub

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

### Method 3: Direct Upload

1. **Build the project**
```bash
npm run build
```

2. **Go to Vercel Dashboard**
- Visit [vercel.com](https://vercel.com)
- Drag and drop the project folder

## 📄 PDF Generation

The site includes print styles for PDF generation. Users can:
1. Click "Download PDF" button in navigation
2. Browser print dialog will open
3. Select "Save as PDF"
4. Choose landscape orientation for best results

## 🔧 Project Structure

```
scaleup-pitch-deck/
├── app/
│   ├── layout.tsx         # Main layout
│   ├── page.tsx           # Main page with all sections
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Top navigation bar
│   └── sections/          # All pitch deck sections
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── TeamSection.tsx
│       └── ... (other sections)
├── public/                # Static assets
│   ├── logo.png          # ADD YOUR LOGO HERE
│   ├── founders/         # ADD FOUNDER PHOTOS HERE
│   ├── team/             # ADD TEAM PHOTOS HERE
│   └── advisors/         # ADD ADVISOR PHOTOS HERE
├── package.json
└── tailwind.config.js
```

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized animations for mobile
- Swipe gestures support (coming soon)

## 🎯 Performance

Optimized for:
- Fast initial load (<2s on 3G)
- Smooth 60fps animations
- Lazy loading of heavy content
- SEO optimization

## 🛠 Troubleshooting

### Issue: Images not showing
- Ensure images are in the correct `/public` folders
- Check file extensions match the code (.jpg, .png)
- Clear browser cache

### Issue: Deployment fails
- Ensure all dependencies are in package.json
- Check Node.js version (18+ required)
- Verify build locally with `npm run build`

### Issue: Animations laggy
- Disable animations on mobile if needed
- Check browser performance settings
- Consider reducing animation complexity

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Contact the development team
- Check Vercel documentation: https://vercel.com/docs

## 🚀 Next Steps

1. Add all images to their designated folders
2. Customize content in section components
3. Test locally with `npm run dev`
4. Deploy to Vercel
5. Share your pitch deck URL!

## 📋 Checklist Before Going Live

- [ ] Logo added to `/public/logo.png`
- [ ] All founder photos added
- [ ] Advisor photos added
- [ ] Content reviewed and updated
- [ ] Contact information updated
- [ ] LinkedIn URLs added
- [ ] Tested on mobile devices
- [ ] PDF download working
- [ ] Deployed to Vercel
- [ ] Custom domain configured (optional)

---

Built with ❤️ for ScaleUp by the development team