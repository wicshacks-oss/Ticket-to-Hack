import React from 'react';
import ticketBg from './assets/ticket-tab.png'; 
// Importing the specific file from your screenshot
import landingBg from './assets/landing-page.png'; 
import './App.css';

function App() {
  return (
    <div>
      {/* 1. STICKY HEADER & TABS */}
      <header className="sticky-header">
        <span className="header-title">Ticket to Hack</span>
        
        <nav className="nav-tickets">
          <a href="#about-us" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>About Us</a>
          <a href="#faq" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>FAQ</a>
          <a href="#schedule" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>Schedule</a>
          <a 
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ticket-link" 
            style={{ backgroundImage: `url(${ticketBg})`, fontSize: '12px', textAlign: 'center', lineHeight: '1.2' }}
          >
            MLH Code <br/> of Conduct
          </a>
        </nav>
      </header>
      
      {/* 2. NEW LANDING DESIGN */}
      <section className="landing-image-container">
        <img src={landingBg} alt="Ticket to Hack 2026" className="landing-full-image" />
      </section>

    </div>
  );
}

export default App;