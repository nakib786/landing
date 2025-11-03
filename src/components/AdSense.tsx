import { useEffect, useRef } from 'react'

interface AdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: React.CSSProperties
  className?: string
  layout?: string
  layoutKey?: string
  fullWidthResponsive?: boolean
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  style,
  className = '',
  layout,
  layoutKey,
  fullWidthResponsive = true,
}: AdSenseProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      if (adRef.current && window.adsbygoogle && !adRef.current.hasChildNodes()) {
        // Push ad to adsbygoogle array
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  // Only render in production or if explicitly enabled
  const shouldRenderAd = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ADS === 'true'

  if (!shouldRenderAd) {
    return (
      <div
        className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 flex items-center justify-center min-h-[100px] ${className}`}
        style={style}
      >
        <p className="text-purple-200 text-sm">Ad placeholder (disabled in development)</p>
      </div>
    )
  }

  return (
    <div
      ref={adRef}
      className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 flex items-center justify-center min-h-[100px] ${className}`}
      style={style}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          minHeight: '100px',
          ...style,
        }}
        data-ad-client="ca-pub-7571735093295420"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
        {...(layout && { 'data-ad-layout': layout })}
        {...(layoutKey && { 'data-ad-layout-key': layoutKey })}
      />
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle: { pushed?: boolean; push: (config: Record<string, unknown>) => void }[]
  }
}

