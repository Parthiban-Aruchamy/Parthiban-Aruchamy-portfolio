export default function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-xs text-brass">{index}</span>
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="dim-line flex-1" />
    </div>
  );
}
