"use client"; // Marks this as a client component so we can manipulate the DOM for email obfuscation

import { useEffect } from "react";

export default function Kontakt() {

  useEffect(() => {
    // Email obfuscation: builds the address at runtime to avoid spam bots scraping it
    const addr = "kontakt" + "@" + "ravvo" + ".de";

    // Find the element displaying the email text and the card link wrapping it
    const valueEl = document.querySelector(".mailto-link");
    const cardEl = valueEl?.closest(".contact-card") as HTMLAnchorElement | null;

    // Inject the email address as text and set the href on the card
    if (valueEl) valueEl.textContent = addr;
    if (cardEl) cardEl.href = "mailto:" + addr;
  }, []); // Empty array = run once on page load

  return (
    <>
      {/* ── NAVIGATION ── Same fixed header as the main page */}
      <header>
        <div className="wrap">
          <a href="/" className="logo">
            ravvo<b>.</b>
          </a>
          <a href="/kontakt" className="cta">
            Kontakt
          </a>
        </div>
      </header>

      <div className="contact-page">
        <div className="wrap">

          {/* Back link — lets users return to the homepage without using the logo */}
          <a href="/" className="back-link">
            ← Zurück
          </a>

          {/* ── HERO ── Page title and subtitle */}
          <div className="contact-hero">
            <div className="tag">Kontakt</div>
            <h1>Lass uns reden.</h1>
            <p>Fragen, Kooperationen oder einfach Hallo –<br />wir freuen uns von dir zu hören.</p>
          </div>

          {/* ── CONTACT CARDS ── Two clickable cards: email and Instagram */}
          <div className="contact-cards">

            {/* Email card — href and text are filled in by useEffect to hide the address from bots */}
            <a href="#" className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-label">E-Mail</div>
                {/* Arrow icon that animates on hover via CSS */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="contact-card-value mailto-link"></div>
              <div className="contact-card-desc">Direkter Draht ins Team</div>
            </a>

            {/* Instagram card — hidden until account is active, remove "hidden" class to show */}
            <a
              href="https://instagram.com/ravvoclips"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card hidden"
            >
              <div className="contact-card-top">
                <div className="contact-card-label">Instagram</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="contact-card-value">@ravvoclips</div>
              <div className="contact-card-desc">Folg uns auf Instagram</div>
            </a>

            {/* TikTok card — hidden until account is active, remove "hidden" class to show */}
            <a
              href="https://www.tiktok.com/@ravvoclips"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card hidden"
            >
              <div className="contact-card-top">
                <div className="contact-card-label">TikTok</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="contact-card-value">@ravvoclips</div>
              <div className="contact-card-desc">Folg uns auf TikTok</div>
            </a>

          </div>
        </div>
      </div>

      {/* ── FOOTER ── Minimal footer with copyright */}
      <footer>
        <div className="wrap">
          <p>© 2026 ravvo.</p>
        </div>
      </footer>
    </>
  );
}
