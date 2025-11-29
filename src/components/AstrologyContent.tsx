import React from 'react';

const AstrologyContent = () => {
    return (
        <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Article 1: The Power of Zodiac */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🌌</span>
                        <h2 className="text-2xl font-bold text-white">The Power of the Zodiac</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed mb-4">
                        Astrology has been a guiding light for humanity for thousands of years. By mapping the positions of celestial bodies at the time of your birth, we can uncover deep insights into your personality, strengths, weaknesses, and potential life path. Your zodiac sign is more than just a symbol; it's a cosmic blueprint of your soul.
                    </p>
                    <p className="text-purple-100 leading-relaxed">
                        Whether you're a fiery Aries, a grounded Taurus, or an intuitive Pisces, understanding your astrological profile can help you navigate life's challenges with greater clarity and confidence. Our daily horoscopes are crafted to provide you with timely wisdom that resonates with your unique cosmic energy.
                    </p>
                </div>

                {/* Article 2: The Four Elements */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🔥</span>
                        <h2 className="text-2xl font-bold text-white">The Four Elements</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed mb-4">
                        The twelve zodiac signs are divided into four elements: Fire, Earth, Air, and Water. These elements represent the fundamental energies that shape our temperament and approach to life.
                    </p>
                    <ul className="space-y-2 text-purple-100">
                        <li className="flex items-start gap-2">
                            <span className="text-red-400 font-bold">Fire (Aries, Leo, Sagittarius):</span>
                            <span>Passionate, dynamic, and temperamental. They light up the room with their energy.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400 font-bold">Earth (Taurus, Virgo, Capricorn):</span>
                            <span>Grounded, practical, and loyal. They build solid foundations and value stability.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-yellow-400 font-bold">Air (Gemini, Libra, Aquarius):</span>
                            <span>Intellectual, communicative, and social. They are the thinkers and connectors of the zodiac.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">Water (Cancer, Scorpio, Pisces):</span>
                            <span>Emotional, intuitive, and mysterious. They feel deeply and are highly empathetic.</span>
                        </li>
                    </ul>
                </div>

                {/* Article 3: Planetary Influences */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🪐</span>
                        <h2 className="text-2xl font-bold text-white">Planetary Influences</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-purple-100 leading-relaxed mb-4">
                                In astrology, planets are the active forces that drive our lives. Each planet rules a specific aspect of our existence. For instance, Mercury governs communication and intellect, while Venus rules love, beauty, and relationships. Mars drives our ambition and energy, and Jupiter brings expansion and luck.
                            </p>
                            <p className="text-purple-100 leading-relaxed">
                                As these planets move through the zodiac, they create unique geometric angles called "aspects" that influence our daily experiences. A "trine" might bring ease and flow, while a "square" could present a challenge that forces us to grow.
                            </p>
                        </div>
                        <div>
                            <p className="text-purple-100 leading-relaxed mb-4">
                                Our daily horoscopes analyze these planetary movements to give you a heads-up on what to expect. Are the stars aligning for a romantic evening? Is it a good day to ask for a raise? Or should you lay low and recharge?
                            </p>
                            <p className="text-purple-100 leading-relaxed">
                                By staying tuned to these cosmic rhythms, you can make better decisions and align your actions with the universe's flow. Remember, the stars impel, they do not compel—you always have the power of free will.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AstrologyContent;
