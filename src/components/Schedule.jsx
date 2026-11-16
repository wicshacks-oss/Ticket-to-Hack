import React from 'react';
import './Schedule.css'

function Schedule() {
  return (
    <>
      <section className="mission-statement-section">
        <h2>Hackathon Mission</h2>
        <p>
          WiCS Hackathon is a 24-hour hackathon hosted by WiCS, aiming to promote diversity and bring together the community of women in STEM at UVA and surrounding schools.
        </p>
      </section>

      <section className="info-section">
        <h2>About the Event</h2>
        <ul>
          <li>When? February 20th - 21st 2027</li>
          <li>Where? Rice Hall | 85 Engineers Way, Charlottesville, VA, 22903</li>
        </ul>      
      </section>
    </>
  );
}

export default Schedule;