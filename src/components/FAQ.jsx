import React from 'react';
import './FAQ.css'

function FAQ() {
  return (
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
  );
}

export default FAQ;
