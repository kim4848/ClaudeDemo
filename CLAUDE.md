# CLAUDE.md - AI Assistant Guide for ClaudeDemo

This document provides comprehensive guidance for AI assistants working with this codebase.

## Project Overview

**Casa Mil Palmeras** - A vacation rental marketing website for a holiday home in Mil Palmeras, Spain. The site is a single-page React application featuring property information, amenities, location details, and a booking form. Content is in Danish.

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 19.2.0 |
| Language | TypeScript | 5.9.3 |
| Build Tool | Vite | 7.2.4 |
| Styling | CSS3 with Custom Properties | - |
| Linting | ESLint | 9.39.1 |

**Key Points:**
- Pure React with no UI frameworks (no Tailwind, Bootstrap, or Material UI)
- Functional components only - no class components
- Stateless components - no hooks (useState, useEffect) currently used
- ES modules (`"type": "module"` in package.json)
- Strict TypeScript configuration enabled

## Directory Structure

```
ClaudeDemo/
├── src/
│   ├── components/           # React components with paired CSS
│   │   ├── Header.tsx/css    # Fixed navigation, glassmorphism design
│   │   ├── Hero.tsx/css      # Full-height hero with animated shapes
│   │   ├── Services.tsx/css  # Features/amenities grid
│   │   ├── About.tsx/css     # Location info with map
│   │   ├── Contact.tsx/css   # Booking form + contact cards
│   │   └── Footer.tsx/css    # Navigation footer
│   ├── assets/               # SVG assets
│   ├── App.tsx               # Main app component (composes all sections)
│   ├── App.css               # App-level styles
│   ├── index.css             # Global styles, CSS variables, resets
│   └── main.tsx              # Entry point (React root)
├── public/                   # Static assets
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config (references app/node)
├── tsconfig.app.json         # App TypeScript settings
├── tsconfig.node.json        # Node/build TypeScript settings
└── eslint.config.js          # ESLint flat config
```

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production (type-check + bundle)
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Code Conventions

### React Components

- **Functional components only** - Use `function ComponentName() {}` syntax
- **Default exports** - Each component exported as default
- **No props typing needed** - Components currently receive no props
- **Semantic HTML** - Use proper elements (header, main, section, footer, nav)
- **Component composition** - App.tsx composes all page sections

```tsx
// Component pattern used in this codebase
import './ComponentName.css'

function ComponentName() {
  return (
    <section className="component-name">
      {/* Content */}
    </section>
  )
}

export default ComponentName
```

### TypeScript

- **Strict mode enabled** - All strict checks active
- **Type inference preferred** - Rely on inference over explicit annotations
- **No unused variables/parameters** - Enforced by tsconfig
- **ES2022 target** - Modern JavaScript features available

### CSS Conventions

**File Organization:**
- Each component has a paired `.css` file (e.g., `Hero.tsx` + `Hero.css`)
- Global styles and CSS variables defined in `index.css`

**Naming:**
- **kebab-case** for class names: `.hero-content`, `.service-card`
- **BEM-like** patterns for nested elements: `.hero-container`, `.hero-title`

**CSS Variables (defined in index.css):**
```css
/* Colors */
--color-primary, --color-secondary, --color-accent, --color-purple

/* Backgrounds */
--bg-primary, --bg-secondary, --bg-neutral, --bg-warm, --bg-cool

/* Text */
--text-primary, --text-secondary, --text-muted

/* Effects */
--gradient-primary, --gradient-warm, --glass-bg, --glass-border

/* Shadows */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl, --shadow-glow

/* Border Radius */
--radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full

/* Transitions */
--transition-fast (150ms), --transition-base (250ms), --transition-slow (400ms)
```

**Styling Patterns:**
- **Glassmorphism** - Uses `backdrop-filter: blur()` for glass effects
- **Container pattern** - `max-width: 1200px; margin: 0 auto; padding: 0 2rem;`
- **Responsive typography** - Uses `clamp()` for fluid sizing
- **Section spacing** - Large vertical padding: `padding: 120px 2rem;`
- **CSS Grid/Flexbox** - Modern layout techniques
- **Mobile-first** - Responsive design with `@media` breakpoints

### Data Patterns

Services/features use array mapping:
```tsx
const features = [
  { icon: '🏖️', title: 'Title', description: 'Description' },
  // ...
]

{features.map((feature, index) => (
  <div key={index} className="feature-card">
    {/* Render feature */}
  </div>
))}
```

## Component Architecture

```
App
├── Header       # Fixed nav, logo, menu links, CTA button
├── main
│   ├── Hero     # Hero section with background shapes, feature cards
│   ├── Services # Amenities grid with icon cards
│   ├── About    # Location section with embedded map
│   └── Contact  # Booking form with contact info cards
└── Footer       # Site footer with nav and copyright
```

**Navigation sections:**
- `#hjem` (home) - Hero
- `#faciliteter` (facilities) - Services
- `#beliggenhed` (location) - About
- `#kontakt` (contact) - Contact

## Configuration Details

### Vite (vite.config.ts)
- Minimal config with React plugin
- HMR enabled by default
- React Compiler not enabled

### TypeScript
- **App code**: ES2022 target, react-jsx transform, bundler resolution
- **Node/config**: ES2023 target for build tools
- **Strict checks**: noUnusedLocals, noUnusedParameters, noFallthroughCasesInSwitch

### ESLint (flat config format)
- JavaScript recommended rules
- TypeScript recommended rules
- React Hooks rules
- React Refresh rules for Vite compatibility

## Common Tasks for AI Assistants

### Adding a New Component

1. Create `src/components/ComponentName.tsx`
2. Create `src/components/ComponentName.css`
3. Import and add to `App.tsx`
4. Follow existing patterns for styling

### Modifying Styles

1. Check `src/index.css` for available CSS variables
2. Use existing variables for consistency
3. Follow kebab-case naming for new classes
4. Add responsive styles with media queries

### Adding Interactivity

The codebase currently has no state management. To add:
1. Import hooks: `import { useState, useEffect } from 'react'`
2. Add state to the relevant component
3. Consider if state should be lifted to App.tsx

### Form Handling

The Contact form is currently display-only. To add submission:
1. Add `onSubmit` handler to the form
2. Implement state for form fields
3. Add validation as needed

## Testing

**Current State:** No testing infrastructure exists.

**Recommended Setup (if needed):**
- Vitest for unit/integration tests
- React Testing Library for component tests
- Playwright for E2E tests

## Git Workflow

- **Current branch pattern**: `claude/<feature-name>-<id>`
- **Commits**: Clear, descriptive messages
- **Push**: Always use `git push -u origin <branch-name>`

## Important Notes

1. **No external runtime dependencies** - Only React and ReactDOM
2. **Danish content** - Site content is in Danish (da language)
3. **SEO optimized** - Semantic HTML, meta tags present
4. **Responsive** - Mobile-first with breakpoints
5. **Clean codebase** - ~1,621 lines, well-organized
6. **Fast iteration** - Vite HMR for quick development

## File Quick Reference

| File | Purpose |
|------|---------|
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Main component composition |
| `src/index.css` | Global styles + CSS variables |
| `index.html` | HTML template with meta tags |
| `vite.config.ts` | Build configuration |
| `tsconfig.app.json` | App TypeScript settings |

---

*Last updated: 2026-02-03*
