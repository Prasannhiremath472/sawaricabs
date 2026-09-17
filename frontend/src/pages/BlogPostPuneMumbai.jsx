import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/blog-post.css";
import { PhoneIcon, WhatsAppIcon, ClockIcon, PinIcon } from "../components/icons";
import WhatsAppFab from "../components/WhatsAppFab";

function BackArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function BlogPostPuneMumbai() {
  useEffect(() => {
    document.title = "The Ultimate Business Traveler's Guide: Pune to Mumbai | Sawari Cabs Blog";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professionals on the Pune-Mumbai corridor — stay punctual, productive, and door-to-door stress-free with Sawari Cabs private intercity cab service."
      );
    }
  }, []);

  return (
    <div className="blog-post-page">
      <nav className="nav">
        <div className="nav__inner">
          <Link className="nav__brand" to="/">
            <span className="nav__mark">
              <img src="/logo.png" alt="" width="42" height="42" />
            </span>
            Sawari Cabs
          </Link>
          <div className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/#about">About Us</Link>
            <Link to="/#routes">All Routes</Link>
            <Link to="/blog" className="active">
              Blog
            </Link>
            <Link to="/#contact">Contact Us</Link>
          </div>
          <a className="nav__cta" href="tel:+917387338634">
            <PhoneIcon width="14" height="14" />
            Call Now
          </a>
        </div>
      </nav>

      <header className="post-hero" style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}>
        <div className="post-hero__inner">
          <Link className="post-hero__back" to="/blog">
            <BackArrowIcon />
            Back to Blog
          </Link>
          <div className="post-hero__cat">Business Travel</div>
          <h1>The Ultimate Business Traveler's Guide: Pune to Mumbai</h1>
          <div className="post-hero__meta">
            <span>
              <CalendarIcon />
              April 30, 2026
            </span>
            <span className="dot">·</span>
            <span>Sawari Cabs Team</span>
            <span className="dot">·</span>
            <span>3 min read</span>
          </div>
        </div>
      </header>

      <div className="post-layout">
        <article className="post-content">
          <p className="post-lead">
            For many professionals, the Pune–Mumbai corridor is a weekly routine. Here is how a private cab makes
            every trip more productive, punctual, and stress-free.
          </p>

          <div className="highlight-box">
            <strong>Route at a glance:</strong> Pune → Mumbai &nbsp;|&nbsp; ~150 km &nbsp;|&nbsp; 3–4 hrs &nbsp;|&nbsp;
            via Mumbai-Pune Expressway
          </div>

          <div className="reason-card">
            <div className="reason-card__icon">
              <ClockIcon width="22" height="22" />
            </div>
            <div className="reason-card__body">
              <h2>Punctuality is Priority</h2>
              <p>
                When you have a meeting in Bandra or a flight from T2, timing is everything. Sawari Cabs drivers
                track your schedule, plan the route ahead, and ensure on-time pickup — every single time. No surge
                pricing, no cancellations at the last minute.
              </p>
            </div>
          </div>

          <div className="reason-card">
            <div className="reason-card__icon">
              <BriefcaseIcon />
            </div>
            <div className="reason-card__body">
              <h2>The Mobile Office</h2>
              <p>
                Skip the crowded bus and use the quiet, comfortable space of a private{" "}
                <Link to="/pune-to-mumbai">Pune to Mumbai Taxi</Link> to catch up on emails, prep for your
                presentation, or take important calls. Comfortable seating, good legroom, and a peaceful environment
                make the journey productive.
              </p>
            </div>
          </div>

          <div className="reason-card">
            <div className="reason-card__icon">
              <PinIcon width="22" height="22" />
            </div>
            <div className="reason-card__body">
              <h2>Door-to-Door Service</h2>
              <p>
                Avoid the hassle of local autos and rickshaws after arriving in Mumbai. Sawari Cabs drops you exactly
                where you need to be — your office in BKC, a hotel in Bandra, the airport terminal, or any specific
                address in the city. Zero last-mile stress.
              </p>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <strong>Pickup points</strong>
              <span>Home, office, hotel, Pune airport, railway station</span>
            </div>
            <div className="info-item">
              <strong>Drop options</strong>
              <span>Mumbai airport T2, Bandra, BKC, Andheri, Dadar, Navi Mumbai, Thane</span>
            </div>
            <div className="info-item">
              <strong>Best for</strong>
              <span>Corporate travel, airport transfers, same-day return trips</span>
            </div>
            <div className="info-item">
              <strong>Cab types</strong>
              <span>Sedan for solo/duo, SUV for teams with luggage</span>
            </div>
          </div>

          <div className="post-cta-box">
            <h3>Book Your Pune–Mumbai Cab</h3>
            <p>Reliable, on-time, door-to-door. Call or WhatsApp for instant confirmation.</p>
            <div className="post-cta-box__btns">
              <a href="tel:+917387338634" className="btn-primary">
                <PhoneIcon width="16" height="16" />
                Call +91-7387338634
              </a>
              <a
                href="https://wa.me/917387338634?text=Hi%2C%20I%20want%20to%20book%20Pune%20to%20Mumbai%20cab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                <WhatsAppIcon width="16" height="16" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="post-nav">
            <Link to="/blog/kolhapur-to-goa-road-trip" className="post-nav__back">
              ← Kolhapur to Goa Road Trip
            </Link>
            <Link to="/blog" className="post-nav__next">
              All Articles →
            </Link>
          </div>
        </article>

        <aside className="post-sidebar">
          <div className="sidebar-card">
            <h4>Related Routes</h4>
            <ul>
              <li>
                <Link to="/pune-to-mumbai">Pune → Mumbai</Link>
              </li>
              <li>
                <Link to="/mumbai-to-kolhapur">Mumbai → Kolhapur</Link>
              </li>
              <li>
                <Link to="/pune-to-kolhapur">Pune → Kolhapur</Link>
              </li>
              <li>
                <Link to="/sangli-to-pune">Sangli → Pune</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-card sidebar-card--cta">
            <h4>Book Pune–Mumbai Cab</h4>
            <p>On-time pickup. Door-to-door drop.</p>
            <a href="tel:+917387338634" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}>
              Call Now
            </a>
          </div>
          <div className="sidebar-card">
            <h4>More Articles</h4>
            <ul>
              <li>
                <Link to="/blog/5-reasons-professional-cabs">5 Reasons to Choose Professional Cabs</Link>
              </li>
              <li>
                <Link to="/blog/kolhapur-to-goa-road-trip">Kolhapur to Goa Road Trip Guide</Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <footer className="blog-footer">
        <p>
          © 2026 Sawari Cabs. All rights reserved. &nbsp;|&nbsp; <Link to="/">Home</Link> &nbsp;|&nbsp;{" "}
          <a href="tel:+917387338634">+91-7387338634</a>
        </p>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
