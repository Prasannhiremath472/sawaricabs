import { ShieldIcon, ClockIcon, PinIcon, UsersIcon } from "./icons";

const FEATURES = [
  {
    Icon: ShieldIcon,
    title: "Safe & secure",
    description: "Verified drivers and secure payment options for your peace of mind."
  },
  {
    Icon: ClockIcon,
    title: "24/7 service",
    description: "Book anytime, anywhere. We're always here for your travel needs."
  },
  {
    Icon: PinIcon,
    title: "Best prices",
    description: "Transparent pricing with no hidden charges. Get the best value."
  },
  {
    Icon: UsersIcon,
    title: "Customer support",
    description: "Dedicated support team available round the clock to assist you."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="why">
      <div className="why__head">
        <span className="why__kicker">Why Sawari Cabs</span>
        <h2>Built for a better ride</h2>
      </div>
      <div className="why__grid">
        {FEATURES.map(({ Icon, title, description }) => (
          <div key={title} className="why__card">
            <span className="why__icon">
              <Icon width="24" height="24" strokeWidth="2" />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
