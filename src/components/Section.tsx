import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 dark:via-white/10"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-surface rounded-3xl border px-6 py-9 backdrop-blur-xl md:px-10 md:py-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              {title}
            </h2>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70 md:block dark:via-white/10" />
          </div>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
