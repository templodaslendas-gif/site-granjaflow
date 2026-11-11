import { WHATSAPP_LINKS } from "@/lib/links";
import { ArrowIcon, WhatsAppIcon } from "./icons";

export function ContactCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-panel${compact ? " contact-panel-compact" : ""}`}>
      <div>
        <span>GESTÃO PARA SUINOCULTURA</span>
        <strong>Conheça o GranjaFlow na sua realidade</strong>
        <p>Fale com a equipe para entender recursos, implantação e condições comerciais</p>
      </div>
      <div className="contact-actions">
        <a className="button" href={WHATSAPP_LINKS.product} target="_blank" rel="noreferrer"><WhatsAppIcon /> Conhecer o GranjaFlow</a>
        <a className="button-secondary" href={WHATSAPP_LINKS.questions} target="_blank" rel="noreferrer">Tirar dúvidas <ArrowIcon /></a>
      </div>
    </div>
  );
}
