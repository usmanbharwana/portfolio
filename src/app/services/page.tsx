"use client";

import { useMemo, useState } from "react";
import { aiServices } from "@/data/ai-services";
import { socialServices } from "@/data/social-services";
import {
  Search,
  Sparkles,
  Share2,
  MessageCircle,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Cloud,
} from "lucide-react";

type Category = "All" | "AI Tools" | "Social Media";

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const services = useMemo(() => {
    const ai = aiServices.map((item) => ({
      ...item,
      platform: "AI Tools",
    }));

    const social = socialServices.map((item) => ({
      ...item,
      category: item.platform,
      type: "service",
    }));

    return [
      ...(category !== "Social Media" ? ai : []),
      ...(category !== "AI Tools" ? social : []),
    ].filter((item) =>
      `${item.name} ${item.category} ${item.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, category]);

  const buyOnWhatsApp = (name: string, price: number, duration: string) => {
    const phone = "923267913534";
    const message = `Assalam-o-Alaikum Usman Bharwana! I am interested in your service: ${name}. Listed price: Rs. ${price.toLocaleString("en-PK")}. Duration: ${duration}. Please share the details and availability.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.22),transparent_55%)]" />

        <div className="container relative mx-auto px-5 py-20 md:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <Sparkles size={16} />
            USMAN BHARWANA DIGITAL MARKETPLACE
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Digital services.
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Limitless possibilities.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Explore AI-powered solutions, creative services, and social media
            support — all in one place.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              <Zap size={17} className="text-sky-300" />
              AI-powered solutions
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              <Share2 size={17} className="text-violet-300" />
              Social media services
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              <ShieldCheck size={17} className="text-emerald-300" />
              Contact before ordering
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="container mx-auto px-5 py-14 md:py-20">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
            Explore marketplace
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Find your next service
          </h2>
          <p className="mt-3 text-slate-400">
            Search the available listings and contact us through WhatsApp to
            discuss your order.
          </p>
        </div>

        {/* Search */}
        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111827] px-4 py-4 focus-within:border-sky-400/60">
          <Search className="shrink-0 text-slate-400" size={21} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search AI tools, video editing, ads..."
            aria-label="Search services"
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {(["All", "AI Tools", "Social Media"] as Category[]).map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                category === item
                  ? "bg-sky-300 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {item === "All"
                ? "All Services"
                : item === "AI Tools"
                  ? "AI Tools & Cloud"
                  : "Social Media"}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            {services.length} services available in this catalogue
          </p>
          <span className="text-xs text-slate-500">Prices in PKR</span>
        </div>

        {/* Service cards */}
        {services.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const isSocial = service.platform !== "AI Tools";

              return (
                <article
                  key={service.id}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#131a2a] to-[#0d111d] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_15px_50px_rgba(56,189,248,0.08)]"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isSocial
                          ? "bg-violet-400/10 text-violet-300"
                          : "bg-sky-400/10 text-sky-300"
                      }`}
                    >
                      {isSocial ? (
                        <Share2 size={23} />
                      ) : service.category === "Cloud" ? (
                        <Cloud size={23} />
                      ) : (
                        <Sparkles size={23} />
                      )}
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold transition group-hover:text-sky-200">
                    {service.name}
                  </h3>

                  <p className="mt-3 min-h-[60px] text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>

                  <div className="my-5 border-t border-white/10" />

                  <div className="mb-6">
                    <p className="text-xs text-slate-500">Starting price</p>
                    <p className="mt-1 text-3xl font-black tracking-tight">
                      <span className="mr-1 text-sm font-medium text-slate-400">
                        Rs.
                      </span>
                      {service.price.toLocaleString("en-PK")}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      Duration: {service.duration}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      buyOnWhatsApp(
                        service.name,
                        service.price,
                        service.duration
                      )
                    }
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 font-bold text-white transition hover:bg-emerald-400"
                  >
                    <MessageCircle size={19} />
                    Inquire on WhatsApp
                    <ArrowUpRight size={17} />
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
            <Search className="mx-auto mb-4 text-slate-500" size={32} />
            <h3 className="text-xl font-bold">No services found</h3>
            <p className="mt-2 text-sm text-slate-400">
              Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-full border border-white/15 px-5 py-2 text-sm hover:bg-white/10"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Contact banner */}
      <section className="container mx-auto px-5 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-950/70 to-slate-900 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Need something custom?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Let&apos;s discuss your project.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Contact Usman Bharwana to confirm availability, final pricing,
              delivery time, and service details before placing your order.
            </p>

            <button
              onClick={() =>
                buyOnWhatsApp("Custom digital service inquiry", 0, "To be agreed")
              }
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-sky-100"
            >
              <MessageCircle size={19} />
              Contact Usman
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}