const WHATSAPP_BASE = "https://wa.me/5545999317831";

export function whatsapp(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINKS = {
  product: whatsapp("Olá, vim pelo site do GranjaFlow e quero conhecer a solução para minha granja."),
  questions: whatsapp("Olá, vim pelo site do GranjaFlow e preciso tirar algumas dúvidas."),
  demo: whatsapp("Olá, vim pelo site do GranjaFlow e quero agendar uma demonstração."),
  ffr: whatsapp("Olá, vim pelo site do GranjaFlow e quero falar com a FFR do Brasil Technology."),
};
