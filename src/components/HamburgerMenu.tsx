import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' }
  ]

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}
      
      <nav className="fixed top-6 right-6 z-50">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300 hamburger-glow group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Menu Overlay */}
        {isOpen && (
          <div
            className="absolute top-16 right-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 p-4 min-w-[150px] menu-glow animate-fade-in z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default HamburgerMenu

