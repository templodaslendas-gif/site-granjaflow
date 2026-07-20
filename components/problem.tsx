import { CircleDollarSign, FileSpreadsheet, MessageCircle, NotebookPen, TimerReset } from "lucide-react";

const fragments = [
  [TimerReset, "Problemas percebidos tarde"],
  [FileSpreadsheet, "Retrabalho para consolidar dados"],
  [MessageCircle, "Visitas mal priorizadas"],
  [CircleDollarSign, "Perdas sem contexto registrado"],
  [NotebookPen, "Decisões com dados incompletos"],
] as const;

export function Problem() {
  return (
    <section className="problem section" id="solucao">
      <div className="sectionInner">
        <p className="sectionKicker">FALHAS DE INFORMAÇÃO VIRAM CUSTO</p>
        <h2>Informação espalhada custa <span>tempo, dinheiro e margem</span></h2>
        <p className="sectionLead">Registros atrasados geram retrabalho, visitas mal priorizadas e decisões tardias. Em várias granjas, pequenas falhas operacionais se acumulam e viram custo antes que a integradora consiga agir.</p>
        <div className="fragmentGrid">
          <div className="fragmentList">
            {fragments.map(([Icon, label], index) => <div className="fragment" key={label}><span>0{index + 1}</span><Icon/><p>{label}</p></div>)}
          </div>
          <div className="flowCore">
            <div className="pulse" />
            <div className="coreLogo"><span /><span /><span /></div>
            <strong>GranjaFlow</strong>
            <small>Um único fluxo de informação</small>
          </div>
          <div className="outcomeList">
            <span>CONTROLE QUE PROTEGE A OPERAÇÃO</span>
            <strong>Enxergue o problema antes que ele aumente o custo</strong>
            <p>O GranjaFlow centraliza o que acontece no campo para a integradora priorizar, acompanhar e agir com mais informação.</p>
            <ul><li>Prioridades claras</li><li>Histórico para agir</li><li>Menos retrabalho</li></ul>
          </div>
        </div>
      </div>
    </section>
  );
}
