"use client";
import { useState } from "react";
import { waLink } from "@/lib/site";
import { track } from "./Analytics";

type Field = { name: string; label: string; type?: string; required?: boolean; full?: boolean; options?: string[]; textarea?: boolean };

export default function LeadForm({ fields, type, submitLabel = "Send on WhatsApp" }: { fields: Field[]; type: "contact" | "quote"; submitLabel?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  // Enquiries go to WhatsApp first (client's primary channel); the API call only logs a copy.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const region = data.region === "Bhutan" ? "bhutan" : "india";
    const lines = fields
      .filter((f) => f.name !== "region" && data[f.name])
      .map((f) => `${f.label.replace(/\?$/, "")}: ${data[f.name]}`);
    const text = `Hi Luminex, ${type === "quote" ? "I'd like a quote" : "I have an enquiry"}.\n\n${lines.join("\n")}`;
    // Opened synchronously inside the submit handler so browsers don't block it as a pop-up.
    window.open(waLink(region, text), "_blank", "noopener,noreferrer");
    track("generate_lead", { form: type, region });
    setState("ok");
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type, ...data }) }).catch(() => {});
    form.reset();
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
      {state === "ok" && <p className="form-msg ok">WhatsApp has opened with your details — just press send.</p>}
      {state === "err" && <p className="form-msg err">Something went wrong. Please call us or try again.</p>}
    </form>
  );
}
