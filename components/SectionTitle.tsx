import Reveal from "./Reveal";
export default function SectionTitle({ eyebrow, title, as = "h2", center, children }: {
  eyebrow?: string; title: string; as?: "h1" | "h2"; center?: boolean; children?: React.ReactNode;
}) {
  const H = as;
  return (
    <div className={`section-title${center ? " center" : ""}`}>
      {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
      <Reveal delay={100}><H>{title}</H></Reveal>
      {children && <Reveal delay={200}>{children}</Reveal>}
    </div>
  );
}
