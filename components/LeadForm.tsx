"use client";
import { useState } from "react";

type Field = { name: string; label: string; type?: string; required?: boolean; full?: boolean; options?: string[]; textarea?: boolean };

export default function LeadForm({ fields, type, submitLabel = "Submit Message" }: { fields: Field[]; type: "contact" | "quote"; submitLabel?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type, ...data }) });
      if (!r.ok) throw new Error();
      setState("ok");
      e.currentTarget?.reset();
    } catch { setState("err"); }
  }
  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="form-grid">
        {fields.map((f) => {
          const cls = f.full ? "full" : "";
          const id = `f-${f.name}`;
          return (
            <div className={cls} key={f.name}>
              <label htmlFor={id} className="sr-only">{f.label}</label>
              {f.textarea ? (
                <textarea id={id} name={f.name} className="field" placeholder={f.label} required={f.required} />
              ) : f.options ? (
                <select id={id} name={f.name} className="field" required={f.required} defaultValue="">
                  <option value="" disabled>{f.label}</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={id} name={f.name} type={f.type || "text"} className="field" placeholder={f.label} required={f.required} />
              )}
            </div>
          );
        })}
        <div className="full"><button className="btn" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : submitLabel}</button></div>
      </div>
      {state === "ok" && <p className="form-msg ok">Thank you! Our team will get back to you shortly.</p>}
      {state === "err" && <p className="form-msg err">Something went wrong. Please call us or try again.</p>}
    </form>
  );
}
