
"use client";

import { useMemo, useState } from "react";
import { courses } from "@/data/courses";
import {
  Search,
  BookOpen,
  Clock,
  MessageCircle,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

export default function SkillsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(courses.map((course) => course.category))
    ),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;

      const matchesSearch =
        `${course.title} ${course.category} ${course.description}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  function buyCourse(course: (typeof courses)[number]) {
    const phone = "923267913534";

    const message =
      `Assalam-o-Alaikum Usman Bharwana! ` +
      `I am interested in the course: ${course.title}. ` +
      `Listed price: Rs. ${course.price}. ` +
      `Duration: ${course.duration}. Please share the details.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.2),transparent_60%)]">
        <div className="container mx-auto px-5 py-20 md:py-28">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <GraduationCap size={18} />
            USMAN BHARWANA ACADEMY
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Learn new skills.
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Build your future.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore courses in AI, programming, YouTube automation,
            digital marketing, video editing, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <BookOpen className="mr-2 inline text-sky-300" size={18} />
              {courses.length} course listings
            </span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <MessageCircle className="mr-2 inline text-emerald-300" size={18} />
              WhatsApp inquiries
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-14 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          Explore all courses
        </h2>
        <p className="mt-3 text-slate-400">
          Find the right course for your learning goals.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111827] px-4 py-4 focus-within:border-sky-400/50">
          <Search className="shrink-0 text-slate-400" size={21} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search courses..."
            aria-label="Search courses"
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                category === item
                  ? "bg-sky-300 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mb-5 mt-8 text-sm text-slate-400">
          Showing {filteredCourses.length} courses · Prices in PKR
        </p>

        {filteredCourses.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#131a2a] to-[#0d111d] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                    <BookOpen size={23} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-sky-200">
                  {course.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {course.description}
                </p>

                <div className="my-5 border-t border-white/10" />

                <div className="mb-6">
                  <p className="text-xs text-slate-500">Course price</p>
                  <p className="mt-1 text-3xl font-black">
                    <span className="mr-1 text-sm font-medium text-slate-400">
                      Rs.
                    </span>
                    {Number(course.price).toLocaleString("en-PK")}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={15} />
                    {course.duration}
                  </p>
                </div>

                <button
                  onClick={() => buyCourse(course)}
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 font-bold text-white transition hover:bg-emerald-400"
                >
                  <MessageCircle size={19} />
                  Enroll on WhatsApp
                  <ArrowUpRight size={17} />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
            <Search className="mx-auto mb-4 text-slate-500" size={32} />
            <h3 className="text-xl font-bold">No courses found</h3>
            <p className="mt-2 text-sm text-slate-400">
              Try another search or category.
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
    </main>
  );
}
