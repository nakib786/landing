import { useEffect, useState } from 'react';

export default function StarField() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  
  useEffect(() => {
    // Generate random stars
    const generatedStars = [...Array(100)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
    
    // Generate 5 shooting stars shooting downward with trails
    const generatedShootingStars = [...Array(5)].map((_, i) => {
      // Start from random positions at the top
      const startX = Math.random() * 100;
      const startY = -5; // Start slightly above the viewport
      
      // Calculate end position shooting downward
      const angle = 180 + (Math.random() - 0.5) * 30; // Straight down with slight variation (165-195 degrees)
      const distance = 150; // Long distance to ensure it reaches the bottom
      const endX = startX + (distance * Math.cos(angle * Math.PI / 180)) / 10;
      const endY = startY + 120; // Shoot all the way down past viewport height
      
      return {
        id: `shooting-${i}`,
        startX,
        startY,
        endX,
        endY,
        duration: 3 + Math.random() * 2, // 3-5 seconds for slower, more graceful motion
        delay: Math.random() * 10, // Random delay up to 10 seconds
        size: 2 + Math.random() * 1, // Size 2-3px
      };
    });
    setShootingStars(generatedShootingStars);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Multiple shooting stars */}
      {shootingStars.map((shootingStar) => {
        const moveX = shootingStar.endX - shootingStar.startX;
        const moveY = shootingStar.endY - shootingStar.startY;
        
        return (
          <div
            key={shootingStar.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${shootingStar.startX}%`,
              top: `${shootingStar.startY}%`,
              width: `${shootingStar.size}px`,
              height: `${shootingStar.size}px`,
              opacity: 0,
              animation: 'shooting-star',
              animationDuration: `${shootingStar.duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${shootingStar.delay}s`,
              boxShadow: `
                0 0 ${shootingStar.size * 2}px white,
                0 0 ${shootingStar.size * 4}px rgba(255, 255, 255, 0.8),
                0 -20px 40px rgba(255, 255, 255, 0.6),
                0 -40px 60px rgba(255, 255, 255, 0.4),
                0 -60px 80px rgba(255, 255, 255, 0.2),
                0 -80px 100px rgba(255, 255, 255, 0.1)
              `,
              '--shooting-move-x': `${moveX}vw`,
              '--shooting-move-y': `${moveY}vh`,
            }}
          />
        );
      })}
    </div>
  );
}

