import { projects } from "@/lib/site-data";

export function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="group relative overflow-hidden rounded-3xl border px-6 py-6 transition duration-200 glass-surface hover-accent-ring hover:-translate-y-1"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-tight text-foreground transition group-hover:text-foreground">
              {project.name}
            </h3>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground/55 dark:border-white/5">
              {project.stack[0]}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-foreground/45">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="surface-muted rounded-full px-3 py-1 text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-xs leading-relaxed text-foreground/75">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/80 dark:bg-emerald-300/80" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/60 transition hover:text-foreground"
            >
              Visit Live Site
              <span aria-hidden className="text-[13px]">
                {"->"}
              </span>
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
