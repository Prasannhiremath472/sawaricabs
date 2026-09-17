import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/blog-post.css";
import { PhoneIcon, WhatsAppIcon, ShieldIcon, UsersIcon } from "../components/icons";
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

function StarBurstIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogPostKolhapurGoa() {
  useEffect(() => {
    document.title = "Weekend Escapes: Kolhapur to Goa Road Trip | Sawari Cabs Blog";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Plan your Kolhapur to Goa road trip stress-free. Hire a professional cab, enjoy group travel, and get transparent pricing with Sawari Cabs."
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

      <header className="post-hero" style={{ background: "linear-gradient(135deg, #181A2A, #2E4BF2)" }}>
        <div className="post-hero__inner">
          <Link className="post-hero__back" to="/blog">
            <BackArrowIcon />
            Back to Blog
          </Link>
          <div className="post-hero__cat">Road Trip</div>
          <h1>Weekend Escapes: Planning Your Kolhapur to Goa Road Trip</h1>
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
            Nothing beats the transition from the historic streets of Kolhapur to the sunny shores of Goa. Here's
            why hiring a professional cab makes this weekend escape even better.
          </p>

          <div className="highlight-box">
            <strong>Route at a glance:</strong> Kolhapur → Goa &nbsp;|&nbsp; ~225 km &nbsp;|&nbsp; 5–6 hrs &nbsp;|&nbsp;
            via Amboli Ghat &amp; Sawantwadi
          </div>

          <div className="reason-card">
            <div className="reason-card__icon">
              <ShieldIcon width="22" height="22" />
            </div>
            <div className="reason-card__body">
              <h2>Stress-Free Driving</h2>
              <p>
                Why deal with road fatigue when you can hire a professional for your{" "}
                <Link to="/kolhapur-to-goa">Kolhapur to Goa Taxi</Link>? The route via Amboli Ghat is scenic but has
                sharp curves and elevation changes. Our experienced drivers know every bend, making the journey safe
                and enjoyable for everyone in the car.
              </p>
            </div>
          </div>

          <div className="reason-card">
            <div className="reason-card__icon">
              <UsersIcon width="22" height="22" />
            </div>
            <div className="reason-card__body">
              <h2>Group Travel Made Easy</h2>
              <p>
                Whether it's a family trip or a group of friends heading to Calangute or Baga, Sawari Cabs offers
                reliable SUV and sedan options to fit your crew. Book a single comfortable cab instead of splitting
                across multiple vehicles — everyone arrives together, on time.
              </p>
            </div>
          </div>

          <div className="reason-card">
            <div className="reason-card__icon">
              <StarBurstIcon />
            </div>
            <div className="reason-card__body">
              <h2>Transparent Pricing</h2>
              <p>
                With our focus on affordable travel, you get a clear fare discussed before the trip — no hidden
                charges, no surprises. Spend more on the beach and less on the commute. One-way and return trip
                options available to match your itinerary perfectly.
              </p>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <strong>Pickup points</strong>
              <span>Home, hotel, railway station, bus stand in Kolhapur</span>
            </div>
            <div className="info-item">
              <strong>Drop options</strong>
              <span>Panjim, Madgaon, Calangute, Baga, Candolim, Goa airport</span>
            </div>
            <div className="info-item">
              <strong>Cab types</strong>
              <span>Hatchback, Sedan, SUV — based on group size</span>
            </div>
            <div className="info-item">
              <strong>Stops</strong>
              <span>Meal and rest stops can be arranged with driver</span>
            </div>
          </div>

          <div className="post-cta-box">
            <h3>Plan Your Goa Trip Today</h3>
            <p>Call or WhatsApp to confirm your Kolhapur to Goa cab instantly. Clean AC cabs, experienced drivers.</p>
            <div className="post-cta-box__btns">
              <a href="tel:+917387338634" className="btn-primary">
                <PhoneIcon width="16" height="16" />
                Call +91-7387338634
              </a>
              <a
                href="https://wa.me/917387338634?text=Hi%2C%20I%20want%20to%20book%20Kolhapur%20to%20Goa%20cab"
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
            <Link to="/blog/5-reasons-professional-cabs" className="post-nav__back">
              ← 5 Reasons to Choose Professional Cabs
            </Link>
            <Link to="/blog/pune-to-mumbai-business-travel" className="post-nav__next">
              Next: Pune to Mumbai Guide →
            </Link>
          </div>
        </article>

        <aside className="post-sidebar">
          <div className="sidebar-card">
            <h4>Related Routes</h4>
            <ul>
              <li>
                <Link to="/kolhapur-to-goa">Kolhapur → Goa</Link>
              </li>
              <li>
                <Link to="/goa-to-kolhapur">Goa → Kolhapur</Link>
              </li>
              <li>
                <Link to="/kolhapur-to-pune">Kolhapur → Pune</Link>
              </li>
              <li>
                <Link to="/kolhapur-to-mumbai">Kolhapur → Mumbai</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-card sidebar-card--cta">
            <h4>Book Kolhapur–Goa Cab</h4>
            <p>Instant confirmation. 24/7 support.</p>
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
