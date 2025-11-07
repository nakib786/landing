import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ZodiacLogo from '../components/ZodiacLogo'
import StarField from '../components/StarField'
import FluidCursorEffect from '../components/ui/smokey-cursor-effect'
import RotatingHoroscopeMessage from '../components/RotatingHoroscopeMessage'
import HamburgerMenu from '../components/HamburgerMenu'
import HoroscopeModal from '../components/HoroscopeModal'
import LoadingScreen from '../components/LoadingScreen'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number; width: number; height: number } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleComingSoonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
      })
    }
    
    setIsAnimating(true)
    
    // Wait for animation to complete before opening modal
    setTimeout(() => {
      setIsModalOpen(true)
      setIsAnimating(false)
    }, 1000)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Reset button position after animation completes
    setTimeout(() => {
      setButtonPosition(null)
    }, 600)
  }

  // Check localStorage after loading screen completes
  useEffect(() => {
    if (!isLoading) {
      // Auto-open only if a saved sign exists
      const savedData = localStorage.getItem('horoscopeUser')
      if (savedData) {
        try {
          const { sign } = JSON.parse(savedData)
          if (sign) {
            setIsModalOpen(true)
          }
        } catch (error) {
          console.error('Error reading saved horoscope data:', error)
        }
      }
    }
  }, [isLoading])

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <FluidCursorEffect minimal />
          
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        {/* Animated star field background */}
        <StarField />
      
        {/* Navigation */}
        <HamburgerMenu />

        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
          {/* Logo with animation */}
          <div className="mb-8 animate-float">
            <ZodiacLogo />
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Horoscope <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">Now</span>
          </h1>
          
          {/* Rotating Horoscope Messages */}
          <RotatingHoroscopeMessage />
          
          {/* Get Your Horoscope Button with Magical Animation */}
          <button
            ref={buttonRef}
            onClick={handleComingSoonClick}
            disabled={isAnimating}
            className={`inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/30 mb-8 animate-glow cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 group relative overflow-hidden ${
              isAnimating ? 'magical-burst' : ''
            } ${isModalOpen ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <p className="text-2xl md:text-3xl font-semibold text-white relative z-10">
              🔮 Get Your Horoscope 🔮
            </p>
            
            {/* Magical particles effect */}
            {isAnimating && (
              <>
                <div className="magical-particle particle-1"></div>
                <div className="magical-particle particle-2"></div>
                <div className="magical-particle particle-3"></div>
                <div className="magical-particle particle-4"></div>
                <div className="magical-particle particle-5"></div>
                <div className="magical-particle particle-6"></div>
                <div className="magical-particle particle-7"></div>
                <div className="magical-particle particle-8"></div>
              </>
            )}
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
            </div>
          </button>
          
          {/* Blog Button */}
          <Link 
            to="/blog" 
            className="inline-block px-8 py-4 md:px-12 md:py-5 mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-500 hover:via-pink-400 hover:to-purple-500 rounded-full border-2 border-white/40 text-white text-xl md:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 animate-pulse hover:animate-none relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>✨</span>
              <span>Discover Your Stars</span>
              <span>→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </Link>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 animate-card-glow card-glow-hover">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold text-white mb-2">Daily Insights</h3>
              <p className="text-sm text-purple-200">Personalized horoscopes updated daily</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 animate-card-glow card-glow-hover">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-white mb-2">All Zodiac Signs</h3>
              <p className="text-sm text-purple-200">Coverage for every astrological sign</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 animate-card-glow card-glow-hover">
              <div className="text-4xl mb-3">💫</div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Free</h3>
              <p className="text-sm text-purple-200">No login, no payment required</p>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="absolute bottom-0 w-full py-6 text-center text-purple-200 text-sm z-10">
          <p>© FreeHoroscopeNow.com | Built with ❤️ for the stars</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="text-purple-300 hover:text-purple-200 underline transition-colors">
              Privacy Policy
            </Link>
          </p>
        </footer>
      </div>

          {/* Horoscope Modal */}
          <HoroscopeModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal}
            buttonPosition={buttonPosition}
          />
        </>
      )}
    </>
  )
}

export default Home

