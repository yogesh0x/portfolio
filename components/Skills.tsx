export default function Skills() {
  const sections = [
    {
      title: "Security",
      items: [
        "Web Application Security",
        "API Security Testing",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Bug Bounty Hunting",
      ],
    },
    {
      title: "Coding",
      items: [
        "Python",
        "Bash",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Tools",
      items: [
        "Burp Suite",
        "Caido",
        "Nuclei",
        "Subfinder",
        "httpx",
        "FFUF",
        "Dirsearch",
        "SQLMap"
        
      ],
    },
    {
      title: "Currently Learning",
      items: [
        "MySQL",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-2 py-20"
    >
      {/* Heading */}

      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          Skills
        </h2>

        <p className="mt-4 text-zinc-400">
          Areas of expertise, technologies and tools I use.
        </p>
      </div>

      {/* Category Cards */}

      <div className="grid gap-5">

        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4"
          >
            <h3 className="mb-8 text-2xl font-semibold">
              {section.title}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {section.items.map((item) => (
                <div key={item} className="flex items-center justify-center rounded-lg border border-zinc-600 bg-black/20 px-3 py-2 min-h-[52px] text-center transition-all duration-300 hover:border-cyan-400 hover:bg-zinc-900/50 hover:-translate-y-0.5">
                    <span className="text-sm font-medium leading-5 text-zinc-200">
                {item}
                    </span>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}