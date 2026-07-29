import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
       
        <h2 className="mt-3 font-display text-2xl font-semibold text-paper sm:text-4xl">
          Let's talk about your next program.
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-paper/60">
          Open to Program Manager, Project Manager, and Engineering Lead roles
          across Aerospace &amp; Defence, Automotive/ADAS, Oil &amp; Gas / Energy,
          and Industrial consulting.
        </p>

        <div className="mt-10 flex flex-col gap-4 font-mono text-sm sm:flex-row sm:items-center sm:gap-10">
          <a
            href="mailto:parthiban89@gmail.com"
            className="focus-ring rounded-sm text-paper underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-brass"
          >
            parthiban89@gmail.com
          </a>
          <a
            href="tel:+918270688237"
            className="focus-ring rounded-sm text-paper underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-brass"
          >
            +91 82706 88237
          </a>
          <a
            href="https://www.linkedin.com/in/parthiban-aruchamy-pmp%C2%AE-89192728/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-sm text-paper underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-brass"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/40 sm:flex-row">
          <span>© Parthiban Aruchamy — {new Date().getFullYear()}</span>
          <span>Coimbatore, Tamil Nadu, India</span>
        </div>
      </div>
    </section>
  );
}
