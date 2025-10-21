import { skills } from "@/lib/site-data";

function Badge({ children }: { children: string }) {
  return (
    <span className="surface-muted rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.24em] text-foreground/70 transition hover:bg-indigo-500/20 hover:text-foreground">
      {children}
    </span>
  );
}

export function Skills() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="glass-surface rounded-2xl border px-5 py-6">
          <h3 className="text-xs uppercase tracking-[0.32em] font-semibold text-foreground/55">
            {category}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {list.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
