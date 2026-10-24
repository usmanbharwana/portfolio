
"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";

const WHATSAPP_NUMBER = "923267913534";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills & Courses", href: "/#skills" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setContactOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [contactOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <nav className="container mx-auto flex min-h-20 flex-wrap items-center justify-between gap-4 px-5 py-3">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-black text-white shadow-lg shadow-violet-500/20">
              UB.
            </span>

            <span>
              <span className="block text-sm font-bold tracking-wide text-white">
                Usman Bharwana
              </span>
              <span className="mt-1 block text-xs text-slate-400">
                Digital Creator & Developer
              </span>
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-slate-300 transition hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="font-medium text-slate-300 transition hover:text-sky-300"
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-5 py-2.5 font-bold text-white shadow-lg shadow-violet-500/20 transition hover:scale-105"
            >
              Let&apos;s Talk ↗
            </button>
          </div>
        </nav>
      </header>

      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setContactOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0b1020] p-6 text-white shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              aria-label="Close contact form"
              className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <p className="text-xs font-bold uppercase tracking-[.25em] text-violet-300">
              Let&apos;s Connect
            </p>

            <h2
              id="contact-modal-title"
              className="mt-3 pr-8 text-3xl font-bold sm:text-4xl"
            >
              Ready to learn or collaborate?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              Contact me about courses, development projects, AI tools, and
              creative work.
            </p>

            <div className="mt-7 grid gap-7 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Mail size={19} className="text-sky-300" />
                  Send me a message
                </h3>

                <ContactForm />
              </div>

              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[.03] p-5">
                <h3 className="text-lg font-semibold">
                  Prefer WhatsApp?
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-400">
                  Contact me directly on WhatsApp for course inquiries,
                  development projects, or collaboration.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Assalam-o-Alaikum Usman Bharwana! I would like to contact you."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-emerald-300"
                >
                  <MessageCircle size={18} />
                  Contact on WhatsApp
                </a>

                <p className="mt-4 text-xs text-slate-500">
                  <Send size={13} className="mr-1 inline" />
                  Usually the quickest way to connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14] py-8">
      <div className="container mx-auto flex flex-col justify-between gap-3 px-5 text-sm text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Usman Bharwana. All rights reserved.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-sky-300"
        >
          Connect on WhatsApp ↗
        </a>
      </div>
    </footer>
  );
}
