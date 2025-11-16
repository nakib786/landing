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

  // SEO-optimized FAQ content
  const faqItems = [
    {
      question: 'How can I get my free daily horoscope?',
      answer: 'Simply click the "Get Your Horoscope" button on our homepage, select your zodiac sign or enter your date of birth, and receive your personalized daily horoscope instantly. No registration or payment required.'
    },
    {
      question: 'What zodiac signs do you provide horoscopes for?',
      answer: 'We provide daily horoscopes for all 12 zodiac signs: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces.'
    },
    {
      question: 'Do I need to create an account to read my horoscope?',
      answer: 'No account is needed. FreeHoroscopeNow.com is completely free with no login required. You can optionally save your zodiac sign locally in your browser for faster access next time.'
    },
    {
      question: 'How accurate are daily horoscopes?',
      answer: 'Our horoscopes are based on traditional astrological interpretations and are designed for entertainment and self-reflection. While many users find them insightful and relatable, they should be viewed as guidance rather than definitive predictions.'
    },
    {
      question: 'How do I know my zodiac sign from my birth date?',
      answer: 'Each zodiac sign corresponds to specific date ranges. If you enter your date of birth in our horoscope modal, our system will automatically calculate and display your correct zodiac sign.'
    },
    {
      question: 'Is my personal information stored or shared?',
      answer: 'No. We prioritize your privacy. Your zodiac sign and birth date (if saved) are stored only in your browser using localStorage and never sent to any server. You can clear this data at any time.'
    },
    {
      question: 'Can I read horoscopes on my mobile phone?',
      answer: 'Yes! FreeHoroscopeNow.com is fully optimized for mobile devices, tablets, and desktops. You can check your daily horoscope anywhere, anytime on any device.'
    },
    {
      question: 'How often are horoscopes updated?',
      answer: 'Our horoscopes are updated daily to provide you with fresh, relevant insights based on current astrological alignments. Visit us each day for your latest cosmic guidance.'
    }
  ]

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
          
          <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        {/* Animated star field background */}
        <StarField />
      
        {/* Navigation */}
        <HamburgerMenu />

        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center flex-grow">
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
            className={`inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/30 mb-8 animate-glow cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 group relative overflow-hidden ${
              isAnimating ? 'magical-burst' : ''
            } ${isModalOpen ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white relative z-10">
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
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-12 lg:py-5 mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-500 hover:via-pink-400 hover:to-purple-500 rounded-full border-2 border-white/40 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 animate-pulse hover:animate-none relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
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

        {/* FAQ Section - SEO Optimized for Search Engines & AI Models */}
        <section className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-8 pt-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-purple-200 text-center mb-8 text-sm md:text-base">
              Everything you need to know about free daily horoscopes
            </p>
            
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 md:p-5 open:bg-white/10 transition-all duration-300 hover:border-white/30"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-3 md:gap-4">
                    <h3 className="text-white text-base md:text-lg font-semibold leading-relaxed flex-1">
                      {item.question}
                    </h3>
                    <span className="text-white/70 group-open:rotate-45 transition-transform text-2xl leading-none flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="mt-3 md:mt-4 text-purple-100 text-sm md:text-base leading-relaxed pr-8">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Schema.org FAQPage Structured Data for SEO & AI */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqItems.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: item.answer
                    }
                  }))
                })
              }}
            />
          </div>
        </section>
        
        {/* Footer */}
        <footer className="relative z-10 w-full py-8 mt-auto text-center text-purple-200 text-sm">
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

