import type { Metadata } from "next";
import LegalLayout from "../legal-layout";

export const metadata: Metadata = { title: "Termos de Uso | GranjaFlow", description: "Condições de uso do site institucional do GranjaFlow." };

export default function TermsPage() {
  return <LegalLayout title="Termos de Uso" intro="Ao navegar no site institucional do GranjaFlow, você concorda com estas condições de uso.">
    <section><h2>1. Finalidade do site</h2><p>O site apresenta informações institucionais e comerciais sobre o GranjaFlow Gestão e o GranjaFlow Integra. Seu conteúdo não constitui proposta comercial definitiva, garantia de resultado, recomendação técnica veterinária, orientação contábil ou obrigação de contratação.</p></section>
    <section><h2>2. Demonstrações e contratação</h2><p>Recursos, escopo, implantação, suporte, preços, integrações, responsabilidades e níveis de serviço devem ser confirmados na demonstração e formalizados em instrumento próprio. Elementos identificados como demonstração e valores ilustrativos não representam resultados reais de clientes.</p></section>
    <section><h2>3. Uso permitido</h2><p>Você deve usar o site de forma lícita e compatível com sua finalidade. É proibido tentar comprometer a segurança, interromper a disponibilidade, obter acesso indevido, extrair dados de modo abusivo, inserir código malicioso ou usar conteúdo para fraude.</p></section>
    <section><h2>4. Propriedade intelectual</h2><p>A marca GranjaFlow, textos, identidade visual, interfaces, imagens próprias e demais materiais do site são protegidos pela legislação aplicável. O acesso ao site não transfere direitos de propriedade intelectual nem autoriza reprodução comercial sem permissão.</p></section>
    <section><h2>5. Marcas de terceiros</h2><p>Marcas do ecossistema agroindustrial são exibidas apenas como referências setoriais. Essa exibição não implica parceria, homologação, vínculo comercial, patrocínio, recomendação ou uso do GranjaFlow pelas empresas mencionadas. Cada marca pertence ao respectivo titular.</p></section>
    <section><h2>6. Links externos</h2><p>O site pode direcionar para WhatsApp, e-mail, área do sistema e páginas de terceiros. Não controlamos a disponibilidade, o conteúdo ou as práticas de privacidade de serviços externos.</p></section>
    <section><h2>7. Disponibilidade e atualização</h2><p>Buscamos manter o conteúdo correto e disponível, mas podem ocorrer interrupções, manutenção, mudanças técnicas ou desatualização temporária. Informações podem ser ajustadas sem aviso prévio para refletir a evolução do produto.</p></section>
    <section><h2>8. Limitação de responsabilidade</h2><p>Nos limites permitidos por lei, o uso de informações gerais do site ocorre sob responsabilidade do visitante. Decisões operacionais, produtivas, financeiras ou sanitárias devem considerar dados completos e profissionais habilitados quando necessário.</p></section>
    <section><h2>9. Privacidade</h2><p>O tratamento de dados pessoais durante a navegação é explicado na <a href="/privacidade">Política de Privacidade e LGPD</a> e na <a href="/cookies">Política de Cookies</a>.</p></section>
    <section><h2>10. Lei aplicável e contato</h2><p>Estes termos são regidos pelas leis brasileiras. Dúvidas podem ser encaminhadas para <a href="mailto:contato@granjaflow.com.br">contato@granjaflow.com.br</a>. Eventuais controvérsias observarão o foro competente conforme a legislação aplicável, inclusive regras de proteção ao consumidor quando incidentes.</p></section>
  </LegalLayout>;
}
