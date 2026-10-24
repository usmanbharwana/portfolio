
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Code2,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Clock,
  BookOpen,
  Filter,
} from "lucide-react";

import { site, skillGroups, projects } from "@/data/site";
import { courses } from "@/data/courses";

const WHATSAPP_NUMBER = "923267913534";

const categories = [
  "All",
  ...Array.from(new Set(courses.map((course) => course.category))),
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function buyCourse(course: (typeof courses)[number]) {
    const message = `Assalam-o-Alaikum Usman Bharwana! I am interested in your course: ${course.title}. Price: Rs. ${course.price}. Duration: ${course.duration}. Please share the enrollment details.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      {/* HERO SECTION */}
      <section className="grid-bg relative overflow-hidden border-b border-white/10">
        <div className="container grid min-h-[75vh] items-center gap-12 py-20 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-200">
              <Sparkles size={16} />
              Portfolio & Digital Learning
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Usman Bharwana.</span>
            </h1>

            <p className="mt-5 text-xl text-slate-300">
              Developer · AI Creator · Digital Creative
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              {site.tagline} Explore programming, web development, AI tools,
              automation, creative projects, and practical learning courses.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="rounded-full bg-sky-300 px-6 py-3 font-bold text-slate-950"
              >
                Explore Courses{" "}
                <ArrowUpRight className="ml-1 inline" size={18} />
              </a>

              <a
                href="#projects"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-7 shadow-glow">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <Code2 size={35} className="text-sky-300" />

              <p className="mt-5 text-sm uppercase tracking-[.2em] text-slate-400">
                My Digital Universe
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Learn. Build. Create.
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Web Development",
                  "Python & Java",
                  "AI Automation",
                  "Creative Media",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Your next idea starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="container py-20" id="skills">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-sky-300">
            Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            Explore the tools and technologies represented in this portfolio.
            Keep only skills you can confidently demonstrate.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/40"
            >
              <Code2 className="mb-4 text-sky-300" size={25} />

              <h3 className="text-xl font-semibold">{group.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="border-y border-white/5 bg-white/[.02] py-20"
      >
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-violet-300">
            Selected work
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Projects & Experiments
          </h2>

          <p className="mt-3 mb-8 text-slate-400">
            Replace example projects with your actual work, screenshots, and
            demo links.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass rounded-2xl p-6"
              >
                <span className="text-xs uppercase tracking-wider text-sky-300">
                  {project.category}
                </span>

                <h3 className="mt-3 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-4 text-xs text-slate-500">
                  {project.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="container py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-sky-300">
              Learn new skills
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Courses Academy
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Browse courses, compare prices and durations, and contact me on
              WhatsApp to ask about enrollment.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            <BookOpen className="mr-2 inline text-sky-300" size={18} />
            {courses.length} courses listed
          </div>
        </div>

        {/* COURSE SEARCH AND FILTER */}
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4">
            <Search className="shrink-0 text-slate-400" size={20} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search courses..."
              aria-label="Search courses"
              className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3">
            <Filter className="text-slate-400" size={18} />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Filter courses by category"
              className="max-w-[220px] bg-transparent py-4 text-sm text-white outline-none"
            >
              {categories.map((item) => (
                <option key={item} value={item} className="bg-slate-900">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* COURSE CARDS */}
        {filteredCourses.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 p-10 text-center text-slate-400">
            No courses found. Try another search.
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <article
                key={course.id ?? course.title}
                className="glass flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs text-violet-200">
                    {course.category}
                  </span>

                  <span className="text-xs text-slate-500">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">{course.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {course.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                  <Clock size={16} className="text-sky-300" />
                  {course.duration}
                </div>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">Course fee</p>

                    <p className="mt-1 text-2xl font-black text-sky-300">
                      Rs. {Number(course.price).toLocaleString("en-PK")}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => buyCourse(course)}
                    className="rounded-full bg-emerald-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
                  >
                    <MessageCircle className="mr-1 inline" size={17} />
                    Buy
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Bottom contact section removed intentionally. */}
    </main>
  );
}
