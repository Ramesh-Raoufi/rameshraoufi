import { personalInfo, productionSites, getAge } from "@/lib/site-data";
import Link from "next/link";

export function Hero() {
  const metricCards = [
    {
      label: "Age",
      value: `${getAge(personalInfo.dob)} yrs`,
      helper: `Based in ${personalInfo.location}`,
    },
    ...personalInfo.metrics,
  ];

  return (
    <section className="relative overflow-hidden pt-36 pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-20 flex justify-center opacity-80"
        aria-hidden
      >
        <div className="h-64 w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.25),transparent_65%)] blur-3xl" />
      </div>
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_60%)] blur-3xl opacity-70"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="relative overflow-hidden rounded-[36px] border glass-surface-elevated backdrop-blur-2xl px-8 py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col gap-12 md:flex-row md:items-start">
            <div className="flex-1 space-y-8">
              <div className="inline-flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/60">
                  {personalInfo.title}
                  <span className="h-[2px] w-10 rounded-full bg-foreground/20" />
                  {personalInfo.location}
                </span>
                <span className="surface-muted inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/70">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
                  {personalInfo.availability.status}
                </span>
              </div>
              <h1 className="max-w-2xl bg-[linear-gradient(120deg,#f8fafc,#c7d2fe_35%,#60a5fa_70%,rgba(244,114,182,0.9))] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl lg:text-6xl dark:bg-[linear-gradient(120deg,#ffffff,#c7d2fe_35%,#38bdf8_70%,rgba(244,114,182,0.9))]">
                {personalInfo.name}
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-foreground/75">
                {personalInfo.summary}
              </p>
              <p className="text-[12px] uppercase tracking-[0.32em] text-foreground/45">
                {personalInfo.availability.responseTime}
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                <Link
                  href="#projects"
                  className="rounded-full bg-[linear-gradient(135deg,#6366f1,#60a5fa)] px-6 py-2 font-medium text-white shadow-lg shadow-indigo-900/40 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  View Projects
                </Link>
                {personalInfo.githubProfiles.map((profile) => (
                  <a
                    key={profile.url}
                    href={profile.url}
                    className="surface-muted rounded-full px-6 py-2 font-medium text-foreground/80 transition hover:text-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub @{profile.username}
                  </a>
                ))}
              </div>
              <div className="grid gap-4 text-left text-xs text-foreground/70 sm:grid-cols-2 lg:grid-cols-4">
                {metricCards.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-surface rounded-2xl border px-4 py-5 transition hover-accent-ring hover:-translate-y-1"
                  >
                    <div className="text-[10px] uppercase tracking-[0.32em] text-foreground/50">
                      {metric.label}
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-foreground">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-foreground/60">
                      {metric.helper}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-5 md:w-[320px]">
              <div className="accent-ring relative flex items-center justify-center rounded-3xl border px-6 py-8 text-center glass-surface">
                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-[0.32em] text-foreground/50">
                    Personal Snapshot
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {personalInfo.title} with a focus on building resilient, bilingual interfaces with excellent UX.
                  </p>
                </div>
              </div>
              <div className="grid gap-3">
                {productionSites.slice(0, 4).map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-start justify-between gap-3 rounded-2xl border px-4 py-4 text-left transition duration-200 glass-surface hover-accent-ring hover:-translate-y-1"
                  >
                    <div>
                      <span className="text-sm font-semibold text-foreground">
                        {site.name}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.24em] text-foreground/50">
                        {site.url.replace(/^https?:\/\//, "")}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-foreground/60 transition group-hover:text-foreground">
                      Visit
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
