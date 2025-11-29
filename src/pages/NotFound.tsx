import { Link } from 'react-router-dom'
import AdSense from '../components/StarField'
import StarField from '../components/StarField'
import FluidCursorEffect from '../components/ui/smokey-cursor-effect'

const NotFound = () => {
    return (
        <>
            <FluidCursorEffect minimal />

            <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-center px-6">
                {/* Animated star field background */}
                <StarField />

                <div className="relative z-10 max-w-2xl">
                    {/* 404 Number */}
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mb-4 animate-pulse">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Lost in the Cosmos?
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-purple-200 mb-10 leading-relaxed">
                        The stars have aligned, but not for this page. It seems you've ventured into a void where no horoscope exists.
                    </p>

                    {/* Return Button */}
                    <Link
                        to="/"
                        className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group"
                    >
                        <span className="mr-2">🚀</span>
                        Return to Earth
                    </Link>
                </div>

                {/* Decorative Planet/Moon (CSS only) */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-float opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-2xl animate-float-delayed opacity-50 pointer-events-none"></div>
            </div>
        </>
    )
}

export default NotFound
