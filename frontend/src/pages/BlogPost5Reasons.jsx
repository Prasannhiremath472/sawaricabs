import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/blog-post.css";
import { PhoneIcon, WhatsAppIcon } from "../components/icons";
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

const reasons = [
  {
    num: 1,
    title: "24/7 Availability",
    body: "We are ready to move whenever you are, day or night. Whether it's an early morning flight catch or a late-night return from a family function in Kolhapur, Sawari Cabs is always available. No waiting for sunrise, no worrying about night driving — just book and go.",
  },
  {
    num: 2,
    title: "Safety First",
    body: (
      <>
        Trusted by over 10,000+ users, our drivers know intercity routes like{" "}
        <Link to="/sangli-to-pune">Sangli to Pune</Link> or <Link to="/ichalkaranji-to-pune">Ichalkaranji to Pune</Link>{" "}
        perfectly. Experienced drivers mean fewer wrong turns, better road judgment, and a calmer journey for you and
        your family.
      </>
    ),
  },
  {
    num: 3,
    title: "No Maintenance Worries",
    body: "Forget checking oil levels, tire pressure, or whether your AC will last the journey. Sawari Cabs maintains a fleet of clean, well-serviced vehicles. Just book and go — we handle everything under the bonnet.",
  },
  {
    num: 4,
    title: "Flexible Booking",
    body: (
      <>
        Choose between a <strong>One Way</strong> cab or a <strong>Return Trip</strong> depending on your schedule.
        Need to attend a wedding in Mumbai and return the same night? Or stay a few days in Goa? We've got both
        covered with no fuss.
      </>
    ),
  },
  {
    num: 5,
    title: "Direct Communication",
    body: "Use our WhatsApp or phone for instant updates on your booking, driver details, and arrival time. No apps to download, no complicated interfaces — just a quick message or call and your cab is confirmed.",
  },
];

export default function BlogPost5Reasons() {
  useEffect(() => {
    document.title = "5 Reasons to Choose Professional Cabs Over Self-Driving | Sawari Cabs Blog";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "24/7 availability, safety, zero maintenance, flexible booking — 5 reasons why professional intercity cabs beat self-driving every time."
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

      <header className="post-hero" style={{ background: "linear-gradient(135deg, #2E4BF2, #06b6d4)" }}>
        <div className="post-hero__inner">
          <Link className="post-hero__back" to="/blog">
            <BackArrowIcon />
            Back to Blog
          </Link>
          <div className="post-hero__cat">Travel Tips</div>
          <h1>5 Reasons to Choose Professional Cabs Over Self-Driving</h1>
          <div className="post-hero__meta">
            <span>
              <CalendarIcon />
              April 30, 2026
            </span>
            <span className="dot">·</span>
            <span>Sawari Cabs Team</span>
            <span className="dot">·</span>
            <span>4 min read</span>
          </div>
        </div>
      </header>

      <div className="post-layout">
        <article className="post-content">
          <p className="post-lead">
            Professional intercity cab services offer advantages that personal cars simply can't match. Here are 5
            compelling reasons to book a cab for your next intercity journey.
          </p>

          {reasons.map((reason) => (
            <div className="reason-card" key={reason.num}>
              <div className="reason-card__num">{reason.num}</div>
              <div className="reason-card__body">
                <h2>{reason.title}</h2>
                <p>{reason.body}</p>
              </div>
            </div>
          ))}

          <div className="post-cta-box">
            <h3>Ready to Book Your Cab?</h3>
            <p>Call or WhatsApp us now for instant confirmation. Clean AC cabs, experienced drivers, 24/7 support.</p>
            <div className="post-cta-box__btns">
              <a href="tel:+917387338634" className="btn-primary">
                <PhoneIcon width="16" height="16" />
                Call +91-7387338634
              </a>
              <a
                href="https://wa.me/917387338634?text=Hi%2C%20I%20want%20to%20book%20a%20cab"
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
            <Link to="/blog" className="post-nav__back">
              ← All Articles
            </Link>
            <Link to="/blog/kolhapur-to-goa-road-trip" className="post-nav__next">
              Next: Kolhapur to Goa Road Trip →
            </Link>
          </div>
        </article>

        <aside className="post-sidebar">
          <div className="sidebar-card">
            <h4>Popular Routes</h4>
            <ul>
              <li>
                <Link to="/kolhapur-to-goa">Kolhapur → Goa</Link>
              </li>
              <li>
                <Link to="/pune-to-mumbai">Pune → Mumbai</Link>
              </li>
              <li>
                <Link to="/sangli-to-pune">Sangli → Pune</Link>
              </li>
              <li>
                <Link to="/kolhapur-to-pune">Kolhapur → Pune</Link>
              </li>
              <li>
                <Link to="/mumbai-to-kolhapur">Mumbai → Kolhapur</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-card sidebar-card--cta">
            <h4>Book a Cab Now</h4>
            <p>24/7 availability. Call or WhatsApp to confirm instantly.</p>
            <a href="tel:+917387338634" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}>
              Call Now
            </a>
          </div>
          <div className="sidebar-card">
            <h4>More Articles</h4>
            <ul>
              <li>
                <Link to="/blog/kolhapur-to-goa-road-trip">Kolhapur to Goa Road Trip Guide</Link>
              </li>
              <li>
                <Link to="/blog/pune-to-mumbai-business-travel">Pune to Mumbai Business Travel</Link>
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
