# ZoraAI Landing Page - Visual Reference Guide

## 🎨 Component Gallery

This guide shows all major components and their visual properties.

## 1. Navbar

**Visual**: Sticky floating navbar at top with glassmorphism
- **Background**: `glass` (white/[0.07] with backdrop blur)
- **Shape**: Rounded-2xl
- **Items**: Logo, Navigation Links, CTA Button
- **Position**: Fixed, top-0, z-50
- **Height**: 60px with padding

```
┌─────────────────────────────────────────────────────┐
│ 🔷 ZoraAI  Features  Pricing  ... [Get Started]    │
└─────────────────────────────────────────────────────┘
```

## 2. Hero Section

**Visual**: Full-height section with gradient text and dashboard preview
- **Headline**: `text-display` (4.5rem) with gradient text
- **Subheading**: `text-lg` with gray-400 text
- **CTA Buttons**: 
  - Primary: Gradient purple→cyan with glow
  - Secondary: Glass effect
- **Dashboard**: Glass card with animated charts

```
         ✨ Experience Next-Generation AI Automation

    Transform workflows with intelligent AI automation.
    
    [Get Started Free]  [Book a Demo]
    
    ┌─────────────────────────────────────────────────┐
    │  ╭─ ZoraAI Dashboard         ⬤⭕⭕              │
    │  │                                               │
    │  │  ┌──────────────────┐  ┌────────┐           │
    │  │  │ Analytics Chart  │  │  234   │           │
    │  │  │ ███ ███ ███ ███  │  │ Active │           │
    │  │  │                  │  └────────┘           │
    │  │  └──────────────────┘                        │
    │  │
    │  ⚡ Real-time Processing    🔒 Enterprise Secure│
    └─────────────────────────────────────────────────┘
```

## 3. Trusted By Section

**Visual**: Grid of company logos with hover effects
- **Grid**: Responsive (6 desktop, 3 tablet, 2 mobile)
- **Cards**: Glass effect, rounded-lg
- **Hover**: Scale 1.05, color cyan
- **Layout**: Full-width with 8px gap

```
        TRUSTED BY LEADING COMPANIES

    [Quantum]  [Astro]   [Nebula]
    [Vertex]   [Cosmo]   [Apex]
```

## 4. Features Section

**Visual**: 6 feature cards in grid layout
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Cards**: Glass effect, p-8, rounded-xl
- **Icon**: Large emoji (4xl)
- **Hover**: y-5 lift effect
- **Animation**: Staggered entrance on scroll

```
    ⚡ AI Automation          🧠 Workflow Intelligence    📊 Analytics
    Auto-repeat tasks         Intelligent optimization    Real-time insights
    
    🔗 Seamless Integration   ⚡ Real-time Processing     🔐 Enterprise Security
    1000+ tools              Sub-millisecond latency      SOC 2 Type II
```

## 5. Dashboard Section

**Visual**: Large glassmorphic dashboard mockup with animations
- **Background**: Glass with glow overlay
- **Layout**: Header + Sidebar + Main Content
- **Charts**: Animated bars with gradient
- **Stats**: Real-time metrics cards
- **Height**: 600px responsive

```
    Master your data universe from a single command center.
    
    ┌──────────────────────────────────────────────────────────┐
    │  ╭─ ZoraAI Dashboard              ⬤⭕⭕                  │
    │  │ Dashboard | Workflows | Analytics | Integrations ...  │
    │  ├──────────────────────┬──────────────────────────────┤
    │  │  Workflow Performance │ Success Rate    98.7%        │
    │  │  ███ ███ ███ ███     │ Avg Duration    2.3s         │
    │  │  ███ ███ ███ ███     │ Total Runs      45.2K        │
    │  │  ███ ███ ███ ███     │                              │
    │  │                      │                              │
    │  └──────────────────────┴──────────────────────────────┘
    └──────────────────────────────────────────────────────────┘
```

## 6. Integrations Section

**Visual**: Grid of integration platform logos
- **Grid**: 6 columns desktop, 3 tablet, 2 mobile
- **Cards**: Glass effect, p-6, rounded-lg
- **Hover**: y-5 lift, scale 1.05
- **Text**: Centered, font-semibold

```
    Plugs well with your stack - Connect with all your favorite tools
    
    [Slack]      [GitHub]     [Jira]
    [Salesforce] [HubSpot]    [Stripe]
    [Zapier]     [Make]       [Monday.com]
    [Asana]      [Notion]     [Airtable]
```

## 7. Testimonials Section

**Visual**: 3 testimonial cards with avatars and ratings
- **Grid**: 3 columns desktop, 1 tablet/mobile
- **Cards**: Glass effect, p-8, rounded-xl
- **Avatar**: Emoji 4xl, with name and title
- **Rating**: Star icons (yellow)

```
    Voices from the frontier! - See what our users are saying
    
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ 👩‍💼 Sarah Chen │  │ 👨‍💼 Marcus J. │  │ 👩‍🔬 Elena R. │
    │ CTO at...     │  │ Operations.. │  │ Founder of..│
    │               │  │               │  │             │
    │ "ZoraAI      │  │ "The AI      │  │ "Best      │
    │ completely  │  │ capabilities │  │ investment │
    │ transformed │  │ are incred..." │ │ we've made" │
    │ ours..."    │  │               │  │             │
    │ ★★★★★       │  │ ★★★★★        │  │ ★★★★★      │
    └──────────────┘  └──────────────┘  └──────────────┘
```

## 8. Pricing Section

**Visual**: 3 pricing cards with highlighted center card
- **Layout**: 3 columns desktop, stacked mobile
- **Center Card**: scale-105 with border-2 border-accent-purple
- **Badge**: "MOST POPULAR" on center card
- **Button**: Gradient primary on highlighted, glass on others
- **Features**: Checkmark list with cyan color

```
    Invest in intelligence - Simple, transparent pricing
    
    ┌──────────┐  ┌──────────────┐  ┌──────────┐
    │ Starter  │  │ ★ Pro ★      │  │Enterprise│
    │ $29/mo   │  │ $79/mo       │  │ Custom   │
    │          │  │              │  │          │
    │ Features │  │ MORE POPULAR  │  │ Features │
    │ ✓        │  │ ✓✓✓✓✓        │  │ ✓✓✓✓✓   │
    │ [Get]    │  │ [Get] (glow) │  │ [Get]    │
    └──────────┘  └──────────────┘  └──────────┘
```

## 9. FAQ Section

**Visual**: Accordion with animated height transitions
- **Cards**: Glass effect, full width
- **Header**: Clickable row with chevron icon
- **Chevron**: Rotates 180° on open
- **Content**: Smooth height animation

```
    Frequently Asked Questions

    ▼ How do I get started with ZoraAI?
    › Simply sign up for a free account...
    
    ▶ Can I integrate ZoraAI with my existing tools?
    
    ▶ Is my data secure with ZoraAI?
    
    ▶ What kind of support do you offer?
```

## 10. CTA Section

**Visual**: Large final call-to-action with powerful messaging
- **Text**: Gradient text, text-5xl font-bold
- **Subtext**: gray-400, text-xl
- **Buttons**: Primary gradient and secondary glass
- **Animation**: Fade-in on scroll

```
    Slap into the future of work.
    
    Join thousands of teams already using ZoraAI...
    
    [Start Free Trial]  [Request Demo]
```

## 11. Footer

**Visual**: Multi-column footer with links and socials
- **Grid**: 5 columns desktop, stacked mobile
- **Logo**: Brand icon + name
- **Links**: Multiple columns with hover effects
- **Socials**: Icon buttons with glass effect

```
    ┌────────────┬─────────────┬──────────┬────────┬──────────┐
    │ 🔷 ZoraAI  │ Product     │ Company  │ Legal  │ Follow   │
    │            │ • Features  │ • About  │ • Pri  │ T G L    │
    │ Intelligent│ • Pricing   │ • Blog   │ • TOS  │          │
    │ automation │ • Integr... │ • Careers│ • Sec  │          │
    └────────────┴─────────────┴──────────┴────────┴──────────┘
    © 2024 ZoraAI. All rights reserved.
```

## Color Usage Examples

### Purple Accent (`#a855f7`)
- Primary buttons
- Highlighted elements
- Featured cards
- Accent text

### Cyan Accent (`#06b6d4`)
- Secondary text
- Hover states
- Glow effects
- Checkmarks

### Blue Accent (`#3b82f6`)
- Gradient components
- Alternative accents
- Chart colors

## Animation Types

### Entrance
- Fade in with y-shift
- Duration: 0.6-0.8s
- Staggered delay: i * 0.1s

### Hover
- Scale: 1.05
- Y-translate: -5px
- Duration: 0.3s

### Scroll Reveal
- Fade in on view
- Y-shift: 20px
- Staggered per item

### Floating
- Infinite Y animation
- Duration: 4-6s
- Amplitude: ±10px

## Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | <640px | Single column, full width padding |
| Tablet | 640-1024px | 2-3 columns, medium padding |
| Desktop | >1024px | 3-6 columns, max-width container |

---

**Visual Reference Version**: 1.0.0
**Last Updated**: 2024
**Status**: Complete
