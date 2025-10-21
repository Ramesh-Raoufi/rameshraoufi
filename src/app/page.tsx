import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { personalInfo, aiHighlights } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="education" title="Education">
        <Education />
      </Section>
      <Section id="ai" title="AI & Automation">
        <p>{aiHighlights.description}</p>
        <div className="grid gap-4 text-sm leading-relaxed text-foreground/80 md:grid-cols-3">
          {aiHighlights.highlights.map((highlight) => (
            <div
              key={highlight}
              className="glass-surface rounded-2xl border px-5 py-5 text-xs leading-relaxed"
            >
              {highlight}
            </div>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-foreground/50">
          Tools in rotation: {aiHighlights.tools.join(", ")}.
        </p>
      </Section>
      <Section id="about" title="About & Interests">
        {personalInfo.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="grid gap-6 text-xs text-foreground/75 md:grid-cols-2">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.32em] text-foreground/50">
              Currently exploring
            </h3>
            <ul className="mt-2 space-y-2">
              {personalInfo.learning.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.32em] text-foreground/50">
              Personal interests
            </h3>
            <ul className="mt-2 space-y-2">
              {personalInfo.interests.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
