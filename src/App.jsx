import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import myLogo from './assets/logo.png'
import './App.css'

function App() {
  return (
    // starting div
    <div>
      
      {/* Main Header */}
      <img src={myLogo} alt="Ticket to Hack" className="main-logo" />
      
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

        {/* Frequently Asked Questions*/}
        <section className="info-section">
            <h2>Frequently Asked Questions</h2>

            <ul className="faq-list">
                <li>
                    <details>
                        <summary>What is a Hackathon?</summary>
                        <p>
                            A hackathon is an event where people work in teams to solve
                            problems or build projects, usually using technology. The event
                            often includes different prize tracks focused on specific themes
                            or challenges. At the end, teams present their projects, and
                            winners are selected based on set criteria.
                        </p>
                    </details>
                </li>

                <li>
                    <details>
                        <summary>When and where is the event?</summary>
                        <p>
                            Ticket to Hack will take place February 20th - 21st, 2027,
                            at Rice Hall, located at 85 Engineers Way,
                            Charlottesville, VA 22903
                        </p>
                    </details>
                </li>

                <li>
                    <details>
                        <summary>Do I need to know how to code?</summary>
                        <p>
                            No prior programming experience is required!
                            Ticket to Hack is a beginner-friendly hackathon,
                            and participants of all experience levels are welcome.
                        </p>
                    </details>
                </li>

                <li>
                    <details>
                        <summary>Do I need a team?</summary>
                        <p>
                            No, you don't need a team to participate! However, if you're
                            looking to form a team of up to four people, there will be
                            Discord channels and a Day 1 workshop to help with team formation.
                        </p>
                    </details>
                </li>
            </ul>

        </section>


    </div>
    // ending div
  )
}

export default App
