import { education } from "@/lib/site-data";

export function Education() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {education.map((item) => (
        <li
          key={`${item.school}-${item.graduation}`}
          className="glass-surface rounded-2xl border px-5 py-6 transition duration-200 hover-accent-ring hover:-translate-y-1"
        >
          <h3 className="text-sm font-semibold text-foreground">
            {item.school}
          </h3>
          <p className="mt-1 text-xs text-foreground/70">{item.field}</p>
          <p className="mt-3 inline-flex rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-indigo-300/90 dark:text-indigo-200/80">
            {item.graduation}
          </p>
        </li>
      ))}
    </ul>
  );
}
