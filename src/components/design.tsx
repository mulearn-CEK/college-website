import type { ReactNode } from "react";

export function PageHeader({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className="page-header"><div className="container"><p className="section-label">{label}</p><h1>{title}</h1><p>{children}</p></div></section>;
}

export function Placeholder({ icon, title, hint, className = "" }: { icon: string; title: string; hint?: string; className?: string }) {
  return <div className={`img-placeholder ${className}`}><span className="icon">{icon}</span><span className="hint">{title}</span>{hint && <span className="sub-hint">{hint}</span>}</div>;
}

export function SectionIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return <><p className="section-label">{label}</p><h2 className="section-title">{title}</h2>{children && <p className="section-sub" style={{marginBottom:36}}>{children}</p>}</>;
}
