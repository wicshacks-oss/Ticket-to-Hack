import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    // starting div
    <div>
      
      {/* Main Header */}
      <h1>Ticket to Hack</h1>

      {/* "Mission statement" about the event */}
      <section className="mission-statement-section">
        <h2>About the Event</h2>
        <p>
        WiCS Hackathon is a 24-hour hackathon hosted by WiCS, aiming to promote diversity and bring together the community of women in STEM at UVA and surrounding schools.
        </p>
      </section>


    </div>
    // ending div
  )
}

export default App
