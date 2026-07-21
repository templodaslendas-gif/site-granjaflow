import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/links";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsappFloat"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar demonstração pelo WhatsApp"
      data-track="floating-whatsapp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Agendar demonstração</span>
    </a>
  );
}
