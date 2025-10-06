#!/bin/bash

# ScaleUp Pitch Deck - Quick Setup Script
echo "🚀 ScaleUp Pitch Deck Setup"
echo "=========================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create image directories if they don't exist
echo "📁 Creating image directories..."
mkdir -p public/founders
mkdir -p public/team  
mkdir -p public/advisors
mkdir -p public/companies

echo ""
echo "✨ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Add your images to the public/ folders:"
echo "   - public/logo.png (or use existing logo.svg)"
echo "   - public/founders/nirpeksh.jpg"
echo "   - public/founders/pratiksha.jpg"
echo "   - public/team/gulshan.jpg"
echo "   - public/advisors/kriti.jpg"
echo "   - public/advisors/akash.jpg"
echo ""
echo "2. Update contact info in components/sections/ContactSection.tsx"
echo ""
echo "3. Run locally:"
echo "   npm run dev"
echo ""
echo "4. Deploy to Vercel:"
echo "   npx vercel --prod"
echo ""
echo "Ready to build India's Learning OS! 🎯"
