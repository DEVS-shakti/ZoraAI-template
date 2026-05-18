# ZoraAI - Component Customization Guide

## 🎨 How to Customize Each Section

This guide shows you exactly where and how to modify each component.

## 1. Navbar Customization

### File Location
`src/App.tsx` → `Navbar()` function (lines ~50-100)

### Change Logo
```tsx
<motion.div className="flex items-center space-x-2">
  <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-lg" />
  <span className="font-bold text-xl">YourBrand</span>  {/* Change here */}
</motion.div>
```

### Change Navigation Items
```tsx
const navItems = [
  { label: 'Features', href: '#features' },      {/* Edit these */}
  { label: 'Pricing', href: '#pricing' },
  // Add more items
]
```

### Change CTA Button Text
```tsx
<motion.button>
  Get Started  {/* Change button text here */}
</motion.button>
```

## 2. Hero Section Customization

### File Location
`src/App.tsx` → `Hero()` function (lines ~120-280)

### Change Badge Text
```tsx
<div className="inline-block mb-6 px-4 py-2 glass rounded-full text-xs sm:text-sm text-accent-cyan">
  ✨ Your custom badge text here
</div>
```

### Change Headline
```tsx
<h1 className="text-display md:text-6xl font-bold mb-6 gradient-text leading-tight">
  Your amazing headline here
</h1>
```

### Change Subheading
```tsx
<p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
  Your supporting text or value proposition
</p>
```

### Change CTA Button Text
```tsx
<motion.button className="...">
  Your Button Text
</motion.button>
```

## 3. Features Section Customization

### File Location
`src/App.tsx` → `Features()` function (lines ~360-410)

### Add/Edit Features
```tsx
const features = [
  {
    icon: '🎯',                    {/* Change emoji icon */}
    title: 'Your Feature Title',    {/* Change title */}
    description: 'Your feature description goes here.'  {/* Change description */}
  },
  // Add more features by copying this object
]
```

### Change Section Title
```tsx
<h2 className="text-4xl md:text-5xl font-bold mb-6">Your Section Title</h2>
```

## 4. Pricing Section Customization

### File Location
`src/App.tsx` → `Pricing()` function (lines ~650-760)

### Edit Pricing Plans
```tsx
const plans = [
  {
    name: 'Your Plan Name',
    price: '$29',                  {/* Change price */}
    description: 'Plan description',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    highlighted: false,           {/* Set true for popular plan */}
  },
]
```

### Change Pricing Title
```tsx
<h2 className="text-4xl md:text-5xl font-bold mb-6">
  Your Pricing Title
</h2>
```

## 5. FAQ Section Customization

### File Location
`src/App.tsx` → `FAQ()` function (lines ~780-830)

### Add/Edit FAQ Items
```tsx
const faqs = [
  {
    question: 'Your question here?',
    answer: 'Your answer goes here. Can be multiple sentences.',
  },
  {
    question: 'Another question?',
    answer: 'Another answer.',
  },
  // Add more FAQ items
]
```

## 6. Testimonials Customization

### File Location
`src/App.tsx` → `Testimonials()` function (lines ~540-590)

### Edit Testimonials
```tsx
const testimonials = [
  {
    name: 'Person Name',
    title: 'Position at Company',
    content: 'What they said about your product...',
    avatar: '👨‍💼',  {/* Change emoji */}
  },
]
```

## 7. Integrations Customization

### File Location
`src/App.tsx` → `Integrations()` function (lines ~470-510)

### Change Integration List
```tsx
const integrations = [
  'Slack', 'GitHub', 'Jira', 'Salesforce',  {/* Edit this list */}
  'HubSpot', 'Stripe', 'Zapier', 'Make',
  // Add more integrations
]
```

## 8. Footer Customization

### File Location
`src/App.tsx` → `Footer()` function (lines ~880-950)

### Change Footer Links
```tsx
<div>
  <h4 className="font-semibold mb-4">Product</h4>
  <ul className="space-y-2 text-gray-400 text-sm">
    <li><a href="#features">Features</a></li>   {/* Edit links */}
    <li><a href="#pricing">Pricing</a></li>
    // Add or remove links
  </ul>
</div>
```

### Change Copyright
```tsx
<p className="text-center text-gray-400 text-sm">
  © 2024 Your Company Name. All rights reserved.
</p>
```

## 🎨 Color Customization

### Global Colors (All Sections)

Edit `tailwind.config.ts`:

```ts
colors: {
  'accent-purple': '#a855f7',  {/* Change this */}
  'accent-cyan': '#06b6d4',    {/* And this */}
  'accent-blue': '#3b82f6',    {/* And this */}
}
```

### For Specific Elements

Use Tailwind classes directly:
```tsx
className="bg-red-500"        {/* Red background */}
className="text-blue-400"     {/* Blue text */}
className="border-yellow-300" {/* Yellow border */}
```

## ⚡ Animation Customization

### Change Animation Speed

```tsx
transition={{ duration: 0.6 }}  {/* Change 0.6 to your value */}
```

### Change Animation Type

```tsx
transition={{ type: 'spring', stiffness: 100, damping: 30 }}  {/* Spring animation */}
transition={{ type: 'tween', duration: 0.5 }}                  {/* Linear animation */}
```

### Change Hover Effects

```tsx
whileHover={{ scale: 1.05, y: -5 }}  {/* Change scale and y values */}
```

## 📱 Responsive Design Customization

### Change Grid Layouts

Find grid classes in components:
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
{/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
```

### Common Responsive Patterns

```tsx
className="hidden md:block"      {/* Show only on tablet+ */}
className="hidden lg:flex"       {/* Show only on desktop+ */}
className="md:hidden"            {/* Hide on tablet+ */}
```

## 🎯 Typography Customization

### Change Font Size

Use Tailwind size classes:
```tsx
className="text-display"     {/* Largest - 4.5rem */}
className="text-4xl"         {/* Large - 2.25rem */}
className="text-lg"          {/* Medium - 1.125rem */}
className="text-sm"          {/* Small - 0.875rem */}
```

### Change Font Weight

```tsx
className="font-bold"        {/* 700 - Bold */}
className="font-semibold"    {/* 600 - Semi-bold */}
className="font-medium"      {/* 500 - Medium */}
className="font-normal"      {/* 400 - Regular */}
```

## 🔗 Link Customization

### Change Internal Links

```tsx
<a href="#features">Features</a>  {/* Scroll to #features section */}
```

### Change External Links

```tsx
<a href="https://yoursite.com" target="_blank">External Link</a>
```

## 📝 Text Content Quick Reference

| Section | Location | What to Edit |
|---------|----------|--------------|
| Navbar Logo | Line ~50 | Brand name |
| Navbar Items | Line ~55 | Navigation links |
| Hero Badge | Line ~135 | Small announcement |
| Hero Title | Line ~142 | Main headline |
| Hero Subtitle | Line ~147 | Supporting text |
| Features | Line ~365 | Feature items |
| Testimonials | Line ~545 | Customer quotes |
| Pricing | Line ~655 | Price tiers |
| FAQ | Line ~785 | Questions & answers |
| Footer | Line ~880 | Links & social |

## 🎪 Advanced Customizations

### Add New Section

1. Create new function:
```tsx
function MyNewSection() {
  return (
    <section className="py-24 px-6">
      {/* Your content here */}
    </section>
  )
}
```

2. Add to App component:
```tsx
<MyNewSection />  {/* Add this line */}
```

### Remove Section

1. Find the function in `src/App.tsx`
2. Delete the function
3. Remove its call from App component

### Reorder Sections

In App component, change the order of function calls:
```tsx
<Hero />
<TrustedBy />
<Features />
{/* Reorder these */}
<Dashboard />
```

## 🎨 CSS Customization

### Add Custom Styles

Edit `src/index.css`:
```css
.my-custom-class {
  @apply text-lg font-bold text-accent-purple;
}
```

Then use it:
```tsx
<div className="my-custom-class">Text here</div>
```

### Override Tailwind Styles

```tsx
className="!text-red-500"  {/* ! = important */}
```

## 📚 Quick Reference

### Button Variants

Primary button:
```tsx
className="bg-gradient-to-r from-accent-purple to-accent-cyan text-white rounded-xl font-semibold hover:shadow-xl glow-purple"
```

Secondary button:
```tsx
className="glass text-white rounded-xl font-semibold hover:bg-white/[0.1]"
```

### Card Styles

Glass card:
```tsx
className="glass rounded-xl p-8"
```

Dark card:
```tsx
className="bg-dark rounded-xl p-8"
```

---

**Customization Guide Version**: 1.0.0  
**Status**: Complete  
**Last Updated**: 2024

---

For more help, refer to:
- `SETUP_GUIDE.md` - Installation help
- `DESIGN_SYSTEM.md` - Design specifications
- `VISUAL_REFERENCE.md` - Component examples
