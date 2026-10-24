import { ImageResponse } from "next/og";

export const alt = "GranjaFlow, gestão inteligente para a suinocultura";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "72px 82px", color: "#031b38", background: "linear-gradient(125deg, #f7fbf9 0%, #ffffff 50%, #e8f6ef 100%)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: "64%", display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#0b7e48", fontSize: 30, fontWeight: 700, marginBottom: 28 }}>GranjaFlow</div>
        <div style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: "-3px", fontWeight: 800 }}>Mais controle, mais resultado</div>
        <div style={{ marginTop: 28, color: "#4c6479", fontSize: 30, lineHeight: 1.35 }}>Gestão de lotes, ração, custos e financeiro para a suinocultura</div>
      </div>
      <div style={{ width: 250, height: 250, borderRadius: 125, display: "flex", alignItems: "center", justifyContent: "center", color: "white", background: "#16a05d", fontSize: 52, fontWeight: 800 }}>GF</div>
    </div>,
    size,
  );
}
