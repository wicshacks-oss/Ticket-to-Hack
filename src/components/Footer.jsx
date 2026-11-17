
import React from 'react';
import './Footer.css';

import instagramIcon from '../assets/instagram_logo.png';
import devpostIcon from '../assets/devpost_logo.png';
import discordIcon from '../assets/discord_logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h2 className="footer-title">Ticket to Hack</h2>

        <p className="footer-description">
          Follow us and stay connected!
        </p>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/wicshacks_uva/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a
            href="https://ticket-to-hack.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Devpost"
          >
            <img src={devpostIcon} alt="Devpost" />
          </a>

          <a
            href="https://discord.com/channels/1555705080957636668/1555705081440112813"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <img src={discordIcon} alt="Discord" />
          </a>
        </div>

        <p className="footer-bottom">
          © 2027 Ticket to Hack | WiCS at UVA
        </p>
      </div>
    </footer>
  );
}

export default Footer;
