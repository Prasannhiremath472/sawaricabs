import { useState } from "react";
import { Link } from "react-router-dom";
import { routeOrder, routePages, titleCase } from "../data/routes";
import { ChevronDownIcon, PhoneIcon } from "./icons";

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);

  function closeAll() {
    setMenuOpen(false);
    setRoutesOpen(false);
  }

  return (
    <nav id="top" className={`site-navbar${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
      <div className="site-navbar__inner">
        <Link className="site-navbar__brand" to="/" aria-label="Sawari Cabs home" onClick={closeAll}>
          <span className="site-navbar__mark" aria-hidden="true">
            <img src="/logo.png" alt="" width="44" height="44" />
          </span>
          <span className="site-navbar__brand-text">Sawari Cabs</span>
        </Link>
        <button
          className="site-navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
        </button>
        <div className="site-navbar__menu">
          <div className="site-navbar__links">
            <Link to="/" onClick={closeAll}>Home</Link>
            <a href="/#about" onClick={closeAll}>About Us</a>
            <div className={`site-navbar__item${routesOpen ? " is-open" : ""}`}>
              <a
                className="site-navbar__route-link"
                href="/#routes"
                aria-haspopup="true"
                onClick={(e) => {
                  if (window.innerWidth <= 840) {
                    e.preventDefault();
                    setRoutesOpen((v) => !v);
                  } else {
                    closeAll();
                  }
                }}
              >
                All Routes
                <ChevronDownIcon />
              </a>
              <div className="site-navbar__dropdown" aria-label="All Routes">
                {routeOrder.map((slug) => (
                  <Link key={slug} to={`/${slug}`} onClick={closeAll}>
                    {titleCase(slug)}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/blog" onClick={closeAll}>Blog</Link>
            <a href="/#contact" onClick={closeAll}>Contact Us</a>
          </div>
          <div className="site-navbar__actions">
            <a className="site-navbar__cta" href="tel:+917387338634">
              <PhoneIcon width="14" height="14" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
