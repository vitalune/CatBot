import React from 'react';
import './Header.css';
import TypingAnimation from './TypingAnimation';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-branding">
          <h1>CatBot</h1>
          <TypingAnimation text="chat with me for help" />
        </div>
        <nav className="header-nav">
          <a href="/CatBot/index.html" className="nav-link">← Back to Project</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
