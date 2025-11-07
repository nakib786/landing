/**
 * EXAMPLE USAGE - Smokey Cursor Effect
 * 
 * This file shows different ways to use the FluidCursorEffect component
 */

import FluidCursorEffect from "@/components/ui/smokey-cursor-effect";
import ZodiacLogo from './components/ZodiacLogo'
import StarField from './components/StarField'

// ═══════════════════════════════════════════════════════════
// EXAMPLE 1: Full Page Effect (Simplest)
// ═══════════════════════════════════════════════════════════

export function Example1_FullPage() {
  return <FluidCursorEffect />;
}


// ═══════════════════════════════════════════════════════════
// EXAMPLE 2: Background Effect with Your Content
// ═══════════════════════════════════════════════════════════

export function Example2_WithContent() {
  return (
    <div className="relative min-h-screen">
      {/* Smokey cursor effect as background */}
      <FluidCursorEffect />
      
      {/* Your content on top */}
      <div className="relative z-20 p-8">
        <h1 className="text-4xl text-white font-bold mb-4">
          My Awesome Website
        </h1>
        <p className="text-white/80">
          Move your mouse to see the fluid effect!
        </p>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// EXAMPLE 3: Combined with Your Existing Components
// ═══════════════════════════════════════════════════════════

export function Example3_WithExistingComponents() {
  return (
    <div className="relative min-h-screen">
      {/* Smokey cursor effect layer */}
      <div className="fixed inset-0 z-0">
        <FluidCursorEffect />
      </div>
      
      {/* Your existing star field */}
      <div className="fixed inset-0 z-10">
        <StarField />
      </div>
      
      {/* Your content layer */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        <ZodiacLogo />
        <h1 className="text-white text-5xl font-bold mt-8">
          Horoscope Now
        </h1>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// EXAMPLE 4: Partial Page Section
// ═══════════════════════════════════════════════════════════

export function Example4_PartialSection() {
  return (
    <div>
      {/* Regular content */}
      <header className="bg-gray-900 text-white p-6">
        <h1>My Website Header</h1>
      </header>
      
      {/* Section with smokey effect */}
      <section className="relative h-screen overflow-hidden">
        <FluidCursorEffect />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-4xl">Hero Section</h2>
        </div>
      </section>
      
      {/* More regular content */}
      <section className="bg-white p-12">
        <p>More content below...</p>
      </section>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// HOW TO USE THESE EXAMPLES
// ═══════════════════════════════════════════════════════════

/**
 * TO USE ANY EXAMPLE:
 * 
 * 1. Open src/main.tsx
 * 
 * 2. Import the example you want:
 *    import { Example1_FullPage } from './EXAMPLE_USAGE'
 * 
 * 3. Use it in ReactDOM.createRoot:
 *    ReactDOM.createRoot(document.getElementById('root')!).render(
 *      <React.StrictMode>
 *        <Example1_FullPage />
 *      </React.StrictMode>,
 *    )
 * 
 * 4. Run: npm run dev
 * 
 * 5. Move your mouse and enjoy! 🎉
 */

// ═══════════════════════════════════════════════════════════
// CUSTOMIZATION TIPS
// ═══════════════════════════════════════════════════════════

/**
 * To customize the effect, edit:
 * src/components/ui/smokey-cursor-effect.tsx
 * 
 * Change the config object values:
 * - DENSITY_DISSIPATION: How fast smoke fades (lower = lasts longer)
 * - SPLAT_FORCE: Force of mouse movement (higher = bigger effect)
 * - CURL: Vorticity strength (higher = more swirly)
 * - COLOR_UPDATE_SPEED: How fast colors change
 * 
 * Or modify generateColor() function to change color palette!
 */





