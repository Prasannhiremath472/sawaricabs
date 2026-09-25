import "../styles/nav.css";
import "../styles/home.css";
import Nav from "../components/Nav";
import TrustBar from "../components/TrustBar";
import RoutesGrid from "../components/RoutesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Hero from "../components/Hero";
import TrustedRides from "../components/TrustedRides";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import SiteFooter from "../components/SiteFooter";
import WhatsAppFab from "../components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Nav />
      <TrustBar />
      <Hero />
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
