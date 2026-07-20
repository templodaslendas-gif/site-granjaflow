"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./section-heading";
const faq=[
  ["O GranjaFlow substitui o sistema da integradora?","Não necessariamente. Ele pode complementar sistemas existentes, organizando a rotina de campo e consolidando as informações operacionais."],
  ["O produtor consegue usar pelo celular?","Sim. A interface é responsiva e foi desenhada para facilitar os registros diários no celular."],
  ["O técnico visualiza todas as granjas?","O técnico visualiza as granjas vinculadas ao seu perfil. A integradora controla os vínculos e acessos."],
  ["É possível enviar fotos e vídeos?","Sim. Ocorrências podem receber fotos e vídeos para acrescentar contexto ao acompanhamento."],
  ["O sistema funciona sem internet?","A operação offline com sincronização posterior está no roadmap e não é apresentada como recurso concluído nesta fase."],
  ["Quais informações podem ser registradas?","Lotes, mortalidade por sexo, controle interno, causas, observações, ração, GTA, ocorrências, fotos, vídeos e outros registros operacionais previstos."],
  ["Cada usuário possui um acesso diferente?","Sim. Integradora, técnico e produtor possuem perfis e visões adequadas às suas responsabilidades."],
  ["Funciona para qualquer tipo de granja?","A base nasceu para granjas integradas e está preparada para evoluir para outros tipos de produção animal após validação de cada operação."],
  ["É possível personalizar o sistema?","Necessidades específicas podem ser avaliadas durante a demonstração, sem prometer integrações ou customizações antes da análise."],
  ["Como solicitar uma demonstração?","Use qualquer botão “Solicitar demonstração” para falar com a equipe e apresentar o contexto da sua operação."],
] as const;
export function RoadmapFaq(){const [open,setOpen]=useState(0);return <>
  <section className="faq section"><div className="sectionInner faqGrid"><SectionHeading kicker="PERGUNTAS FREQUENTES" title="Tire suas dúvidas antes da demonstração" description="Transparência sobre o que o GranjaFlow faz hoje e sobre o que está em evolução."/><div className="accordion">{faq.map(([q,a],i)=><article key={q} className={open===i?"open":""}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown/></button>{open===i&&<p>{a}</p>}</article>)}</div></div></section>
  </>}
