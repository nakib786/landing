import { useEffect, useState, useRef } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'

interface PageTransitionProps {
  children: React.ReactNode
}

function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (location.pathname !== prevPath) {
      setIsTransitioning(true)
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        setPrevPath(location.pathname)
        setIsTransitioning(false)
      }, 1000) // Match animation duration (1s)
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [location.pathname, prevPath])

  const paths = ['/', '/blog']
  const currentIndex = paths.indexOf(prevPath)
  const nextIndex = paths.indexOf(location.pathname)
  const isForward = nextIndex > currentIndex
  
  const exitClass = isForward ? 'page-exit-forward' : 'page-exit-back'
  const enterClass = isForward ? 'page-enter-forward' : 'page-enter-back'

  // Initial load - show page immediately without animation
  const isInitialLoad = location.pathname === prevPath && !isTransitioning

  return (
    <div className="page-transition-container">
      {isTransitioning && (
        <div className={`page-wrapper ${exitClass}`} key={`prev-${prevPath}`}>
          <Routes location={{ pathname: prevPath } as Location}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      )}
      <div 
        className={`page-wrapper ${isTransitioning ? enterClass : ''} ${isInitialLoad ? 'page-initial' : ''}`}
        key={location.pathname}
      >
        {children}
      </div>
    </div>
  )
}

export default PageTransition

