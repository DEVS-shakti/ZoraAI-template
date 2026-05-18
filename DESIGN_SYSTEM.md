# ZoraAI Design System

## 🎨 Color Palette

### Primary Colors
- **Dark**: `#0a0e27` - Main background
- **Darker**: `#05070f` - Darkest background

### Accent Colors
- **Accent Purple**: `#a855f7` - Primary accent
- **Accent Cyan**: `#06b6d4` - Secondary accent
- **Accent Blue**: `#3b82f6` - Tertiary accent

### Gray Scale
- **Gray 900**: `#111827` - Darkest text
- **Gray 300**: `#d1d5db` - Light text
- **Gray 400**: `#9ca3af` - Medium text

### Semantic Colors
- **Red**: `#ef4444` - Errors, alerts
- **Yellow**: `#eab308` - Warnings
- **Green**: `#22c55e` - Success

## 📐 Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Font Sizes
- **Display**: 4.5rem (72px) - Large headlines
- **H1**: 3.5rem (56px) - Page titles
- **H2**: 2.5rem (40px) - Section titles
- **H3**: 1.875rem (30px) - Subsection titles
- **Large**: 1.125rem (18px) - Body large
- **Base**: 1rem (16px) - Body text
- **Small**: 0.875rem (14px) - Captions
- **Tiny**: 0.75rem (12px) - Small text

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Subtle emphasis
- **Semibold**: 600 - Section titles
- **Bold**: 700 - Headlines

### Line Heights
- Display: 1.1
- H1-H3: 1.2-1.4
- Body: 1.5-1.75

## 🎯 Spacing Scale

All spacing based on 4px units:
- `4px` (1 unit)
- `8px` (2 units)
- `12px` (3 units)
- `16px` (4 units) - Base unit
- `24px` (6 units)
- `32px` (8 units)
- `48px` (12 units)
- `64px` (16 units)
- `96px` (24 units)

### Common Spacing
- **Padding**: 16px, 24px, 32px
- **Margins**: 24px, 32px, 48px
- **Gaps**: 16px, 24px, 32px

## 🔄 Animations

### Duration
- **Quick**: 0.2s - Hover effects
- **Standard**: 0.3s - Component transitions
- **Medium**: 0.6s - Section animations
- **Slow**: 0.8s - Page load animations

### Easing
- **In Out**: `cubic-bezier(0.4, 0, 0.2, 1)` - Standard
- **Spring**: `spring` with stiffness 100, damping 30 - Natural feel
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` - Fast exit

### Keyframe Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
  50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
}
```

## 🎲 Components

### Glass Effect
```tsx
className="glass"  // bg-white/[0.07] + backdrop-blur-md + border
className="glass-light"  // bg-white/[0.05] + backdrop-blur-sm + border
```

### Gradient Text
```tsx
className="gradient-text"  // Multi-color gradient with clip-text
```

### Glow Effects
```tsx
className="glow-purple"  // Purple shadow
className="glow-blue"    // Blue shadow
className="glow-cyan"    // Cyan shadow
```

## 📊 Grid System

### Desktop (lg)
- 12 column grid
- Recommended: 3-column layouts
- Max width: 1280px

### Tablet (md)
- 8 column grid
- Recommended: 2-column layouts
- Max width: 960px

### Mobile (sm)
- 4 column grid
- Recommended: 1-column layouts
- Full width with padding

## 🖱️ Interactive States

### Buttons
```tsx
// Default
bg-gradient-to-r from-accent-purple to-accent-cyan

// Hover
scale: 1.05
shadow: lg
glow-purple

// Active
scale: 0.95
```

### Cards
```tsx
// Default
glass + rounded-xl + p-8

// Hover
y: -5 (lift)
shadow: xl

// On Focus
outline: 2px (accent color)
```

### Links
```tsx
// Default
text-gray-300

// Hover
text-white
transition-colors duration-300
```

## 🔍 Accessibility

### Color Contrast
- Text on dark: Minimum 4.5:1 ratio
- Interactive elements: 3:1 ratio
- Focus indicators: Always visible

### Typography
- Line length: 65-75 characters
- Line height: 1.5-1.75 for readability
- No text smaller than 14px

### Motion
- Respects `prefers-reduced-motion`
- Animations are intentional, not distracting
- No flashing content

## 📱 Responsive Design Patterns

### Hero Section
- Desktop: Full-height with sidebar content
- Tablet: Stacked, taller
- Mobile: Minimal padding, compact

### Feature Grid
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column, full width

### Pricing Cards
- Desktop: 3 side-by-side with scale on center
- Tablet: 3 stacked or 2 side-by-side
- Mobile: 1 column, full width (center card scaled)

## 🎪 Animation Patterns

### Entrance
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Hover Lift
```tsx
whileHover={{ y: -5 }}
transition={{ duration: 0.3 }}
```

### Scroll Reveal
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: i * 0.1 }}
```

## 🌈 Gradient Examples

### Purple to Cyan
```css
background: linear-gradient(to right, #a855f7, #06b6d4);
```

### Blue to Purple
```css
background: linear-gradient(to right, #3b82f6, #a855f7);
```

### Cyan to Blue
```css
background: linear-gradient(to right, #06b6d4, #3b82f6);
```

## 🎭 Glass Morphism Details

### Properties
- **Opacity**: 7% base opacity for depth
- **Blur**: 12px backdrop blur for effect
- **Border**: 10% white opacity border
- **Padding**: 32px standard (8 units)

### Variations
- **Base Glass**: 7% opacity, 12px blur
- **Light Glass**: 5% opacity, 8px blur
- **Strong Glass**: 10% opacity, 16px blur

## 🔧 Custom Utilities

Defined in `src/index.css`:

```css
.glass { /* Glassmorphism */ }
.glass-light { /* Lighter glass effect */ }
.gradient-text { /* Gradient text */ }
.glow-purple { /* Purple glow shadow */ }
.glow-blue { /* Blue glow shadow */ }
.glow-cyan { /* Cyan glow shadow */ }
```

## 📦 Breakpoint Names

| Name | Width | Use Case |
|------|-------|----------|
| `sm` | 640px | Small phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large screens |

## 🎯 Design Principles

1. **Clarity**: Content is always readable
2. **Hierarchy**: Visual priority guides users
3. **Consistency**: Repeating patterns build familiarity
4. **Motion**: Animations serve a purpose
5. **Restraint**: Less is more, elegant > cluttered

---

**Design System Version**: 1.0.0
**Last Updated**: 2024
**Status**: Production Ready
