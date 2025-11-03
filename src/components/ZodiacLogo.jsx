export default function ZodiacLogo() {
  // 12 Zodiac symbols in Unicode
  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-rotate-slow"
      role="img"
      aria-label="Zodiac Wheel Logo"
    >
      {/* Outer cosmic circle with glow */}
      <circle
        cx="110"
        cy="110"
        r="105"
        stroke="url(#gradient1)"
        strokeWidth="3"
        fill="none"
        opacity="0.7"
        strokeDasharray="5 3"
      />
      
      {/* Middle constellation ring */}
      <circle
        cx="110"
        cy="110"
        r="90"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      
      {/* Inner mystical circle */}
      <circle
        cx="110"
        cy="110"
        r="75"
        stroke="url(#gradient3)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      
      {/* 12 Zodiac constellation points */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = 110 + 90 * Math.cos(angle);
        const y = 110 + 90 * Math.sin(angle);
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="5"
              fill="url(#starGradient)"
              opacity="0.9"
            />
            <circle
              cx={x}
              cy={y}
              r="8"
              stroke="#FCD34D"
              strokeWidth="0.5"
              fill="none"
              opacity="0.4"
            />
          </g>
        );
      })}
      
      {/* Zodiac symbols positioned around the circle */}
      {zodiacSymbols.map((symbol, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = 110 + 75 * Math.cos(angle);
        const y = 110 + 75 * Math.sin(angle);
        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize="16"
            fill="url(#gradient4)"
            textAnchor="middle"
            dominantBaseline="middle"
            opacity="0.85"
            style={{ fontWeight: 'bold' }}
          >
            {symbol}
          </text>
        );
      })}
      
      {/* Constellation connecting lines */}
      {[...Array(12)].map((_, i) => {
        const angle1 = (i * 30 - 90) * (Math.PI / 180);
        const angle2 = ((i + 1) * 30 - 90) * (Math.PI / 180);
        const x1 = 110 + 90 * Math.cos(angle1);
        const y1 = 110 + 90 * Math.sin(angle1);
        const x2 = 110 + 90 * Math.cos(angle2);
        const y2 = 110 + 90 * Math.sin(angle2);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#gradient5)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        );
      })}
      
      {/* Central sun and moon symbol */}
      <circle
        cx="110"
        cy="110"
        r="35"
        fill="url(#centerGradient)"
        opacity="0.9"
      />
      
      {/* Sun rays */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const x1 = 110 + 28 * Math.cos(angle);
        const y1 = 110 + 28 * Math.sin(angle);
        const x2 = 110 + 38 * Math.cos(angle);
        const y2 = 110 + 38 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FCD34D"
            strokeWidth="2"
            opacity="0.7"
            strokeLinecap="round"
          />
        );
      })}
      
      {/* Crescent moon overlay */}
      <path
        d="M 110 85 A 20 20 0 1 1 110 135 A 15 15 0 1 0 110 85 Z"
        fill="url(#moonGradient)"
        opacity="0.8"
      />
      
      {/* Small stars scattered around */}
      {[
        { x: 40, y: 50, size: 2 },
        { x: 170, y: 60, size: 1.5 },
        { x: 30, y: 120, size: 1.5 },
        { x: 180, y: 130, size: 2 },
        { x: 50, y: 170, size: 1.5 },
        { x: 160, y: 180, size: 2 },
      ].map((star, i) => (
        <circle
          key={`star-${i}`}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="#FCD34D"
          opacity="0.6"
        />
      ))}
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="25%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#F472B6" />
          <stop offset="75%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        
        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="50%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
        
        <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="1" />
          <stop offset="50%" stopColor="#FBBF24" stopOpacity="1" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
        </linearGradient>
        
        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#F472B6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.5" />
        </linearGradient>
        
        <radialGradient id="starGradient">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.8" />
        </radialGradient>
        
        <radialGradient id="centerGradient">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="40%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
        
        <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="50%" stopColor="#C7D2FE" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

