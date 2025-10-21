import { personalInfo } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative py-16 text-center text-[11px] text-foreground/55">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 dark:via-white/10"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4">
        <p>
          Copyright {new Date().getFullYear()} {personalInfo.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
