"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "granjaflow-cookie-preference";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const initialCheck = window.setTimeout(() => setVisible(!window.localStorage.getItem(STORAGE_KEY)), 0);
    const openSettings = () => setVisible(true);
    const controls = document.querySelectorAll<HTMLElement>("[data-open-cookie-settings]");
    controls.forEach(control => control.addEventListener("click", openSettings));
    return () => {
      window.clearTimeout(initialCheck);
      controls.forEach(control => control.removeEventListener("click", openSettings));
    };
  }, []);

  const save = (value: "essential" | "acknowledged") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferências de cookies" role="dialog" aria-modal="false">
      <div>
        <h2>Privacidade e cookies</h2>
        <p>Este site usa apenas armazenamento essencial para lembrar sua escolha. Não ativamos cookies de publicidade nesta versão. Consulte a <a href="/cookies">Política de Cookies</a>.</p>
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={() => save("essential")}>Somente essenciais</button>
        <button className="cookie-accept" type="button" onClick={() => save("acknowledged")}>Entendi</button>
      </div>
    </aside>
  );
}
