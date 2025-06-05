import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../../styles/whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "04242269186"; // Replace with your phone number (include country code)
  const message = "Hello, I have a question!"; // Default message (optional)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us via WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="sr-only">Contact us via WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;