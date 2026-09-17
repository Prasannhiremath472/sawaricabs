import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const FAQS = [
  {
    question: "Are drivers background-checked?",
    answer:
      "Yes. All our drivers go through identity verification and regular performance checks. We also monitor feedback to maintain high standards."
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer flexible refunds depending on the booking terms. For eligible cancellations within the policy window, refunds are processed within 5-7 business days."
  },
  {
    question: "How do you ensure vehicle cleanliness?",
    answer:
      "Vehicles are inspected regularly and drivers are required to follow a cleaning checklist to ensure hygiene and comfort for every ride."
  },
  {
    question: "Can I change or cancel my booking?",
    answer:
      "Yes. You can change or cancel bookings via the chat or call support. Certain late changes may incur fees per the booking terms."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__head">
          <span className="faq__kicker">Good to know</span>
          <h2>Frequently asked questions</h2>
          <p>Answers to common concerns about safety, refunds and booking changes</p>
        </div>
        <div className="faq__list">
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq__item" key={question}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {question}
                  <ChevronDownIcon
                    className={isOpen ? "faq__chevron is-open" : "faq__chevron"}
                    width="20"
                    height="20"
                    strokeWidth="2"
                  />
                </button>
                {isOpen && <p className="faq__answer">{answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
