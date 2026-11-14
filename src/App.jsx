import React from 'react';
import myLogo from './assets/logo.png';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import ticketBg from './assets/ticket-tab.png';
import './App.css';

function App() {
  return (
    <div>
      {/* Sticky Header */}
      <header className="sticky-header">
        <span className="header-title">Ticket to Hack</span>
        
        {/* Ticket Navigation Tabs */}
        <nav className="nav-tickets">
          <a href="#about-us" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>About Us</a>
          <a href="#faq" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>FAQ</a>
          <a href="#schedule" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>Schedule</a>

        {/* Updated Register Link */}
        <a 
            href="https://tally.so/r/vG7bYX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ticket-link" 
            style={{ backgroundImage: `url(${ticketBg})` }}
          >
            Register Here!
          </a>
        
        {/* New MLH Code of Conduct Link */}
        <a 
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ticket-link" 
            style={{ 
              backgroundImage: `url(${ticketBg})`, 
              fontSize: '12px', /* Slightly smaller font to fit the long text */
              textAlign: 'center',
              lineHeight: '1.2'
            }}
          >
            MLH Code <br/> of Conduct
          </a>
          
        </nav>

      </header>
      
      {/* Main Header */}
      <img src={myLogo} alt="Ticket to Hack" className="main-logo" />
      
      {/* Countdown Timer */}
      <Countdown />

      {/* Schedule & Mission Section */}
      <div id="schedule">
        <Schedule />
      </div>
      
      {/* About Us Section */}
      <div id="about-us">
        <AboutUs />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

    </div>
  );
}

export default App;