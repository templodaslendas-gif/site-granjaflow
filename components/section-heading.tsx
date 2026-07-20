export function SectionHeading({ kicker, title, description, light = false }: { kicker: string; title: string; description?: string; light?: boolean }) {
  return <div className={`sectionHeading ${light ? "light" : ""}`} data-reveal><p>{kicker}</p><h2>{title}</h2>{description && <span>{description}</span>}</div>;
}
