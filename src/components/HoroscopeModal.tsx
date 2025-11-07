import { useState, useEffect } from 'react'

interface HoroscopeModalProps {
  isOpen: boolean
  onClose: () => void
  buttonPosition: { x: number; y: number; width: number; height: number } | null
}

const zodiacSigns = [
  { 
    name: 'Aries', 
    emoji: '♈', 
    dates: 'Mar 21 - Apr 19',
    gradient: 'from-red-900/95 via-orange-900/95 to-amber-900/95',
    element: 'Fire'
  },
  { 
    name: 'Taurus', 
    emoji: '♉', 
    dates: 'Apr 20 - May 20',
    gradient: 'from-emerald-900/95 via-green-800/95 to-teal-900/95',
    element: 'Earth'
  },
  { 
    name: 'Gemini', 
    emoji: '♊', 
    dates: 'May 21 - Jun 20',
    gradient: 'from-yellow-800/95 via-amber-800/95 to-orange-800/95',
    element: 'Air'
  },
  { 
    name: 'Cancer', 
    emoji: '♋', 
    dates: 'Jun 21 - Jul 22',
    gradient: 'from-slate-800/95 via-gray-800/95 to-zinc-800/95',
    element: 'Water'
  },
  { 
    name: 'Leo', 
    emoji: '♌', 
    dates: 'Jul 23 - Aug 22',
    gradient: 'from-yellow-700/95 via-orange-700/95 to-red-800/95',
    element: 'Fire'
  },
  { 
    name: 'Virgo', 
    emoji: '♍', 
    dates: 'Aug 23 - Sep 22',
    gradient: 'from-stone-800/95 via-amber-900/95 to-yellow-900/95',
    element: 'Earth'
  },
  { 
    name: 'Libra', 
    emoji: '♎', 
    dates: 'Sep 23 - Oct 22',
    gradient: 'from-pink-800/95 via-rose-800/95 to-fuchsia-900/95',
    element: 'Air'
  },
  { 
    name: 'Scorpio', 
    emoji: '♏', 
    dates: 'Oct 23 - Nov 21',
    gradient: 'from-red-950/95 via-rose-950/95 to-black/95',
    element: 'Water'
  },
  { 
    name: 'Sagittarius', 
    emoji: '♐', 
    dates: 'Nov 22 - Dec 21',
    gradient: 'from-purple-800/95 via-violet-800/95 to-indigo-900/95',
    element: 'Fire'
  },
  { 
    name: 'Capricorn', 
    emoji: '♑', 
    dates: 'Dec 22 - Jan 19',
    gradient: 'from-gray-900/95 via-slate-900/95 to-stone-950/95',
    element: 'Earth'
  },
  { 
    name: 'Aquarius', 
    emoji: '♒', 
    dates: 'Jan 20 - Feb 18',
    gradient: 'from-cyan-800/95 via-blue-800/95 to-indigo-900/95',
    element: 'Air'
  },
  { 
    name: 'Pisces', 
    emoji: '♓', 
    dates: 'Feb 19 - Mar 20',
    gradient: 'from-blue-900/95 via-purple-900/95 to-indigo-950/95',
    element: 'Water'
  },
]

// 30 random horoscope predictions for each sign (scrambled)
const horoscopePredictions = [
  "A surprising opportunity will knock on your door today.",
  "Your creative energy is at an all-time high this week.",
  "An old friend may reach out with exciting news.",
  "Financial luck favors bold decisions right now.",
  "Romance is in the air - keep your heart open.",
  "A challenging situation will reveal your true strength.",
  "Trust your intuition when making important choices.",
  "A journey, near or far, will bring new perspectives.",
  "Your patience will be tested but ultimately rewarded.",
  "An unexpected gift or compliment will brighten your day.",
  "Focus on self-care and wellness this week.",
  "A professional breakthrough is on the horizon.",
  "Someone from your past may reappear in your life.",
  "Your charm and wit will open doors for you.",
  "A small act of kindness will have ripple effects.",
  "Be cautious with impulsive spending decisions.",
  "Your hard work is about to pay off significantly.",
  "A family matter requires your attention and wisdom.",
  "New learning opportunities will expand your horizons.",
  "Your artistic talents deserve more recognition.",
  "A period of emotional healing is beginning.",
  "Leadership opportunities will present themselves.",
  "Your social circle is expanding in positive ways.",
  "A health-related goal is within your reach.",
  "Trust in the timing of your life's events.",
  "Your unique perspective will solve a complex problem.",
  "Collaborations will be more fruitful than solo efforts.",
  "A long-held dream is closer to reality than you think.",
  "Your generosity will return to you multiplied.",
  "Embrace change - it's leading you somewhere wonderful.",
]

function getZodiacFromDate(dateStr: string): string {
  const date = new Date(dateStr)
  const month = date.getMonth() + 1
  const day = date.getDate()

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius'
  return 'Pisces'
}

function getHoroscopeForSign(sign: string, date: string): string[] {
  // Create a seed from sign + date for consistent daily horoscopes
  const seed = sign + date
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash = hash & hash
  }

  // Shuffle predictions based on the seed
  const shuffled = [...horoscopePredictions]
  const random = (seed: number) => {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random(hash + i) * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Return 5 predictions for the day
  return shuffled.slice(0, 5)
}

export default function HoroscopeModal({ isOpen, onClose, buttonPosition }: HoroscopeModalProps) {
  const [step, setStep] = useState<'input' | 'result'>('input')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [selectedSign, setSelectedSign] = useState('')
  const [horoscope, setHoroscope] = useState<string[]>([])
  const [showContent, setShowContent] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false)
      
      // Lock body scroll and scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.body.style.overflow = 'hidden'
      
      // Check if user data exists in localStorage
      const savedData = localStorage.getItem('horoscopeUser')
      if (savedData) {
        const { dateOfBirth, sign, lastVisit } = JSON.parse(savedData)
        const today = new Date().toDateString()
        
        if (lastVisit === today) {
          // Show saved horoscope
          setDateOfBirth(dateOfBirth)
          setSelectedSign(sign)
          const today = new Date().toISOString().split('T')[0]
          setHoroscope(getHoroscopeForSign(sign, today))
          setStep('result')
        }
      }
      
      // Delay content for animation
      setTimeout(() => setShowContent(true), 500)
    } else {
      setShowContent(false)
      setIsClosing(true)
      document.body.style.overflow = ''
      
      setTimeout(() => {
        setStep('input')
        setDateOfBirth('')
        setSelectedSign('')
        setHoroscope([])
        setIsClosing(false)
      }, 600)
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setShowContent(false)
    setTimeout(() => {
      onClose()
    }, 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Either sign or date of birth is required
    let finalSign = selectedSign
    
    // If date of birth is provided but no sign, calculate from date
    if (!finalSign && dateOfBirth) {
      finalSign = getZodiacFromDate(dateOfBirth)
    }
    
    if (!finalSign) return

    // Get today's date for consistent daily horoscope
    const today = new Date().toISOString().split('T')[0]
    const predictions = getHoroscopeForSign(finalSign, today)
    setHoroscope(predictions)

    // Save to localStorage
    localStorage.setItem('horoscopeUser', JSON.stringify({
      dateOfBirth: dateOfBirth || '',
      sign: finalSign,
      lastVisit: new Date().toDateString()
    }))

    setSelectedSign(finalSign)
    setStep('result')
  }

  const handleNewReading = () => {
    localStorage.removeItem('horoscopeUser')
    setStep('input')
    setDateOfBirth('')
    setSelectedSign('')
    setHoroscope([])
  }

  if (!isOpen && !isClosing) return null

  // Calculate zodiac from date if provided but sign not selected
  let displaySign = selectedSign
  if (!displaySign && dateOfBirth) {
    displaySign = getZodiacFromDate(dateOfBirth)
  }

  const currentZodiac = zodiacSigns.find(z => z.name === displaySign)
  
  // Get the gradient for the current zodiac sign or default
  const modalGradient = currentZodiac?.gradient || 'from-purple-900/95 via-indigo-900/95 to-pink-900/95'

  // Get scrollbar colors based on zodiac sign
  const getScrollbarColors = () => {
    if (!currentZodiac) return { thumb: 'rgba(255,255,255,0.3)', track: 'transparent' }
    
    const colorMap: Record<string, { thumb: string; track: string }> = {
      'Aries': { thumb: 'rgba(239, 68, 68, 0.6)', track: 'rgba(239, 68, 68, 0.1)' },
      'Taurus': { thumb: 'rgba(16, 185, 129, 0.6)', track: 'rgba(16, 185, 129, 0.1)' },
      'Gemini': { thumb: 'rgba(234, 179, 8, 0.6)', track: 'rgba(234, 179, 8, 0.1)' },
      'Cancer': { thumb: 'rgba(148, 163, 184, 0.6)', track: 'rgba(148, 163, 184, 0.1)' },
      'Leo': { thumb: 'rgba(234, 179, 8, 0.6)', track: 'rgba(234, 179, 8, 0.1)' },
      'Virgo': { thumb: 'rgba(217, 119, 6, 0.6)', track: 'rgba(217, 119, 6, 0.1)' },
      'Libra': { thumb: 'rgba(236, 72, 153, 0.6)', track: 'rgba(236, 72, 153, 0.1)' },
      'Scorpio': { thumb: 'rgba(127, 29, 29, 0.6)', track: 'rgba(127, 29, 29, 0.1)' },
      'Sagittarius': { thumb: 'rgba(139, 92, 246, 0.6)', track: 'rgba(139, 92, 246, 0.1)' },
      'Capricorn': { thumb: 'rgba(107, 114, 128, 0.6)', track: 'rgba(107, 114, 128, 0.1)' },
      'Aquarius': { thumb: 'rgba(14, 165, 233, 0.6)', track: 'rgba(14, 165, 233, 0.1)' },
      'Pisces': { thumb: 'rgba(59, 130, 246, 0.6)', track: 'rgba(59, 130, 246, 0.1)' },
    }
    
    return colorMap[currentZodiac.name] || { thumb: 'rgba(255,255,255,0.3)', track: 'transparent' }
  }

  const scrollbarColors = getScrollbarColors()

  // Calculate transform origin based on button position
  const getModalStyle = (): React.CSSProperties => {
    if (!buttonPosition) return {}
    
    // Calculate offset from center of viewport
    const viewportCenterX = window.innerWidth / 2
    const viewportCenterY = window.innerHeight / 2
    
    // Calculate the offset from modal center to button position
    const offsetX = buttonPosition.x - viewportCenterX
    const offsetY = buttonPosition.y - viewportCenterY
    
    return {
      transformOrigin: `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`,
    }
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-12 md:pt-16 p-4 transition-all duration-500 overflow-hidden ${
        isOpen && showContent ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
      }`}
      onClick={handleClose}
      style={{ pointerEvents: isOpen || isClosing ? 'auto' : 'none' }}
    >
      {/* Large Zodiac Background Symbol */}
      {currentZodiac && isOpen && (
        <div 
          className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-all duration-700 ${
            showContent ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div 
            className="text-[25rem] sm:text-[35rem] md:text-[45rem] leading-none select-none text-white/30"
            style={{
              filter: 'blur(1px)',
              textShadow: '0 0 150px rgba(255,255,255,0.2)',
            }}
          >
            {currentZodiac.emoji}
          </div>
        </div>
      )}
      <div 
        className={`relative z-10 bg-gradient-to-br ${modalGradient} rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] border-2 border-white/30 modal-morph flex flex-col transition-all duration-700 ${
          isOpen && showContent ? 'modal-expanded' : isClosing ? 'modal-collapsed overflow-hidden' : 'modal-initial overflow-hidden'
        }`}
        style={getModalStyle()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className={`absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-bold z-10 hover:rotate-90 transition-all duration-300 ${
            showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Close"
        >
          ×
        </button>

        {step === 'input' ? (
          <div 
            className={`flex-1 overflow-y-auto p-8 md:p-12 transition-opacity duration-300 custom-scrollbar ${showContent ? 'opacity-100' : 'opacity-0'}`}
            style={{
              '--scrollbar-thumb': scrollbarColors.thumb,
              '--scrollbar-track': scrollbarColors.track,
            } as React.CSSProperties}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
                ✨ Discover Your Cosmic Path ✨
              </h2>
              <p className="text-white/80 text-lg mb-2">
                Enter your zodiac sign <span className="text-white font-semibold">OR</span> date of birth
              </p>
              <p className="text-white/60 text-sm">
                (We only need one to show your daily horoscope)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="zodiac" className="block text-white font-semibold mb-3 text-lg">
                  ⭐ Your Zodiac Sign
                </label>
                <select
                  id="zodiac"
                  value={selectedSign}
                  onChange={(e) => {
                    setSelectedSign(e.target.value)
                    // Clear date if sign is selected
                    if (e.target.value) {
                      setDateOfBirth('')
                    }
                  }}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white text-lg focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-all backdrop-blur-sm cursor-pointer hover:bg-white/15"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                    appearance: 'none'
                  }}
                >
                  <option value="">Select your zodiac sign (optional)</option>
                  {zodiacSigns.map((sign) => (
                    <option key={sign.name} value={sign.name} className="bg-purple-900 text-white">
                      {sign.emoji} {sign.name} ({sign.dates})
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-4 bg-gradient-to-br ${modalGradient} text-white/80 font-semibold`}>
                    OR
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="dob" className="block text-white font-semibold mb-3 text-lg">
                  🎂 Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value)
                    // Clear sign if date is selected
                    if (e.target.value) {
                      setSelectedSign('')
                    }
                  }}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white text-lg focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-all backdrop-blur-sm hover:bg-white/15"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={!selectedSign && !dateOfBirth}
                className="w-full py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white/40 hover:border-white/60 text-white text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/20"
              >
                🔮 Reveal My Horoscope
              </button>
            </form>

            {/* Privacy Notice */}
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-xs text-white/80 text-center leading-relaxed">
                🔒 <strong className="text-white">Your Privacy Matters:</strong> No data is sent to any server. Everything is processed locally in your browser using localStorage. 
                These predictions are for entertainment purposes only and are based on astrological interpretations. 
                They should not be considered as professional advice of any kind.
              </p>
            </div>
          </div>
        ) : (
          <div 
            className={`flex-1 overflow-y-auto p-8 md:p-12 transition-opacity duration-300 custom-scrollbar ${showContent ? 'opacity-100' : 'opacity-0'}`}
            style={{
              '--scrollbar-thumb': scrollbarColors.thumb,
              '--scrollbar-track': scrollbarColors.track,
            } as React.CSSProperties}
          >
            <div className="text-center mb-8">
              <div className="text-7xl mb-4 animate-bounce drop-shadow-2xl">
                {currentZodiac?.emoji}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {selectedSign}
              </h2>
              <p className="text-white/80 text-lg mb-3">
                {currentZodiac?.dates}
              </p>
              
              {/* Element Badge */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40">
                  <p className="text-white font-semibold text-sm">
                    {currentZodiac?.element} Element
                  </p>
                </div>
                <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40">
                  <p className="text-white font-semibold text-sm">
                    Today's Reading
                  </p>
                </div>
              </div>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
                <span className="text-white/60 text-2xl">✨</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {horoscope.map((prediction, index) => (
                <div
                  key={index}
                  className="p-5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 animate-fade-in shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                      <span className="text-xl">⭐</span>
                    </div>
                    <p className="text-white text-lg leading-relaxed flex-1 font-medium">
                      {prediction}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNewReading}
              className="w-full py-4 bg-gradient-to-r from-white/25 via-white/20 to-white/25 hover:from-white/35 hover:via-white/30 hover:to-white/35 border-2 border-white/50 hover:border-white/70 text-white text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-white/20 mb-6 backdrop-blur-md"
            >
              ✨ Start Fresh Reading ✨
            </button>

            {/* Privacy Notice */}
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-xs text-white/80 text-center leading-relaxed">
                🔒 <strong className="text-white">Privacy First:</strong> All data stays on your device. These are astrological predictions for entertainment only and should not replace professional advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

