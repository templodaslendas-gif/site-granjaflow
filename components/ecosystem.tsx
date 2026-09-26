import { Building2, ClipboardCheck, Smartphone, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";

const roles = [
  { icon: Building2, label: "Integradora", text: "Visão consolidada da operação, indicadores e gestão de vínculos.", tone: "green" },
  { icon: ClipboardCheck, label: "Técnico", text: "Acompanhamento das granjas e prioridades de visita mais claras.", tone: "blue" },
  { icon: Smartphone, label: "Produtor", text: "Registros simples e rápidos, feitos diretamente no campo.", tone: "yellow" },
];

export function Ecosystem() {
  return <section className="ecosystem section" id="perfis"><div className="sectionInner">
    <SectionHeading kicker="UM ECOSSISTEMA, TRÊS PERSPECTIVAS" title="Cada perfil vê o que precisa. A operação inteira ganha contexto" description="Produtor, técnico e integradora trabalham sobre a mesma base de informação, com acessos e visões adequados a cada responsabilidade." light />
    <div className="ecosystemMap" data-reveal>
      <div className="connectorLine" aria-hidden="true" />
      {roles.map(({ icon: Icon, label, text, tone }) => <article className={`roleCard ${tone}`} key={label}><div className="roleIcon"><Icon /></div><small>PERFIL DE ACESSO</small><h3>{label}</h3><p>{text}</p><span><ShieldCheck size={13}/> Acesso direcionado</span></article>)}
      <div className="ecosystemCore"><div className="coreBars"><i/><i/><i/></div><strong>GranjaFlow</strong><small>Dados centralizados</small></div>
    </div>
  </div></section>;
}
