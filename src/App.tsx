import ZodiacLogo from './components/ZodiacLogo'
import StarField from './components/StarField'
import FluidCursorEffect from './components/ui/smokey-cursor-effect'

function App() {
  return (
    <>
      <FluidCursorEffect minimal />
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        {/* Animated star field background */}
        <StarField />
      
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
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl">
          Your cosmic guide to daily insights and zodiac predictions
        </p>
        
        {/* Coming Soon Badge */}
        <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-12">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            🌟 Coming Soon 🌟
          </p>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">🔮</div>
            <h3 className="text-lg font-semibold text-white mb-2">Daily Insights</h3>
            <p className="text-sm text-purple-200">Personalized horoscopes updated daily</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="text-lg font-semibold text-white mb-2">All Zodiac Signs</h3>
            <p className="text-sm text-purple-200">Coverage for every astrological sign</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">💫</div>
            <h3 className="text-lg font-semibold text-white mb-2">100% Free</h3>
            <p className="text-sm text-purple-200">No login, no payment required</p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-purple-200 text-sm z-10">
        <p>© FreeHoroscopeNow.com | Built with ❤️ for the stars</p>
      </footer>
    </div>
    </>
  )
}

export default App

