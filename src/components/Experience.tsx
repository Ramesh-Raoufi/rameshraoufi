import { experience } from "@/lib/site-data";

export function Experience() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.role}`}
          className="group glass-surface rounded-2xl border px-6 py-6 transition duration-200 hover-accent-ring hover:-translate-y-1"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {job.role} | {job.company}
            </h3>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground/55 dark:border-white/5">
              {job.period}
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-xs leading-relaxed text-foreground/75">
            {job.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400/80 dark:bg-indigo-300/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
