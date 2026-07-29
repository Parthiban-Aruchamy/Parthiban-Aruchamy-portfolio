import SectionLabel from "./SectionLabel";

type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  groups: { heading?: string; bullets: string[] }[];
};

const roles: Role[] = [
  {
    title: "Design Lead — Project Engineering (APAC/Regional)",
    org: "Gauzy",
    location: "Singapore (remote from India, contractor model, 2020–2026)",
    dates: "Aug 2018 – May 2026",
    groups: [
      {
        bullets: [
          "Led end-to-end delivery of 8+ concurrent engineering and R&D projects across ADAS-CMS, collision detection, smart glass, and aircraft/automotive cabin windows in APAC and the Middle East, managing portfolios valued at approximately $3M+ annually.",
          "Managed cross-functional teams of 15+ across Engineering, Manufacturing, and Supply Chain, sustaining on-time delivery above 95%.",
          "Ran phase-gated design reviews and risk assessment workshops driving innovation, quality, and regulatory compliance through the CMS product development lifecycle.",
          "Partnered with stakeholders across France HQ, regional business units, and client organisations to align delivery roadmaps and govern program execution.",
          "Restructured Asia-based supplier sourcing, cutting unit costs by 22% while holding or improving lead times.",
          "Implemented Monday.com as the central tracking platform, replacing spreadsheet reporting with live KPI dashboards visible to France HQ and regional leads.",
          "Used AI tools (Claude, Microsoft Copilot) to speed up technical presentations and customer-facing materials, cutting prep time by 15–20% during peak proposal periods.",
          "Contributed feasibility analysis, cost estimation, and technical solutioning during RFQ stages, helping secure contracts with OEM bus builders including Yutong, Volvo, and Golden Dragon.",
        ],
      },
    ],
  },
  {
    title: "Design / Subsea Support Engineer",
    org: "Oil States Industries (Asia) Pte Ltd",
    location: "Singapore",
    dates: "Jun 2013 – Aug 2018",
    groups: [
      {
        heading: "Design & Subsea Engineering",
        bullets: [
          "Developed and delivered subsea equipment (connectors, risers, hubs) with a focus on DFM, standardisation, and lifecycle support to API and industry standards.",
          "Performed design calculations, pressure testing oversight, and reverse engineering of subsea equipment (valves, mandrel, flex joint, wellhead equipment) for refurbishment and reuse.",
          "Improved engineering documentation workflows, cutting preparation time by 30% per project while strengthening compliance control.",
        ],
      },
      {
        heading: "Project Engineering & Cost Estimation",
        bullets: [
          "Managed end-to-end project engineering delivery for onshore and subsea projects against contractual scope, schedule, cost, and quality.",
          "Served as Project Engineer on connector casing projects for Middle East customers (ADNOC, KOC, Total Qatar), contributing to an annual portfolio valued at $10M+.",
          "Coordinated cross-functional teams across Singapore and Aberdeen for stakeholder alignment, resource allocation, and delivery governance.",
          "Built detailed cost estimation models across materials, labour, and logistics, supporting competitive bid development.",
        ],
      },
      {
        heading: "Quality & Systems Leadership",
        bullets: [
          "Led enterprise-wide rollout of the MasterControl Quality Management System across 100+ users, improving process standardisation and document control.",
          "Certified Internal Auditor for ISO 9001, ISO 14001, and OHSAS 18001.",
        ],
      },
    ],
  },
  {
    title: "Trainee Engineer",
    org: "McKinnon India Pvt. Ltd",
    location: "India",
    dates: "May 2010 – Jun 2011",
    groups: [],
  },
];

const toolkit = [
  "Jira",
  "Confluence",
  "Monday.com",
  "Primavera P6",
  "MS Project",
  "PTC Creo",
  "Windchill",
  "CATIA V5",
  "SolidWorks",
  "Autodesk Inventor",
  "AutoCAD",
  "API 5A / 6A / 16A / 16C",
  "ASME",
  "IATF 16949",
  "Agile/Scrum",
  "Lean / 5S",
  "Value Stream Mapping",
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionLabel index="02" title="Experience" />

        <ol className="space-y-14">
          {roles.map((role) => (
            <li
              key={role.title + role.org}
              className="grid gap-3 border-l border-line pl-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-0 sm:border-l-0"
            >
              <div className="sm:border-l sm:border-line sm:pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-blueprint">
                  {role.dates}
                </p>
                <p className="mt-1 text-sm text-inkfade">{role.location}</p>
              </div>
              <div className="sm:border-l sm:border-line sm:pl-8">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {role.title}
                </h3>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.1em] text-brass">
                  {role.org}
                </p>

                {role.groups.length > 0 && (
                  <div className="mt-4 space-y-5">
                    {role.groups.map((group) => (
                      <div key={group.heading ?? "main"}>
                        {group.heading && (
                          <p className="mb-2 text-sm font-semibold text-ink">
                            {group.heading}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {group.bullets.map((b) => (
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
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Toolkit */}
        <div className="mt-16">
          <p className="dim-line font-mono text-xs uppercase tracking-[0.15em] text-inkfade">
            Toolkit &amp; Standards
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {toolkit.map((t) => (
              <li
                key={t}
                className="rounded-sm border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Certification */}
        <div className="mt-16">
          <p className="dim-line font-mono text-xs uppercase tracking-[0.15em] text-inkfade">
            Certification
          </p>
          <a
            href="https://www.credly.com/badges/9355af96-0a40-406a-989c-84ccb3996ad6/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group mt-5 flex max-w-md items-center gap-5 rounded-sm border border-line bg-panel p-5 transition-colors hover:border-blueprint"
          >
            <div className="crosshair crosshair-tl crosshair-br flex h-14 w-14 shrink-0 items-center justify-center border border-blueprint/30 bg-paper font-display text-xs font-bold text-blueprint">
              PMP®
            </div>
            <div>
              <p className="font-semibold text-ink">
                Project Management Professional (PMP®)
              </p>
              <p className="text-sm text-inkfade">Project Management Institute</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-blueprint group-hover:underline">
                View credential ↗
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
