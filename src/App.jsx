import React from 'react';
import myLogo from './assets/logo.png';
import ticketBg from './assets/ticket-tab.png'; 
import registerTicketImg from './assets/register-ticket.png';
import tentImg from './assets/Firefly (1).png'; 
import arrowImg from './assets/arrow.png';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <div>
      {/* 1. STICKY HEADER & TABS (Fully intact!) */}
      <header className="sticky-header">
        <span className="header-title">Ticket to Hack</span>
        
        <nav className="nav-tickets">
          <a href="#about-us" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>About Us</a>
          <a href="#faq" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>FAQ</a>
          <a href="#schedule" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})` }}>Schedule</a>
          <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer" className="ticket-link" style={{ backgroundImage: `url(${ticketBg})`, fontSize: '12px', textAlign: 'center', lineHeight: '1.2' }}>MLH Code <br/> of Conduct</a>
        </nav>
      </header>
      
      {/* 2. LANDING PAGE SECTION */}
      <section className="landing-section">
        {/* Logo at the top */}
        <img src={myLogo} alt="Ticket to Hack" className="main-logo" />
        
        {/* Carnival House moved to the middle */}
{/* Container to keep arrow and tent aligned */}
      <div className="tent-container">
          
          <div className="arrow-wrapper">
            <img src={arrowImg} alt="Arrow pointing to tent" className="arrow-image" />
            <span className="arrow-text">Register<br/>Here</span>
          </div>
          
          {/* New wrapper to place the ticket ON the tent */}
          <div className="tent-wrapper">
            <img src={tentImg} alt="Circus Tent" className="tent-image" />
            
            <a 
              href="https://tally.so/r/vG7bYX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="register-ticket-link"
            >
              <img src={registerTicketImg} alt="Admit One Register Ticket" className="register-ticket-image" />
            </a>
          </div>

        </div>
        {/* Countdown moved to the bottom */}
        <Countdown />
      </section>

      {/* 3. SCROLLABLE CONTENT SECTIONS */}
      <div id="schedule">
        <Schedule />
      </div>
      
      <div id="about-us">
        <AboutUs />
      </div>

      <div id="faq">
        <FAQ />
      </div>

    </div>
  );
}

export default App;