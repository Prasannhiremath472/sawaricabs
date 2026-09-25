import { WhatsAppIcon, PhoneIcon } from "./icons";

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m2 6 10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">Sawari Cabs</div>
        <div className="site-footer__location">Kolhapur, Maharashtra, India</div>
        <div className="site-footer__socials">
          <a
            className="site-footer__social"
            href="https://wa.me/919529902335"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon width="20" height="20" />
          </a>
          <a className="site-footer__social" href="tel:+919529902335" aria-label="Call">
            <PhoneIcon width="20" height="20" strokeWidth="2" />
          </a>
          <a className="site-footer__social" href="mailto:info@sawaricabs.in" aria-label="Email">
            <MailIcon width="20" height="20" strokeWidth="2" />
          </a>
        </div>
        <div className="site-footer__contact-line">
          Phone: <a href="tel:+919529902335">+91 95299 02335</a> | <a href="mailto:info@sawaricabs.in">info@sawaricabs.in</a>
        </div>
        <div className="site-footer__copyright">© {new Date().getFullYear()} Sawari Cabs. All rights reserved.</div>
      </div>
    </footer>
  );
}
