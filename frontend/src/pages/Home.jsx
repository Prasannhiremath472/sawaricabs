import "../styles/home.css";
import SiteNavbar from "../components/SiteNavbar";
import TrustBar from "../components/TrustBar";
import BookingCard from "../components/BookingCard";
import RoutesGrid from "../components/RoutesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Hero from "../components/Hero";
import TrustedRides from "../components/TrustedRides";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import SiteFooter from "../components/SiteFooter";
import WhatsAppFab from "../components/WhatsAppFab";

function BookingSection() {
  return (
    <section id="book" className="booking-section">
      <div className="booking-section__copy">
        <span className="booking-section__kicker">Book in under a minute</span>
        <h2>Tell us where. We'll be there.</h2>
        <p>
          Private AC cabs, no sharing. Fare is confirmed before you travel — call or WhatsApp and
          we'll lock in your ride.
        </p>
        <dl className="booking-section__stats">
          <div>
            <dt>9</dt>
            <dd>Routes served daily</dd>
          </div>
          <div>
            <dt>10,000+</dt>
            <dd>Riders and counting</dd>
          </div>
          <div>
            <dt>24/7</dt>
            <dd>Call or WhatsApp anytime</dd>
          </div>
        </dl>
      </div>
      <BookingCard />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <TrustBar />
      <Hero />
      <BookingSection />
      <RoutesGrid />
      <WhyChooseUs />
      <TrustedRides />
      <Testimonials />
      <Faq />
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
