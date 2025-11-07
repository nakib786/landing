import { useEffect, useState } from 'react'

const zodiacSigns = [
  { name: 'Aries', emoji: '♈' },
  { name: 'Taurus', emoji: '♉' },
  { name: 'Gemini', emoji: '♊' },
  { name: 'Cancer', emoji: '♋' },
  { name: 'Leo', emoji: '♌' },
  { name: 'Virgo', emoji: '♍' },
  { name: 'Libra', emoji: '♎' },
  { name: 'Scorpio', emoji: '♏' },
  { name: 'Sagittarius', emoji: '♐' },
  { name: 'Capricorn', emoji: '♑' },
  { name: 'Aquarius', emoji: '♒' },
  { name: 'Pisces', emoji: '♓' },
]

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after brief delay
    setTimeout(() => setShowContent(true), 100)
    
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete()
      }, 500) // Wait for fade out animation
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return null
  }

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #1e1b4b 0%, #581c87 50%, #831843 100%)',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="loading-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Rotating rings */}
      <div className="absolute w-[500px] h-[500px] border-2 border-purple-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute w-[600px] h-[600px] border-2 border-pink-500/20 rounded-full animate-spin-slower"></div>
      
      {/* Animated Zodiac Circle */}
      <div className={`relative w-[450px] h-[450px] transition-all duration-700 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        {zodiacSigns.map((sign, index) => {
          const angle = (index * 360) / zodiacSigns.length
          
          return (
            <div
              key={sign.name}
              className="absolute zodiac-orbiter-enhanced"
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${index * 0.15}s`,
              } as React.CSSProperties}
            >
              <div className="zodiac-sign-enhanced">
                <div className="zodiac-glow"></div>
                <span className="relative z-10">{sign.emoji}</span>
              </div>
            </div>
          )
        })}
        
        {/* Center Logo/Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-50"></div>
              <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider">
                <span className="inline-block animate-float">H</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.1s' }}>o</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.2s' }}>r</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.3s' }}>o</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.4s' }}>s</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.5s' }}>c</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.6s' }}>o</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.7s' }}>p</span>
                <span className="inline-block animate-float" style={{ animationDelay: '0.8s' }}>e</span>
              </h1>
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 font-semibold animate-pulse">
                Your Cosmic Journey Begins
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full loading-dot" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full loading-dot" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full loading-dot" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

