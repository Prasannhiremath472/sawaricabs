import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routeOrder, titleCase } from "../data/routes";
import { ChevronDownIcon, PhoneIcon } from "./icons";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentSlug = location.pathname.replace(/^\//, "");

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`route-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
      <div className="route-nav__inner">
        <Link className="route-nav__brand" to="/" aria-label="Sawari Cabs home" onClick={closeMenu}>
          <span className="route-nav__mark" aria-hidden="true">
            <img src="/logo.png" alt="" width="44" height="44" />
          </span>
          <span>Sawari Cabs</span>
        </Link>
        <button
          className="route-nav__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
        </button>
        <div className="route-nav__menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/#about" onClick={closeMenu}>About Us</Link>
          <div className="route-nav__routes">
            <Link className="route-nav__active" to="/#routes" onClick={closeMenu}>
              All Routes <ChevronDownIcon />
            </Link>
            <div className="route-nav__dropdown">
              {routeOrder.map((slug) => (
                <Link
                  key={slug}
                  to={`/${slug}`}
                  aria-current={slug === currentSlug ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {titleCase(slug)}
                </Link>
              ))}
              <Link
                to="/kolhapur-airport-local"
                aria-current={currentSlug === "kolhapur-airport-local" ? "page" : undefined}
                onClick={closeMenu}
              >
                Kolhapur Airport — Local
              </Link>
            </div>
          </div>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/#contact" onClick={closeMenu}>Contact Us</Link>
          <a className="route-nav__cta-mobile" href="tel:+919529902335">
            <PhoneIcon /> Call Now
          </a>
        </div>
        <a className="route-nav__cta" href="tel:+919529902335">
          <PhoneIcon /> Call Now
        </a>
      </div>
    </nav>
  );
}
