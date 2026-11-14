import React, { useState, useEffect } from 'react';
import './Countdown.css'

function Countdown() {
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

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
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
  );
}

export default Countdown;