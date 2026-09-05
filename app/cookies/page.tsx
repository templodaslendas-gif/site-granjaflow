import type { Metadata } from "next";
import LegalLayout from "../legal-layout";

export const metadata: Metadata = { title: "Política de Cookies | GranjaFlow", description: "Informações sobre cookies e armazenamento local usados no site GranjaFlow." };

export default function CookiesPage() {
  return <LegalLayout title="Política de Cookies" intro="Esta página descreve as tecnologias usadas para entregar o site e lembrar suas preferências de privacidade.">
    <section><h2>1. O que são cookies</h2><p>Cookies são pequenos arquivos gravados no navegador. Tecnologias semelhantes, como armazenamento local, também podem guardar preferências no próprio dispositivo.</p></section>
    <section><h2>2. O que usamos atualmente</h2><p>O site público do GranjaFlow não ativa cookies de publicidade, perfilamento ou análise comportamental nesta versão. Usamos armazenamento local essencial para registrar que você já visualizou a comunicação de cookies e evitar que ela seja exibida em toda visita.</p><h3>Preferência essencial</h3><ul><li>Nome: granjaflow-cookie-preference.</li><li>Finalidade: lembrar a opção informada no aviso de privacidade.</li><li>Local: navegador do próprio dispositivo.</li><li>Duração: permanece até ser removida pelo usuário no navegador.</li></ul></section>
    <section><h2>3. Serviços de terceiros</h2><p>Links para WhatsApp, e-mail e sites externos somente são abertos após sua ação. Esses serviços podem usar cookies próprios e estão sujeitos às políticas dos respectivos fornecedores.</p></section>
    <section><h2>4. Como gerenciar</h2><p>Você pode usar a opção Gerenciar cookies no rodapé para rever o aviso. Também pode limpar o armazenamento e os cookies pelas configurações do navegador. O bloqueio de tecnologias essenciais pode afetar preferências, mas não deve impedir a leitura do conteúdo principal do site.</p></section>
    <section><h2>5. Inclusão futura de ferramentas</h2><p>Se ferramentas de análise, publicidade ou personalização não essenciais forem adotadas, esta política e o mecanismo de consentimento deverão ser atualizados antes da ativação, com opção de aceitar ou recusar por categoria.</p></section>
    <section><h2>6. Contato</h2><p>Dúvidas sobre cookies e privacidade podem ser encaminhadas para <a href="mailto:contato@granjaflow.com.br">contato@granjaflow.com.br</a>.</p></section>
  </LegalLayout>;
}
