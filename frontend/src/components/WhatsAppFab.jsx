import { WhatsAppIcon } from "./icons";

export default function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href="https://wa.me/919529902335?text=Hi%2C%20I%20want%20to%20book%20a%20cab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
