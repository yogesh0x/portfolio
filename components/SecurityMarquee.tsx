const items = [
  "Bug Bounty Hunter",
  "Web Application Security",
  "API Security",
  "Penetration Testing",
  "Vulnerability Assessment",
  "Security Researcher",
];

export default function SecurityMarquee() {
  const marqueeItems = [...items, ...items];

  return (
    <section className="w-full overflow-hidden border-y border-zinc-900 py-1">
      <div className="marquee-track flex w-max items-center">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="whitespace-nowrap px-8 text-sm font-medium uppercase tracking-[0.18em] text-cyan-500 transition-colors duration-300 hover:text-zinc-200">
              {item}
            </span>

            <span className="text-white">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
