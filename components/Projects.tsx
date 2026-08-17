import Image from "next/image";
import SectionLabel from "./SectionLabel";

type Project = {
  title: string;
  tag: string;
  dates: string;
  summary: string;
  bullets: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  screenshots: { src: string; alt: string; caption: string }[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Automated Industry News Intelligence Pipeline",
    tag: "Personal Project",
    dates: "2026",
    summary:
      "Config-driven automation pipeline aggregating and filtering weekly automotive industry news from multiple sources, with an AI-generated executive summary layer, delivered as a zero-touch scheduled digest.",
    bullets: [
      "Designed a config-driven architecture (editable source list via Excel Online) so new data sources can be added without touching flow logic.",
      "Built multi-source RSS aggregation with date-based filtering and custom HTML templating, engineering around platform auto-escaping limitations to preserve clickable formatting.",
      "Debugged nested-loop data scoping issues across multi-level iteration to correctly aggregate cross-source data.",
      "Diagnosed and resolved OAuth 2.0 redirect URI and third-party API governance restrictions during authentication integration.",
      "Integrated an AI Builder (GPT-based) analysis layer generating a weekly industry synthesis — EV/ICE trends, competitive moves, and upcoming developments — evaluated against licensing and capacity constraints for cost tradeoffs.",
    ],
    stack: [
      "Power Automate",
      "Excel Online",
      "RSS",
      "OAuth 2.0",
      "AI Builder (GPT)",
      "HTML/CSS Templating",
    ],
    metrics: [
      { value: "3+", label: "Sources Aggregated" },
      { value: "100%", label: "Manual Effort Reduced" },
      { value: "Weekly", label: "Delivery Cadence" },
    ],
    screenshots: [
      {
        src: "/projects/auto-news-flow.jpg",
        alt: "Power Automate flow diagram for the auto news digest pipeline",
        caption: "End-to-end flow — Recurrence, Excel-driven source list, nested RSS aggregation loops, email delivery",
      },
      {
        src: "/projects/auto-news-email.jpg",
        alt: "Sample weekly digest email output",
        caption: "Delivered digest — clickable headlines, summaries, and timestamps",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionLabel index="" title="Projects" />

        <ol className="space-y-14">
          {projects.map((project) => (
            <li
              key={project.title}
              className="grid gap-3 border-l border-line pl-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-0 sm:border-l-0"
            >
              <div className="sm:border-l sm:border-line sm:pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-blueprint">
                  {project.dates}
                </p>
                <p className="mt-1 text-sm text-inkfade">{project.tag}</p>
              </div>
              <div className="sm:border-l sm:border-line sm:pl-8">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-inkfade">
                  {project.summary}
                </p>

                <div className="mt-4 space-y-5">
                  <ul className="space-y-2">
                    {project.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-[15px] leading-relaxed text-inkfade"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Metrics strip */}
                {project.metrics.length > 0 && (
                  <dl className="mt-6 grid grid-cols-3 divide-x divide-line border border-line bg-ink">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="px-3 py-4 text-center sm:px-4">
                        <dd className="font-display text-xl font-semibold text-paper sm:text-2xl">
                          {m.value}
                        </dd>
                        <dt className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-[0.1em] text-paper/50 sm:text-[10px]">
                          {m.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                )}

                {/* Screenshots */}
                {project.screenshots.length > 0 && (
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {project.screenshots.map((shot) => (
                      <figure
                        key={shot.src}
                        className="crosshair crosshair-tl crosshair-br overflow-hidden border border-line bg-panel"
                      >
                        <a
                          href={shot.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring group relative block aspect-[3/4] w-full bg-paper sm:aspect-square"
                          aria-label={`Open full-size image: ${shot.alt}`}
                        >
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            sizes="(min-width: 640px) 50vw, 100vw"
                            className="object-contain object-center transition-opacity group-hover:opacity-80"
                          />
                          <span className="pointer-events-none absolute bottom-2 right-2 rounded-sm border border-line bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-inkfade opacity-0 transition-opacity group-hover:opacity-100">
                            View full ↗
                          </span>
                        </a>
                        <figcaption className="border-t border-line px-3 py-2 font-mono text-[11px] leading-snug text-inkfade">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring font-mono text-[11px] uppercase tracking-[0.1em] text-blueprint hover:underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
