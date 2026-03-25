"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/worship", label: "Worship" },
  { href: "/life-events", label: "Life Events" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/news-events", label: "News & Events" },
  { href: "/hall-hire", label: "Hall Hire" },
  { href: "/safeguarding", label: "Safeguarding" },
  { href: "/contact", label: "Contact" }
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function HeaderActions({ mobile = false }) {
  return (
    <div className={`site-header-quick${mobile ? " site-header-quick--mobile" : " site-header-quick--desktop"}`}>
      <a className="header-contact-link" href="tel:02083613081">
        Call Church
      </a>
      <Link className="header-visit-link" href="/contact">
        Plan Your Visit
      </Link>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="site-header-top">
          <div className="brand-lockup">
            <Link className="brand" href="/">
              <img
                className="brand-mark"
                src="https://media.base44.com/images/public/69bd348b43a353f06ac0f83a/d38e26a72_st-johns-church-logo.png"
                alt="St John's Church logo"
              />
              <span className="brand-copy">
                <span className="brand-name">St John&apos;s Church</span>
                <span className="brand-subtitle">Friern Barnet</span>
              </span>
            </Link>

            <div className="brand-meta" aria-label="Parish summary">
              <span className="brand-kicker">Church of England Parish</span>
              <span className="brand-note">Sunday worship at 8:00am and 10:00am</span>
            </div>
          </div>

          <HeaderActions />

          <button
            className={`nav-toggle${isOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={isOpen}
            aria-controls="site-nav-panel"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="nav-toggle-copy" aria-hidden="true">
              {isOpen ? "Close" : "Menu"}
            </span>
            <span className="nav-toggle-icon" aria-hidden="true">
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </span>
          </button>
        </div>

        <div className={`site-nav-panel${isOpen ? " is-open" : ""}`} id="site-nav-panel">
          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} className={isActive(pathname, item.href) ? "is-active" : ""} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <HeaderActions mobile />
        </div>
      </div>
    </header>
  );
}

