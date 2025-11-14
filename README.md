# TRADE BLADE

Platform for automatic copying of professional traders' deals. Modern web application with responsive design, dark theme, and smooth animations.

## 🚀 Technologies

### Core Technologies
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - type safety
- **Tailwind CSS v4** - utility-first styling
- **Framer Motion** - animations and transitions
- **Lucide React** - icons

### Additional Dependencies
- **clsx** - conditional class joining
- **tailwind-merge** - merging Tailwind classes

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Create production build:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 🔍 Linter

Check code:

```bash
npm run lint
```

Auto-fix errors:

```bash
npm run lint:fix
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header and Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and CSS variables
├── components/              # React components
│   ├── AboutCompany/        # "About Company" section
│   ├── Baner/               # Main banner
│   ├── FAQ/                 # FAQ section with accordion
│   ├── Footer/              # Site footer
│   ├── Header/              # Header with navigation
│   │   ├── Header.tsx       # Main header component
│   │   ├── Logo.tsx         # Logo component
│   │   ├── Navigation.tsx   # Navigation menu
│   │   └── MobileMenu.tsx   # Mobile menu with slide animation
│   ├── PastDeals/           # Past deals section
│   │   ├── PastDeals.tsx    # Deals container with auto-scroll
│   │   └── DealCard.tsx     # Individual deal card
│   ├── Stats/               # Statistics section with animated numbers
│   ├── Tariffs/             # Tariffs section
│   │   ├── Tariffs.tsx      # Tariffs container
│   │   ├── TariffCard.tsx   # Tariff card component
│   │   └── TariffToggle.tsx # Tariff type toggle (Spot/Futures)
│   ├── TrialBanner/         # Trial period banner
│   └── ui/                  # UI components
│       ├── Button.tsx       # Button with variants
│       ├── Input.tsx        # Input field
│       ├── InputWithButton.tsx # Input with button combo
│       ├── SectionHeading.tsx  # Section heading component
│       └── DevelopmentMessage.tsx # Development message modal
├── data/                    # Static data
│   ├── deals.ts             # Deals data
│   └── FAQ.tsx              # FAQ data
├── lib/                     # Utilities
│   ├── scroll.ts            # Smooth scroll functions for sections
│   └── utils.ts             # Helper functions (cn utility)
├── public/                  # Static files
│   ├── logo-trade.svg       # Logo
│   ├── logo-bg-trade.png    # Logo with background
│   ├── baner-placeholder.png # Banner placeholder
│   └── favicon.*            # Site icons
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
└── eslint.config.mjs        # ESLint configuration
```

## 🎯 Features

### Navigation System

The site uses single-page navigation with smooth scrolling to sections. Navigation is implemented in two ways:

#### Desktop Navigation
- Fixed header with horizontal navigation menu
- Smooth scroll to sections with offset calculation (header height + 20px)
- Hover effects on navigation links (color transition to cyan `#57E0FF`)
- Section mapping: URLs map to section IDs for scroll targeting

#### Mobile Navigation
- Hamburger menu button (Menu icon from Lucide React)
- Full-screen slide-in menu from right side
- Menu overlay with purple background (`--bg-tertiary`)
- Slide animation: `translate-x-full` to `translate-x-0` with 300ms duration
- Opacity transition: `opacity-0` to `opacity-100` with 300ms duration
- Body scroll lock when menu is open
- Auto-close menu on link click
- Close button (X icon) with hover effect

#### Navigation Links
- **NUMBERS** (`#numbers`) - Statistics section
- **DEALS ONLINE** (`#deals`) - Live deals list
- **ABOUT COMPANY** (`#about`) - Company information
- **HOW TO START** - Under development (shows development message)
- **TARIFFS** (`#tariffs`) - Tariff plans
- **REVIEWS** - Under development (shows development message)
- **FAQ** (`#faq`) - Questions and answers

### Animations & Transitions

#### 1. Statistics Section (Stats Component)
- **Animated Numbers**: Uses Framer Motion's `useSpring` and `useTransform` hooks
  - Numbers animate from 0 to target value when section enters viewport
  - Spring physics: damping: 30, stiffness: 100
  - Triggered by `useInView` hook with `once: true, amount: 0.5`
  - Supports decimals and suffixes (e.g., "2756%", "375000")
- **Section Entrance Animation**:
  - Container slides in from left: `x: -50` to `x: 0` with 600ms duration
  - Opacity fade: `opacity: 0` to `opacity: 1`
  - Easing: `easeOut`
- **Staggered Children Animation**:
  - Stat items animate sequentially with 200ms delay between each
  - Each stat card: `y: 30` to `y: 0` with opacity fade
  - Labels fade in with additional delays (300ms, 500ms, 700ms)

#### 2. Past Deals Section (PastDeals Component)
- **Auto-Scrolling Horizontal List**:
  - Continuous horizontal auto-scroll at 0.5px per frame
  - Infinite loop: duplicates deals array and resets position
  - Pause on user interaction (wheel, touch, mouse down)
  - Auto-resume after 3 seconds of inactivity
  - Pause on hover, resume on mouse leave
- **Card Entrance Animation**:
  - Staggered children: 100ms delay between each card
  - Cards slide in from left: `x: -50` to `x: 0`
  - Scale animation: `scale: 0.9` to `scale: 1`
  - Opacity fade: `opacity: 0` to `opacity: 1`
  - Duration: 400ms with `easeOut` easing
- **Hover Effects**:
  - Scale up on hover: `scale: 1.05`
  - Smooth transition: 200ms duration
  - Applied to individual deal cards

#### 3. Mobile Menu (MobileMenu Component)
- **Slide-In Animation**:
  - Menu slides in from right: `translate-x-full` to `translate-x-0`
  - Duration: 300ms
  - Background: purple (`--bg-tertiary`)
- **Overlay Animation**:
  - Opacity transition: `opacity-0` to `opacity-100`
  - Visibility: `invisible` to `visible`
  - Duration: 300ms
- **Body Scroll Lock**: Prevents background scrolling when menu is open
- **Icon Transitions**: Menu/Close icons have color transition on hover

#### 4. FAQ Section (FAQ Component)
- **Accordion Animation**:
  - Expandable/collapsible items
  - Smooth height transition (CSS `transition-all duration-300`)
  - Background color change: gray to purple on open
  - Text color change: black to white on open
- **Icon Rotation**:
  - Chevron icon rotates 180 degrees when item opens
  - Smooth rotation: `transition-transform duration-300`
  - Default state: `rotate-0`, open state: `rotate-180`

#### 5. Navigation Links
- **Hover Effects**:
  - Color transition: default to cyan (`#57E0FF`)
  - Duration: 200ms
  - Applied to all navigation links

#### 6. Buttons
- **Hover Transitions**:
  - Background color opacity change: `hover:bg-(--button-primary-bg)/90`
  - Duration: 200ms
  - Shadow effects with cyan glow
  - Outline transitions

#### 7. Smooth Scroll Navigation
- **Scroll Behavior**:
  - Smooth scroll to sections using `window.scrollTo({ behavior: 'smooth' })`
  - Offset calculation: accounts for fixed header height + 20px extra offset
  - Prevents default anchor behavior
  - Works with both desktop and mobile navigation

### Main Page Sections

1. **Banner** - Hero section with CTA and trading card preview
2. **Stats** - Animated statistics with numbers counting up
3. **PastDeals** - Auto-scrolling list of past deals in real-time
4. **AboutCompany** - Company information with CTA form
5. **Tariffs** - Tariff plans with Spot/Futures toggle
6. **FAQ** - Expandable questions and answers accordion
7. **TrialBanner** - Trial period banner with registration form

### Responsiveness

- Full responsiveness for mobile, tablet, and desktop
- Mobile menu with slide animation
- Adaptive typography and spacing
- Breakpoints: sm, md, lg, xl, 2xl
- Responsive images with Next.js Image component

### Styling

- Dark theme as primary
- CSS variables for colors and typography
- Custom colors for different sections
- Tailwind CSS v4 with custom utilities
- Custom clip paths for section transitions

## 🎨 Design System

### Colors
- **Backgrounds**: `--bg-primary` (#030718), `--bg-secondary` (#ffffff), `--bg-tertiary` (#6a53ff)
- **Accents**: `--color-cyan` (#57e0ff), `--color-purple` (#6a53ff)
- **Text**: Various shades for dark and light backgrounds
- **Buttons**: Primary cyan (#57e1ff), Secondary purple (#6670ff)

### Typography
- **Font**: IBM Plex Sans - main font (100-700 weight)
- Support for Latin and Cyrillic scripts
- Responsive font sizes across breakpoints

## 🔧 Configuration

### TypeScript
- Strict type checking enabled
- Path aliases: `@/*` → `./*`
- React JSX runtime

### Next.js
- React Strict Mode enabled
- Compression enabled
- Removed `X-Powered-By` header

### ESLint
- Next.js configuration
- Auto-fix capability

## 📝 Components

### UI Components
- `Button` - Buttons with variants (primary, outline, secondary)
- `Input` - Input fields
- `InputWithButton` - Combined input and button component
- `SectionHeading` - Section headings with light/dark variants

### Business Components
- `Stats` - Animated statistics with spring physics
- `PastDeals` - Auto-scrolling deals list with hover effects
- `Tariffs` - Tariff plans with Spot/Futures toggle
- `FAQ` - Accordion with expand/collapse animations

## 🚦 Development Status

Some sections are under development:
- "HOW TO START" section
- "REVIEWS" section

Clicking on these sections displays a development message modal.

## 📄 License

Private project.
