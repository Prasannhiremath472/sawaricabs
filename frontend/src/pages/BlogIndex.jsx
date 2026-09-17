import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/blog-index.css";
import { PhoneIcon, ArrowRightIcon } from "../components/icons";
import WhatsAppFab from "../components/WhatsAppFab";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const posts = [
  {
    slug: "5-reasons-professional-cabs",
    category: "Travel Tips",
    readTime: "4 min read",
    title: "5 Reasons to Choose Professional Cabs Over Self-Driving",
    excerpt:
      "Discover why booking a professional intercity cab beats driving yourself — from 24/7 availability and safety to zero maintenance worries.",
    icon: (
      <svg className="blog-card__thumb-icon" viewBox="0 0 24 24" fill="none">
        <path d="M5 11l1.2-3.8A3 3 0 0 1 9.05 5h5.9a3 3 0 0 1 2.85 2.2L19 11" stroke="white" strokeWidth="1.5" />
        <path d="M4 11h16v6H4v-6Z" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "kolhapur-to-goa-road-trip",
    category: "Road Trip",
    readTime: "3 min read",
    title: "Weekend Escapes: Planning Your Kolhapur to Goa Road Trip",
    excerpt:
      "From Kolhapur's historic streets to Goa's sunny shores — why hiring a professional cab makes your weekend escape stress-free and affordable.",
    icon: (
      <svg className="blog-card__thumb-icon" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "pune-to-mumbai-business-travel",
    category: "Business Travel",
    readTime: "3 min read",
    title: "The Ultimate Business Traveler's Guide: Pune to Mumbai",
    excerpt:
      "For professionals on the Pune-Mumbai corridor — how a private cab keeps you punctual, productive, and door-to-door stress-free every time.",
    icon: (
      <svg className="blog-card__thumb-icon" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Blog | Sawari Cabs — Intercity Cab Tips & Travel Guides";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read Sawari Cabs blog for intercity travel tips, route guides, and cab booking advice across Maharashtra and Goa."
      );
    }
  }, []);

  return (
    <div className="blog-index-page">
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

      <section className="blog-hero">
        <div className="blog-hero__eyebrow">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Sawari Cabs Blog
        </div>
        <h1>Travel Tips &amp; Route Guides</h1>
        <p>Helpful guides for intercity travellers across Maharashtra and Goa.</p>
      </section>

      <section className="blog-section">
        <h2 className="blog-section__title">Latest Articles</h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="blog-card" to={`/blog/${post.slug}`} key={post.slug}>
              <div className="blog-card__thumb">
                {post.icon}
                <span className="blog-card__cat">{post.category}</span>
                <span className="blog-card__read">{post.readTime}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span>
                    <CalendarIcon />
                    Apr 30, 2026
                  </span>
                  <span>·</span>
                  <span>Sawari Cabs Team</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__link">
                  Read Article
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
