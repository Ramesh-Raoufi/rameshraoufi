import { personalInfo } from "@/lib/site-data";

export function Contact() {
  return (
    <div className="glass-surface rounded-2xl border px-6 py-6 text-sm text-foreground/75">
      <p className="leading-relaxed">
        I am open to frontend roles, collaboration, and freelance opportunities. Drop a note if you would like to explore a project or chat about design systems.
      </p>
      <div className="mt-5 flex flex-col gap-3 text-xs">
        <div className="rounded-2xl border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.32em] text-foreground/55">
          <p>{personalInfo.availability.status}</p>
          <p className="mt-1 text-[10px] tracking-[0.28em] text-foreground/45">
            {personalInfo.availability.responseTime}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="glow-underline w-fit text-foreground/80 transition hover:text-foreground"
          >
            {personalInfo.email}
          </a>
          {personalInfo.githubProfiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              className="glow-underline w-fit text-foreground/80 transition hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub @{profile.username}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
