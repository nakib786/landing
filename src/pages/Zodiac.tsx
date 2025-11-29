import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import AdSense from '../components/AdSense'
// @ts-ignore
import StarField from '../components/StarField'
import FluidCursorEffect from '../components/ui/smokey-cursor-effect'
import HamburgerMenu from '../components/HamburgerMenu'
import ZodiacLogo from '../components/ZodiacLogo'
import { zodiacData } from '../data/zodiac-data'

function Zodiac() {
    const { sign: urlSign } = useParams()
    const navigate = useNavigate()
    const [selectedSign, setSelectedSign] = useState(urlSign || 'aries')

    useEffect(() => {
        // @ts-ignore
        if (urlSign && zodiacData[urlSign.toLowerCase()]) {
            setSelectedSign(urlSign.toLowerCase())
        }
    }, [urlSign])

    const handleSignChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSign = e.target.value
        setSelectedSign(newSign)
        navigate(`/zodiac/${newSign}`)
    }

    // @ts-ignore
    const sign = zodiacData[selectedSign]

    const zodiacSigns = [
        { id: 'aries', name: 'Aries', symbol: '♈' },
        { id: 'taurus', name: 'Taurus', symbol: '♉' },
        { id: 'gemini', name: 'Gemini', symbol: '♊' },
        { id: 'cancer', name: 'Cancer', symbol: '♋' },
        { id: 'leo', name: 'Leo', symbol: '♌' },
        { id: 'virgo', name: 'Virgo', symbol: '♍' },
        { id: 'libra', name: 'Libra', symbol: '♎' },
        { id: 'scorpio', name: 'Scorpio', symbol: '♏' },
        { id: 'sagittarius', name: 'Sagittarius', symbol: '♐' },
        { id: 'capricorn', name: 'Capricorn', symbol: '♑' },
        { id: 'aquarius', name: 'Aquarius', symbol: '♒' },
        { id: 'pisces', name: 'Pisces', symbol: '♓' }
    ]

    return (
        <>
            <FluidCursorEffect minimal />

            <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
                <StarField />
                <HamburgerMenu />

                {/* Logo in top left corner - clickable link to home */}
                <Link
                    to="/"
                    className="fixed top-4 left-4 md:top-6 md:left-6 z-50 hover:scale-110 transition-transform duration-300 animate-float"
                    aria-label="Go to home page"
                >
                    <ZodiacLogo className="w-16 h-16 md:w-[220px] md:h-[220px]" />
                </Link>

                <main className="relative z-10 flex flex-col px-6 py-12 flex-grow max-w-6xl mx-auto w-full">
                    {/* Header */}
                    <header className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                                ✨ Zodiac Signs ✨
                            </span>
                        </h1>
                        <p className="text-purple-200 text-lg md:text-xl">
                            Explore the cosmic wisdom of all 12 zodiac signs
                        </p>
                    </header>

                    {/* Top Ad */}
                    <div className="w-full mb-8">
                      <AdSense adSlot="7289901234" adFormat="horizontal" />
                    </div>

                    {/* Zodiac Selector */}
                    <div className="mb-8 animate-fade-in">
                        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-8 max-w-2xl mx-auto animate-glow">
                            <label className="block text-yellow-400 text-lg font-semibold mb-4 text-center">
                                Select Your Zodiac Sign
                            </label>
                            <select
                                value={selectedSign}
                                onChange={handleSignChange}
                                className="w-full px-6 py-4 text-lg bg-indigo-950/80 text-white border-2 border-purple-500/50 rounded-2xl cursor-pointer transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/30 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-400/50"
                            >
                                {zodiacSigns.map((z) => (
                                    <option key={z.id} value={z.id}>
                                        {z.symbol} {z.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Mid Rectangle Ad */}
                        <div className="w-full max-w-md mx-auto my-12">
                          <AdSense adSlot="1234567890" adFormat="rectangle" />
                        </div>
                    </div>

                    {/* Content Card */}
                    {sign && (
                        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-6 md:p-10 animate-fade-in">
                            {/* Sign Header */}
                            <div className="text-center mb-8 pb-6 border-b border-purple-500/30">
                                <div className="text-7xl mb-4 animate-float">{sign.symbol}</div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                        {sign.name}
                                    </span>
                                </h2>
                                <p className="text-yellow-400 text-xl font-semibold mb-4">{sign.dates}</p>

                                <div className="flex justify-center gap-4 flex-wrap">
                                    <span className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 text-purple-200">
                                        <span className="text-purple-300">Element:</span> <span className="text-white font-semibold">{sign.element}</span>
                                    </span>
                                    <span className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 text-purple-200">
                                        <span className="text-purple-300">Modality:</span> <span className="text-white font-semibold">{sign.modality}</span>
                                    </span>
                                    <span className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 text-purple-200">
                                        <span className="text-purple-300">Ruling Planet:</span> <span className="text-white font-semibold">{sign.rulingPlanet}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-8 text-purple-100 prose prose-invert max-w-none">
                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Overview
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.overview }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Personality
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.personality }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Love & Relationships
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.love }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Career & Money
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.career }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Friendship
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.friendship }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Health & Wellness
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.health }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Compatibility
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.compatibility }} />
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="text-yellow-400">✦</span> Mythology
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: sign.mythology }} />
                                </section>

                                <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border-2 border-yellow-400/30">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Summary</h3>
                                    <div className="text-center text-lg" dangerouslySetInnerHTML={{ __html: sign.summary }} />
                                </section>
                            </div>
                        </div>
                    )}

                    {/* Back to Home */}
                    <div className="text-center mt-8">
                        <Link
                            to="/"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-500 hover:via-pink-400 hover:to-purple-500 rounded-full border-2 border-white/40 text-white text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </main>

                {/* Footer */}
                <footer className="relative z-10 w-full py-8 text-center text-purple-200 text-sm">
                    <p>© FreeHoroscopeNow.com | Built with ❤️ for the stars</p>
                    <p className="mt-2">
                        <Link to="/privacy-policy" className="text-purple-300 hover:text-purple-200 underline transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                </footer>
            </div>
        </>
    )
}

export default Zodiac
