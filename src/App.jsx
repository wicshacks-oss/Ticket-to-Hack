import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import myLogo from './assets/logo.png'
import AboutUs from './components/AboutUs'
import './App.css'

function App() {

  // Initialize state for the countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("February 20, 2027 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to pad single digits with a leading zero
  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div>
      
      {/* Main Header */}
      <img src={myLogo} alt="Ticket to Hack" className="main-logo" />
      
      {/* Ticket-Style Countdown Timer */}
      <section className="countdown-section">
        <h2 className="countdown-title">TIME REMAINING</h2>
        <div className="countdown-display">
          
          <div className="countdown-item">
            <div className="countdown-card">{formatTime(timeLeft.days)}</div>
            <span className="countdown-label">DAYS</span>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-card">{formatTime(timeLeft.hours)}</div>
            <span className="countdown-label">HOURS</span>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-card">{formatTime(timeLeft.minutes)}</div>
            <span className="countdown-label">MINUTES</span>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-card">{formatTime(timeLeft.seconds)}</div>
            <span className="countdown-label">SECONDS</span>
          </div>

        </div>
      </section>
      
      {/* "Mission statement" about the event */}
      <section className="mission-statement-section">
        <h2>Hackathon Mission</h2>
        <p>
        WiCS Hackathon is a 24-hour hackathon hosted by WiCS, aiming to promote diversity and bring together the community of women in STEM at UVA and surrounding schools.
        </p>
      </section>

      {/* Information about the event */}
      <section className="info-section">
        <h2>About the Event</h2>
        <ul>
          <li>When? February 20th - 21st 2027</li>
          <li>Where? Rice Hall | 85 Engineers Way, Charlottesville, VA, 22903</li>
        </ul>      
      </section>
      
      {/* About Us section */}
      <AboutUs />

    </div>
    // ending div
  )
}

export default App
