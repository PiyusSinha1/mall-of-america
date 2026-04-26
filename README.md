# Mall of America Sales Deck

A premium, interactive sales deck for Mall of America featuring 7 core sections with modular architecture designed for Phase 2 expansion.

## Project Structure

### Core Directories

- **`/app`** - Next.js application routes and main page
  - `page.tsx` - Main landing page with all sections
  - `layout.tsx` - Root layout with metadata
  - `globals.css` - Global styles and design tokens

- **`/components`** - React components organized by type
  - `/common` - Reusable layout and utility components
    - `SectionWrapper.tsx` - Consistent section container
    - `HeroSection.tsx` - Full-screen hero pattern
    - `GridShowcase.tsx` - Card-based grid layout
    - `MetricBox.tsx` - KPI and metric display
  - `/sections` - Individual page sections
    - `OpeningSection.tsx` - Opening/Hero section
    - `WhyPropertySection.tsx` - Market positioning
    - `RetailShowcaseSection.tsx` - Retail tenants
    - `LuxurySection.tsx` - Premium brands
    - `DiningSection.tsx` - Dining venues
    - `AttractionsSection.tsx` - Attractions & amenities
    - `EventsSection.tsx` - Events & marketing

- **`/content`** - Content data files
  - `/malls/moa/`
    - `overview.json` - Key metrics and positioning
    - `retail.json` - Retail tenants by category
    - `dining.json` - Dining venues and restaurants
    - `attractions.json` - Major attractions and amenities
    - `events.json` - Event types and marketing benefits

## Design System

### Color Palette (Jewel Tones)
- **Primary**: Deep sapphire (oklch(0.32 0.18 260)) - CTAs, headers
- **Secondary**: Emerald teal (oklch(0.48 0.16 160)) - Accents
- **Accent**: Warm emerald (oklch(0.45 0.15 160)) - Highlights
- **Neutrals**: Clean whites and subtle grays for clarity

### Typography
- **Headers**: Geist Sans (bold, modern)
- **Body**: Geist Sans (regular, readable)
- **Spacing Scale**: Tailwind standard (4px base)

### Layout Principles
- Flexbox-first for responsive design
- Full-width sections with max-width constraints
- Generous whitespace for premium feel
- Mobile-first approach with responsive prefixes

## Key Features

### Phase 1 (Current)
- 7 comprehensive sections covering retail, dining, attractions, and events
- Responsive design with mobile-first approach
- Modular component architecture
- Scroll-triggered fade-in animations
- Interactive category filtering in retail and dining sections
- Premium color scheme with jewel tones

### Phase 2 (Ready for Implementation)
- Deep-dive detail pages for individual tenants/venues
- Leasing inquiry system with form integration
- Sponsorship tier display and packages
- Event registration or ticketing
- Dynamic filtering and search capabilities
- CMS integration for content management

## Development Notes

### Adding New Sections
1. Create component in `/components/sections/`
2. Add content data to `/content/malls/moa/`
3. Import and add to `/app/page.tsx`
4. Update navigation links

### Extending Content
- Modify JSON files in `/content/` to update displayed information
- Content is fully separated from presentation for easy updates
- Add new properties to objects and handle in components as needed

### Styling Guidelines
- Use Tailwind classes exclusively
- Leverage design tokens (CSS variables) for consistency
- Keep components prop-driven for reusability
- Maintain responsive design with md: and lg: prefixes

## Future Enhancements

1. **Image Integration**: Add high-quality photography for hero sections
2. **Video Background**: Cinematic video for opening section
3. **Interactive Map**: Regional accessibility visualization
4. **Data Refresh**: Update metrics with current performance data
5. **CMS Integration**: Connect to headless CMS for dynamic content
6. **Analytics**: Track section engagement and scroll depth
7. **Form Integration**: Leasing and partnership inquiry forms

## Navigation

The page features sticky navigation with smooth scroll links to each section:
- Why MOA - Market positioning
- Retail - Retail showcase
- Luxury - Premium brands
- Dining - Restaurant options
- Attractions - Entertainment venues
- Events - Activations and partnerships

## Build & Deploy

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel deploy
```

## Customization

### Colors
Edit design tokens in `/app/globals.css` `:root` section. Update OKLCH values for immediate brand customization.

### Content
All content is in JSON files under `/content/malls/moa/`. Update these files to change displayed information without touching components.

### Layout
Modify spacing, max-widths, and responsive breakpoints in components using Tailwind's responsive prefixes (sm:, md:, lg:, xl:).
