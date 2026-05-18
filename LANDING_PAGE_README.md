# ZoraAI - Futuristic AI SaaS Landing Page

A stunning, production-quality futuristic AI SaaS landing page built with React, Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Design Excellence
- **Futuristic Aesthetic**: Dark premium background with glassmorphism effects
- **Smooth Animations**: Framer Motion animations for elegant transitions
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile
- **Interactive Elements**: Mouse-follow glow effects, hover animations, and dynamic interactions

### Core Sections
1. **Navbar** - Sticky floating navbar with glass effect
2. **Hero Section** - Massive headline with animated dashboard preview
3. **Trusted By** - Company logos with hover effects
4. **Features** - 6 core intelligence modules in glass cards
5. **Dashboard** - Beautiful full-featured dashboard mockup
6. **Integrations** - 12 integration partners with smooth animations
7. **Testimonials** - 3 customer testimonials with ratings
8. **Pricing** - 3-tier pricing with highlighted popular plan
9. **FAQ** - Animated accordion with smooth transitions
10. **CTA** - Final call-to-action section
11. **Footer** - Modern footer with links and social media

## 🎨 Design System

### Colors
- **Primary Dark**: `#0a0e27`
- **Darker**: `#05070f`
- **Accent Purple**: `#a855f7`
- **Accent Cyan**: `#06b6d4`
- **Accent Blue**: `#3b82f6`

### Effects
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Glow Effects**: Subtle glowing shadows on interactive elements
- **Gradients**: Smooth color transitions
- **Animations**: Smooth, intentional Framer Motion animations

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 11** - Animation library

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx           # Main app component with all sections
├── App.css           # App-specific styles
├── index.css         # Global styles with Tailwind
└── main.tsx          # Entry point
```

## 🎯 Key Features

### Responsive Grid System
- Desktop: 3-column layouts
- Tablet: 2-column layouts
- Mobile: 1-column layouts

### Interactive Animations
- Fade-in on scroll with `whileInView`
- Hover lift effects on cards
- Rotating elements
- Smooth height transitions
- Parallax mouse following effects

### Performance
- Lazy loading animations with `whileInView`
- Optimized Tailwind CSS
- Minimal JavaScript footprint
- Fast Vite build process

## 🎪 Customization

### Colors
Edit the Tailwind config in `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      'accent-purple': '#a855f7',
      'accent-cyan': '#06b6d4',
      // ...
    }
  }
}
```

### Content
All text content is inline in `App.tsx`. Easy to update:
- Navbar items
- Hero headline and description
- Feature titles and descriptions
- Pricing plans and features
- FAQ questions and answers
- Footer links

### Animations
Framer Motion props are easily customizable:
- `duration` - Animation speed
- `delay` - Animation start delay
- `transition` - Animation type (spring, tween, etc.)

## 📱 Mobile Optimization

The landing page uses responsive design with:
- Mobile-first approach
- Touch-friendly buttons
- Optimized spacing for small screens
- Readable text sizes
- Simplified layouts for mobile

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Notes

- All components are in a single `App.tsx` file for easy maintenance
- Can be split into individual component files later
- Tailwind CSS handles all styling - no additional CSS files needed
- Framer Motion handles all animations
- No external icon libraries - uses emojis for icons

## 🚀 Deployment

Ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

Build command: `npm run build`
Output directory: `dist/`

## 📄 License

Created for premium SaaS template use. All rights reserved.

---

**Built with ❤️ for next-generation AI startups**
