import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-brand">A welcoming Church of England parish at the heart of Friern Barnet.</h2>
            <p className="footer-copy">
              Worship, community, pastoral care, hall hire, and life events support from a church that has served the
              parish since 1911.
            </p>
            <div className="button-row">
              <Link className="button" href="/worship">
                Join us on Sunday
              </Link>
              <Link className="button-secondary" href="/contact">
                Get in touch
              </Link>
            </div>
          </div>
          <div>
            <span className="footer-heading">Explore</span>
            <div className="footer-links">
              <Link href="/worship">Worship</Link>
              <Link href="/life-events">Life Events</Link>
              <Link href="/community">Community</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
            <span className="footer-heading">Helpful Links</span>
            <div className="footer-links">
              <Link href="/news-events">News & Events</Link>
              <Link href="/hall-hire">Hall Hire</Link>
              <Link href="/safeguarding">Safeguarding</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <span className="footer-heading">Visit</span>
            <div className="footer-meta">
              <span>
                Friern Barnet Lane
                <br />
                London N11 3LX
              </span>
              <a href="tel:02083613081">020 8361 3081</a>
              <a href="mailto:info@stjohnsfriernbarnet.org">info@stjohnsfriernbarnet.org</a>
              <a href="mailto:safeguarding@stjohnsfriernbarnet.org">Safeguarding Officer</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} St John's Church Friern Barnet. Registered Charity.</span>
          <span>Rooted in prayer, hospitality, and service.</span>
        </div>
      </div>
    </footer>
  );
}
