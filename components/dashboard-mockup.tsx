import { AlertTriangle, ArrowUpRight, Check, ChevronRight, PiggyBank, Wheat } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="mockupStage" aria-label="Prévia ilustrativa do painel GranjaFlow">
      <div className="dashboardShell">
        <aside className="dashSidebar">
          <div className="miniLogo"><span /><span /><span /></div>
          {[0, 1, 2, 3, 4].map((item) => <i key={item} className={item === 0 ? "active" : ""} />)}
        </aside>
        <div className="dashMain">
          <div className="dashTop"><div><small>VISÃO OPERACIONAL</small><strong>Bom dia, Integradora</strong></div><span>19 JUL</span></div>
          <div className="metricGrid">
            <div className="metricCard"><small>ANIMAIS VIVOS</small><strong>184.720</strong><em>+ 6 lotes ativos</em></div>
            <div className="metricCard warning"><small>MORTES HOJE</small><strong>127</strong><em>0,07% do plantel</em></div>
            <div className="metricCard"><small>GRANJAS NO PADRÃO</small><strong>24 / 28</strong><em>86% da operação</em></div>
          </div>
          <div className="dashContent">
            <div className="chartCard">
              <div className="cardTitle"><span>Mortalidade acumulada</span><small>Últimos 7 dias</small></div>
              <div className="chartBars">{[32, 45, 38, 58, 48, 72, 54].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
              <div className="chartLabels"><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span><span>D</span></div>
            </div>
            <div className="statusCard">
              <div className="cardTitle"><span>Atenção necessária</span><small>3 granjas</small></div>
              <div className="statusRow"><span className="statusIcon critical"><AlertTriangle size={14}/></span><p><strong>Granja Horizonte</strong><small>Mortalidade acima do padrão</small></p><ChevronRight size={15}/></div>
              <div className="statusRow"><span className="statusIcon feed"><Wheat size={14}/></span><p><strong>Granja Santa Clara</strong><small>Ração para 2 dias</small></p><ChevronRight size={15}/></div>
              <div className="statusRow"><span className="statusIcon ok"><Check size={14}/></span><p><strong>Granja Boa Vista</strong><small>Registro concluído</small></p><ChevronRight size={15}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="floatCard floatCritical"><span><AlertTriangle size={14}/> Atenção</span><strong>3 granjas críticas</strong><small>Priorização de visita atualizada</small></div>
      <div className="floatCard floatLot"><span><PiggyBank size={14}/> Lote ativo</span><strong>28.450 animais</strong><small>Dia 31 de alojamento <ArrowUpRight size={13}/></small></div>
    </div>
  );
}
