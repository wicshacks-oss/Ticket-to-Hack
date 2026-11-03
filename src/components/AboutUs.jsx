import './AboutUs.css'


function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      {/* Block 1: text on the left, tilted photo on the right */}
      <div className="about-block about-block-left">
        <div className="about-text">
          <h2>WiCS Hacks</h2>
          <p>
            WiCS Hacks at UVA is a hackathon organized by UVA's Women in
            Computing Sciences (WiCS) organization. It is a 24-hour hackathon
            for people of all backgrounds, especially first-time hackers and
            those underrepresented in computer science.
          </p>
          <p>
            Participants can work in teams to create innovative projects and
            win prizes for their submissions. There will be workshops,
            speakers, and mini activities throughout the day.
          </p>
          <p className="about-cta">Join us on February 20 – 21 at Rice Hall!</p>
        </div>
        <figure className="about-photo about-photo-right">
          <div className="about-photo-placeholder" role="img" aria-label="WiCS members at a past event" />
        </figure>
      </div>

      {/* Block 2: photo on the left, text on the right (shifted over) */}
      <div className="about-block about-block-right">
        <figure className="about-photo about-photo-left">
          <div className="about-photo-placeholder" role="img" aria-label="Students working together" />
        </figure>
        <div className="about-text">
          <h2>WiCS @ UVA</h2>
          <p>
            WiCS is a chapter of ACM-W, a committee that provides
            opportunities like scholarships to research, conferences, etc. We
            follow the ACM-W guidelines and add our own twist.
          </p>
          <p>
            We are a club that supports, celebrates, and encourages the
            growing community of women in computing. We aim to raise awareness
            of issues faced by women in technology, in addition to inspiring
            women to explore educational and professional opportunities in the
            field through mentorship and service.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs