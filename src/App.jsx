import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import UFO from './components/Pyramid'
import RocketCursor from './components/RocketCursor'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />

        {/* UFO Canvas Background */}
        <div id="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 4, 3]} intensity={2.5} color="#ffffff" />
            <pointLight position={[-4, -2, 2]} intensity={1.2} color="#a0c8ff" />
            <directionalLight position={[5, 5, 3]} intensity={1.8} />
            <UFO />
            {theme === 'dark' && (
              <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            )}
          </Canvas>
        </div>

        <About />
        <Technologies />
        <Projects />
      </main>

      <button
        id="back-to-top"
        onClick={scrollToTop}
        style={{ display: showBackToTop ? 'flex' : 'none' }}
        title="Go to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <RocketCursor />
      <BackgroundMusic />
    </div>
  )
}

export default App
