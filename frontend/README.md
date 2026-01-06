# AllFile Pro Landing Page - Frontend

Complete React implementation of the AllFile Pro landing page based on the design system and HTML inspirations.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── sections/        # All landing page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── SocialProof.jsx
│   │   │   ├── Problem.jsx
│   │   │   ├── Solution.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── FinalCTA.jsx
│   │   │   └── Footer.jsx
│   │   ├── GlassCard.jsx    # Reusable glassmorphism card
│   │   ├── GlassPill.jsx    # Reusable glass pill/badge
│   │   ├── PhoneMockup.jsx  # 3D phone mockup component
│   │   └── Header.jsx       # Navigation header
│   ├── App.jsx              # Main app component
│   ├── index.js             # Entry point
│   ├── index.css            # Global styles & Tailwind
│   └── design-tokens.js     # Design system tokens
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── craco.config.js          # CRACO configuration
```

## 🎨 Design System

### Colors
- Primary: `#4a8fe3`
- Background Light: `#fdfbf7`
- Background Dark: `#121820`
- Paper: `#F5F1E8`

### Typography
- Headlines: Playfair Display (Serif)
- Body: Inter (Sans-serif)
- Icons: Material Symbols Outlined

### Components
- **GlassCard**: Glassmorphism card with hover effects
- **GlassPill**: Badge/pill component with glass effect
- **PhoneMockup**: 3D phone mockup with perspective transforms

## 📱 Sections

1. **Hero** - Main landing section with 3D phone mockup
2. **Social Proof** - Featured in publications
3. **Problem** - Pain points section
4. **Solution** - Feature showcase
5. **Privacy** - Security & privacy focus
6. **Testimonials** - User reviews
7. **Pricing** - Free forever messaging
8. **FAQ** - Accordion FAQ section
9. **Final CTA** - Download call-to-action
10. **Footer** - Links and information

## 🛠️ Technologies

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations (optional, ready for use)
- **Material Symbols** - Icon library
- **CRACO** - Create React App Configuration Override

## 🎯 Features

- ✅ Fully responsive design
- ✅ Glassmorphism effects
- ✅ Smooth animations
- ✅ 3D phone mockups
- ✅ Accessible components
- ✅ SEO optimized
- ✅ Performance optimized

## 📝 Notes

- All design files from `/design` folder have been converted to React components
- System prompt specifications have been implemented
- Colors match the design files exactly
- Animations are implemented using Tailwind and CSS

## 🔧 Customization

Edit design tokens in `src/design-tokens.js` to change colors, spacing, etc.

Modify Tailwind config in `tailwind.config.js` for theme customization.

## 📄 License

All rights reserved - AllFile Pro
