import React, { useEffect, useState } from 'react'

const RocketCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      id="custom-cursor" 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        color: '#3aedbe',
        fontSize: '1.5rem',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <i className="fa-solid fa-rocket"></i>
    </div>
  )
}

export default RocketCursor
