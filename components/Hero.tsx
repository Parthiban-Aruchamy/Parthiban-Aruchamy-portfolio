import Image from "next/image";

const metrics = [
  { value: "14+", label: "Years, Int'l Programs" },
  { value: "$10M+", label: "Peak Annual Portfolio" },
  { value: "95%+", label: "On-Time Delivery" },
  { value: "22%", label: "Supplier Cost Reduction" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-line bg-blueprintgrid bg-grid"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-[280px_1fr] md:items-start">
        {/* Photo — title-block frame */}
        <div className="rise-in">
          <div className="crosshair crosshair-tl crosshair-tr crosshair-bl crosshair-br relative w-fit border border-blueprint/30 bg-panel p-3">
            <div className="relative h-56 w-56 overflow-hidden sm:h-64 sm:w-64">
              <Image
                src="/photo.jpg"
                alt="Portrait of Parthiban Aruchamy"
                fill
                sizes="256px"
                className="object-cover grayscale"
                priority
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-inkfade">
              Fig. 01 — Coimbatore, IN
            </p>
          </div>
        </div>

        {/* Identity block */}
        <div className="rise-in" style={{ animationDelay: "0.08s" }}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            Program &amp; Project Management / Engineering Leadership
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            Parthiban Aruchamy
            <span className="align-super text-lg text-blueprint sm:text-xl"> PMP®</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-inkfade sm:text-base">
            PMP®-certified Program/Project Manager with 14+ years of international
            experience delivering complex engineering and transformation programs
            across APAC, Europe, and the Middle East — spanning subsea/offshore
            connector systems and ADAS/Camera Monitoring System (CMS) &amp; smart-glass
            R&amp;D. I build RAID-driven governance that holds up under regulatory and
            customer scrutiny, and I'm equally at home at the technical design table
            and the executive stakeholder table.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-inkfade sm:text-base">
            M.Sc. Mechanical Engineering, Nanyang Technological University, Singapore.
            B.E. Mechanical Engineering (First Class Honours with Distinction), Anna
            University. Building foundational knowledge in AWS AI &amp; Cloud, Python,
            and Deep Learning.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="focus-ring rounded-sm border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-blueprintdeep"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/parthiban-aruchamy-pmp%C2%AE-89192728/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-sm border border-blueprint px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-blueprint transition-colors hover:bg-blueprint hover:text-paper"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* KPI datasheet strip */}
      <div className="border-t border-line bg-ink">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-paper/10 px-6 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="py-6 pl-4 first:pl-0 sm:pl-8">
              <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50">
                {m.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-paper sm:text-3xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
