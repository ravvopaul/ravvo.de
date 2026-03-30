"use client"; // Marks this as a client component so we can use browser APIs like IntersectionObserver

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Fade-in animation: watches each .fi element and adds class "v" when it scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("v");
            observer.unobserve(entry.target); // Stop watching once it's visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    document.querySelectorAll(".fi").forEach((el) => observer.observe(el));

    // Email obfuscation: builds the address at runtime to avoid spam bots scraping it
    const addr = "kontakt" + "@" + "ravvo" + ".de";
    const openMail = (e: Event) => {
      e.preventDefault();
      window.location.href = "mailto:" + addr;
    };

    // Inject the email address and attach click handler to the CTA button
    const mb = document.getElementById("mailbtn");
    const mt = document.getElementById("mailtxt");
    if (mt) mt.textContent = addr;
    if (mb) mb.addEventListener("click", openMail);

    // Cleanup: disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty array = run once on page load

  return (
    <>
      {/* ── NAVIGATION ── Fixed top bar with logo and contact link */}
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

      {/* ── HERO ── Full-screen opening section with headline and CTA buttons */}
      <div className="hero">
        <div className="wrap">
          <h1>
            Dein Content.
            <br />
            Hunderte Kanäle.
            <br />
            <span>Millionen Aufrufe.</span>
          </h1>
          <p>
            Organische Reichweite ist tot – auf Facebook, Instagram und X
            erreichst du kaum noch deine eigenen Follower. Ravvo baut das
            größte Clipper-Netzwerk im DACH-Raum: Wir nehmen deinen Content –
            Podcasts, Streams, Videos, Musik – und verteilen ihn als Kurzvideos
            organisch über TikTok, Reels, Shorts und X. Leistungsbasiert, zu
            einem Bruchteil der Kosten von bezahlter Werbung.
          </p>
          <div className="btns">
            <a href="https://discord.gg/kmetRxTANM" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ width: '100%', textAlign: 'center' }}>
              Clipper werden → Discord beitreten
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS ── Four key numbers to build credibility */}
      <div className="stats">
        <div className="wrap">
          <div className="stats-row fi">
            <div>
              <h3>25.7<span>M</span></h3>
              <p>TikTok-Nutzer in Deutschland</p>
            </div>
            <div>
              <h3>~2.6<span>%</span></h3>
              <p>Organische Reichweite Facebook</p>
            </div>
            <div>
              <h3>&lt;1<span>€</span></h3>
              <p>CPM mit Clip-Distribution</p>
            </div>
            <div>
              <h3><span>0</span></h3>
              <p>Clipper-Netzwerke im DACH-Raum</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── Explains the organic reach crisis with a visual bar chart */}
      <div className="section gray" id="problem">
        <div className="wrap">
          <div className="problem-grid">
            <div className="fi">
              <div className="tag">Das Problem</div>
              <h2>Organische Reichweite ist im freien Fall.</h2>
              <p className="desc">
                Marken und Creator, die jahrelang Zielgruppen aufgebaut haben,
                erreichen heute nur noch einen Bruchteil ihrer Follower. Der
                einzige Weg? Bezahlte Werbung. Aber die wird teurer, und das
                Vertrauen sinkt. Es braucht einen neuen Kanal.
              </p>
            </div>
            {/* Bar chart comparing organic reach across platforms vs Ravvo */}
            <div className="bars fi">
              <div className="bar-row">
                <div className="bar-label">Facebook</div>
                <div className="bar-track"><div className="bar-fill red">2.6%</div></div>
              </div>
              <div className="bar-row">
                <div className="bar-label">X / Twitter</div>
                <div className="bar-track"><div className="bar-fill orange">3%</div></div>
              </div>
              <div className="bar-row">
                <div className="bar-label">Instagram</div>
                <div className="bar-track"><div className="bar-fill yellow">~4%</div></div>
              </div>
              <div className="bar-row">
                <div className="bar-label hl">Ravvo</div>
                <div className="bar-track"><div className="bar-fill green">Organisch &amp; skalierbar</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── Three steps explaining the Ravvo process */}
      <div className="section" id="wie">
        <div className="wrap">
          <div className="fi">
            <div className="tag">So funktioniert Ravvo</div>
            <h2>Von deinem Content zu hunderttausenden Aufrufen.</h2>
          </div>
          <div className="steps">
            <div className="step fi">
              <div className="num">01</div>
              <h3>Du lieferst das Material</h3>
              <p>
                Podcasts, Streams, YouTube-Videos, Interviews, Vorträge, Musik –
                egal welches Format, solange es Langformat und auf Deutsch ist.
              </p>
            </div>
            <div className="step fi">
              <div className="num">02</div>
              <h3>Clipper schneiden &amp; posten</h3>
              <p>
                Unser Netzwerk aus deutschsprachigen Clippern schneidet die
                besten Momente raus und postet sie auf ihren eigenen Kanälen –
                TikTok, Reels, Shorts, X.
              </p>
            </div>
            <div className="step fi">
              <div className="num">03</div>
              <h3>Du zahlst pro Aufruf</h3>
              <p>
                Kein Abo, keine Pauschale. Du zahlst nur für verifizierte
                Aufrufe – CPM-basiert, transparent und deutlich günstiger als
                jede bezahlte Kampagne.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY RAVVO ── Three benefit cards explaining the value proposition */}
      <div className="section gray">
        <div className="wrap">
          <div className="fi">
            <div className="tag">Warum Ravvo</div>
            <h2>Bezahlte Werbung ist teuer. Clipping ist es nicht.</h2>
          </div>
          <div className="why-grid">
            <div className="why-card fi">
              <div className="icon">⚡</div>
              <h3>Extrem niedriger CPM</h3>
              <p>
                Organische Clips kosten einen Bruchteil von bezahlter Werbung.
                Gleiche Reichweite, weniger Budget.
              </p>
            </div>
            <div className="why-card fi">
              <div className="icon">🔥</div>
              <h3>Echte Kanäle, echte Aufrufe</h3>
              <p>
                Keine Bots, keine künstliche Reichweite. Clipper posten auf
                ihren eigenen, aktiven Kanälen mit echten Followern.
              </p>
            </div>
            <div className="why-card fi">
              <div className="icon">🎯</div>
              <h3>Vier Plattformen gleichzeitig</h3>
              <p>
                Ein Clip, vier Kanäle. TikTok, Instagram Reels, YouTube Shorts
                und X – alles gleichzeitig und organisch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── Final call to action with email button (address injected by useEffect) */}
      <div className="cta-block" id="kontakt">
        <div className="wrap">
          <div className="fi">
            <div className="tag">Bereit?</div>
            <h2>Clip-Distribution für den DACH-Raum. Ab 2026.</h2>
            <p>
              Ravvo startet bald. Melde dich auf der Warteliste – als Creator,
              Podcaster oder Clipper.
            </p>
            <div className="btns">
              <a href="#" id="mailbtn" className="btn-accent">
                <span id="mailtxt"></span> {/* Email address filled in by useEffect */}
              </a>
            </div>
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
