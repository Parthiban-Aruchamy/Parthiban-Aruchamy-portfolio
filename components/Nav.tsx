const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint focus-ring rounded-sm"
        >
          PA / 01
        </a>
        <ul className="flex items-center gap-6 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-inkfade transition-colors hover:text-blueprint focus-ring rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
