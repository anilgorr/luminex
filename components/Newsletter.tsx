"use client";
import { useState } from "react";
import { ArrowRight } from "./Icons";
export default function Newsletter() {
  const [done, setDone] = useState(false);
  return done ? <p>Thanks — you&apos;re subscribed.</p> : (
    <form className="newsletter" onSubmit={async (e) => {
      e.preventDefault();
      const email = new FormData(e.currentTarget).get("email");
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "newsletter", email }) });
      setDone(true);
    }}>
      <label htmlFor="nl-email" className="sr-only">Email</label>
      <input id="nl-email" name="email" type="email" placeholder="Enter your email" required />
      <button type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button>
    </form>
  );
}
