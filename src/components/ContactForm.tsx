"use client";
import { useState } from "react";

const field =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-300/60";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("done");
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error ?? "Kuch galat ho gaya.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Dobara koshish karein.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
      <input name="name" placeholder="Your name" required className={field} />
      <input name="email" type="email" placeholder="Your email" required className={field} />
      <textarea name="message" placeholder="Your message" required rows={5} className={field} />
      <button
        disabled={status === "sending"}
        className="rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-bold text-white shadow-lg shadow-violet-500/20 transition hover:scale-105 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "done" && <p className="text-emerald-300">Shukriya! Aapka message mil gaya.</p>}
      {status === "error" && <p className="text-rose-300">{error}</p>}
    </form>
  );
}