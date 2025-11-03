import { useState, useEffect } from 'react'

const horoscopeMessages = [
  {
    sign: 'Aries',
    emoji: '♈',
    message: 'Today brings new opportunities for Aries to shine and lead'
  },
  {
    sign: 'Taurus',
    emoji: '♉',
    message: 'Taurus, your patience and persistence will bring rewards'
  },
  {
    sign: 'Gemini',
    emoji: '♊',
    message: 'Gemini, your curiosity opens doors to exciting possibilities'
  },
  {
    sign: 'Cancer',
    emoji: '♋',
    message: 'Cancer, your intuition guides you toward emotional fulfillment'
  },
  {
    sign: 'Leo',
    emoji: '♌',
    message: 'Leo, your natural charisma is lighting up every room today'
  },
  {
    sign: 'Virgo',
    emoji: '♍',
    message: 'Virgo, your attention to detail brings perfection to your endeavors'
  },
  {
    sign: 'Libra',
    emoji: '♎',
    message: 'Libra, balance and harmony grace your relationships today'
  },
  {
    sign: 'Scorpio',
    emoji: '♏',
    message: 'Scorpio, your transformative energy creates powerful positive change'
  },
  {
    sign: 'Sagittarius',
    emoji: '♐',
    message: 'Sagittarius, adventure and expansion await you on your journey'
  },
  {
    sign: 'Capricorn',
    emoji: '♑',
    message: 'Capricorn, your dedication and hard work are paying off beautifully'
  },
  {
    sign: 'Aquarius',
    emoji: '♒',
    message: 'Aquarius, your innovative ideas are about to make a real impact'
  },
  {
    sign: 'Pisces',
    emoji: '♓',
    message: 'Pisces, your compassionate heart brings healing to those around you'
  }
]

function RotatingHoroscopeMessage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current message
      setIsVisible(false)
      
      // After fade out animation completes, change message and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % horoscopeMessages.length)
        setIsVisible(true)
      }, 600) // Match fade-out duration
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentSign = horoscopeMessages[currentIndex]

  return (
    <div className="message-container mb-8 max-w-2xl">
      <div 
        key={currentIndex}
        className={`flex flex-col items-center ${isVisible ? 'message-enter' : 'message-exit'}`}
      >
        {/* Sign name with emoji on top */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
          <span className="text-4xl md:text-5xl text-yellow-400 leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{currentSign.emoji}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">{currentSign.sign}</span>
        </h2>
        {/* Message below */}
        <p className="text-xl md:text-2xl text-purple-200 text-center">
          {currentSign.message}
        </p>
      </div>
    </div>
  )
}

export default RotatingHoroscopeMessage
