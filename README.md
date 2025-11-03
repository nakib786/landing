# FreeHoroscopeNow.com - Coming Soon Page

A beautiful, responsive "Coming Soon" landing page for FreeHoroscopeNow.com built with Vite.js, React, and Tailwind CSS.

## Features

- ⚡ **Vite.js** - Lightning-fast development and build
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS v4** - Utility-first CSS with the latest Vite plugin
- 🌟 **Animated Background** - Beautiful space-themed background with twinkling stars
- 🔮 **Custom SVG Logo** - Animated zodiac wheel logo
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 🚀 **Vercel Ready** - Configured for seamless deployment
- 📲 **PWA Support** - Progressive Web App support for Android and iOS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Click "Deploy"

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ZodiacLogo.jsx    # Animated zodiac wheel SVG
│   │   └── StarField.jsx      # Twinkling stars background
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React entry point
│   └── style.css              # Tailwind imports & custom animations
├── index.html                 # HTML template with SEO meta tags
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── vercel.json                # Vercel deployment configuration
```

## PWA (Progressive Web App) Support

This app is configured as a Progressive Web App with support for Android and iOS:

### Features
- **Installable** - Users can install the app on their home screen
- **Offline Support** - Service worker caches assets for offline access
- **App-like Experience** - Standalone display mode on mobile devices
- **Auto-updates** - Service worker automatically updates in the background

### Required Icon Files

To complete PWA setup, you need to add the following icon files to the `public/` directory:

- `pwa-64x64.png` - 64x64px icon
- `pwa-192x192.png` - 192x192px icon (standard Android icon)
- `pwa-512x512.png` - 512x512px icon (standard Android icon)
- `maskable-icon-512x512.png` - 512x512px maskable icon (Android adaptive icons)
- `apple-touch-icon.png` - 180x180px icon for iOS (standard)
- `apple-touch-icon-180x180.png` - 180x180px icon for iOS (explicit)

**Icon Generation Tips:**
- Use a tool like [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) or [RealFaviconGenerator](https://realfavicongenerator.net/)
- Ensure icons have proper padding for maskable icons (safe area)
- Icons should represent your brand/horoscope theme

### Testing PWA
- **Android Chrome**: Open the site, tap menu → "Add to Home screen"
- **iOS Safari**: Open the site, tap Share → "Add to Home Screen"
- The app will work offline after the first visit (service worker caches assets)

## SEO

The page includes comprehensive SEO meta tags:

- Title and description
- Keywords
- Open Graph tags for social media
- Twitter Card tags

## Technologies

- [Vite](https://vite.dev/) - Build tool
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## License

© FreeHoroscopeNow.com | Built with ❤️ for the stars

