# Mall of America - Design Specification

## Vision
Create a modern, premium, energetic shopping experience with vibrant but elegant design that feels luxurious, smooth, and immersive.

---

## Color Palette

### Primary Brand Colors
- **Electric Purple**: #7C3AED - Main brand identity color
- **Soft Pink**: #EC4899 - Accent and CTAs
- **Sky Blue**: #38BDF8 - Secondary actions and accents
- **Aqua Cyan**: #22D3EE - Tertiary accents

### Background Gradient
```css
/* Light Mode */
linear-gradient(180deg, #FDFBFF 0%, #F5F7FF 50%, #EEF9FF 100%)

/* Dark Mode */
linear-gradient(180deg, #0F172A 0%, #1A1F35 50%, #1E293B 100%)
```

### Hero Gradient
```css
linear-gradient(135deg, #7C3AED 0%, #EC4899 45%, #38BDF8 100%)
```

---

## Typography

### Fonts
- **Headings**: Poppins (weight: 700-800)
- **Body**: Inter (weight: 400-600)

### Sizing
- **Large Headlines**: clamp(3rem, 7vw, 6rem), font-weight 800, letter-spacing -2px
- **Section Titles**: 2.5rem, font-weight 700
- **Body Text**: 1rem - 1.125rem, line-height 1.6

---

## Component Styles

### Glassmorphism Cards
```css
background: rgba(255, 255, 255, 0.18);
backdrop-filter: blur(18px);
border: 1px solid rgba(255, 255, 255, 0.25);
border-radius: 1.5rem;
box-shadow: 0 8px 32px rgba(124, 58, 237, 0.12);
```

**Hover State:**
- Transform: translateY(-3px)
- Shadow: Enhanced glow effect
- Opacity: Subtle increase

### Primary Button (CTA)
```css
background: linear-gradient(135deg, #7C3AED, #EC4899);
color: white;
padding: 0.875rem 1.75rem;
border-radius: 999px;
font-weight: 600;
```

**Hover:**
- Transform: translateY(-3px) scale(1.03)
- Shadow: 0 12px 30px rgba(236, 72, 153, 0.35)

---

## Animation Specifications

### Entrance Animations
1. **Fade Up**
   - Duration: 0.8s
   - Easing: ease-out
   - Properties: opacity (0→1), translateY (80px→0)

2. **Scale In**
   - Duration: 0.6s
   - Scale: 0.85→1
   - Opacity: 0→1

3. **Stagger Effect**
   - Delay between items: 0.15s

### Scroll Animations
1. **Parallax Background**
   - Offset: scrollY × 0.4

2. **Floating Elements**
   - Animation: Continuous float motion
   - Duration: 6s+ (slow, premium feel)

3. **Glow on Hover**
   - Shadow expansion with primary color

---

## Floating Blur Lights

Used for premium background effect:
- **Color Options**:
  - Purple: rgba(124, 58, 237, 0.6)
  - Pink: rgba(236, 72, 153, 0.6)
  - Cyan: rgba(34, 211, 238, 0.6)
- **Blur**: 120px
- **Opacity**: 0.3 - 0.4
- **Animation**: Slow drift (8-12 seconds)

---

## Layout Principles

1. **Full-Screen Sections**: Each major section spans full viewport
2. **Large Visual Blocks**: Generous whitespace and breathing room
3. **Centered Content**: Max-width containers (70-80 chars)
4. **Responsive Grid**: Mobile-first, scales to 3-4 columns on desktop
5. **Floating Cards**: Light shadows, subtle movement

---

## Mobile Optimizations

- Rounded corners maintained
- Large touch targets (min 48px height)
- Floating CTA buttons
- Reduced animation complexity on mobile
- Swipeable card sections
- Single column layouts

---

## User Experience Goals

- **Smoothness**: Apple-level finesse and polish
- **Cinema**: Netflix-like immersive sections
- **Luxury**: Premium mall atmosphere
- **Modern**: Gen-Z shopping platform energy
- **Interactive**: Digital experience feel

Target user feeling: *"Wow, this mall looks futuristic and exciting."*
