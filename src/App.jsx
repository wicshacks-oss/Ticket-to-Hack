import React from 'react';
import ticketBg from './assets/ticket-tab.png'; 
import landingBg from './assets/landing-page.png'; 
import scrollBg from './assets/scrolling-page.png';
import registerArrow from './assets/register-arrow.gif'; 
import registerTicket from './assets/register-ticket.png';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer.jsx';
import './App.css';


function App() {
  return (
    <div className="app-container">
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

        {/* THE ANIMATED ARROW */}
        <img src={registerArrow} alt="Point to register" className="register-arrow" />
        
        {/* THE CLICKABLE TICKET */}
        <a 
          href="https://tally.so/r/vG7bYX" 
          target="_blank" 
          rel="noopener noreferrer"
          className="register-ticket-link"
        >
          <img src={registerTicket} alt="Register Here" className="register-ticket-image" />
        </a>

      </section>
        
      {/* 3. SCROLLABLE CONTENT SECTIONS WITH BACKGROUND */}
      <div className="scrolling-content-bg">        
        {/* Placed Countdown at the top of the scrolling section */}
        <div className="countdown-wrapper">
          <Countdown />
        </div>

        <section id="schedule" className="content-section">
          <Schedule />
        </section>
        
        <section id="about-us" className="content-section">
          <AboutUs />
        </section>

        <section id="faq" className="content-section">
          <FAQ />
        </section>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;