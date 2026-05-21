import React, { useState, useEffect } from 'react'

const skills = [
  { text: 'Music Producer', icon: '🎵' },
  { text: 'Rapper', icon: '🎤' },
  { text: 'Robotics Enthusiast', icon: '🤖' },
  { text: 'Skilled Cook', icon: '🍳' },
  { text: 'Science Fiction Lover', icon: '🚀' },
  { text: 'Christian', icon: '⛪' },
  { text: 'Bookworm', icon: '📚' }
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentSkill = skills[skillIndex];
      const fullText = `${currentSkill.icon} ${currentSkill.text}`;

      if (isDeleting) {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, skillIndex, typingSpeed]);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000);

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Hello ✌️,</h2>
        <h1>my name is <span className="accent-text">Mateus Cruz</span></h1>
        <p>I am a Full Stack Developer and</p>
        <div className="dynamic-text-container">
          <span id="typing-text">{displayText}</span><span className="cursor">|</span>
        </div>
        <div className="hero-btns">
          <a href="Mateus Cruz - Maio 2026 - Dev.pdf" download className="btn-download">
            <i className="fa-solid fa-download"></i> Download Resume
          </a>
        </div>
      </div>

      <div className="profile-container">
        <div className="rotating-border"></div>
        <div className={`profile-card ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="profile-face front">
            <img src="img/MATEUS2.jpg" alt="Mateus Cruz" />
          </div>
          <div className="profile-face back">
            <img src="img/MATEUS3.png" alt="Mateus Cruz Anime" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
