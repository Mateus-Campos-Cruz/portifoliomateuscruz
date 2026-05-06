import React from 'react'

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <div className="nav-container">
        <a href="#" className="logo">&lt;/ MC&gt;</a>
        
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tech">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <div className="social-links">
            <a href="https://github.com/Mateus-Campos-Cruz" target="_blank" rel="noreferrer" id="github-link"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mateuscruzdevweb/" target="_blank" rel="noreferrer" id="linkedin-link"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://wa.me//31985680543" target="_blank" rel="noreferrer" id="whatsapp-link"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} id="theme-icon"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
