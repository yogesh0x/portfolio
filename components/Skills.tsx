export default function Skills() {
  const sections = [
  {
    title: "Security",
    description: "Web, API and offensive security expertise.",
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
    description: "Languages and frameworks I actively use.",
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
    description: "Tools used during reconnaissance and testing.",
    items: [
      "Burp Suite",
      "Caido",
      "Nuclei",
      "Subfinder",
      "httpx",
      "FFUF",
      "Dirsearch",
      "SQLMap",
      "Ghauri",
      "Nmap",
    ],
  },
  {
    title: "Currently Learning",
    description: "Technologies I'm currently exploring.",
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
          Technical expertise, programming languages, and tools I use for security research.
        </p>
      </div>

      {/* Category Cards */}

      <div className="grid gap-5">

        {sections.map((section) => (
          <div
            key={section.title}
            className="
rounded-3xl
border
border-zinc-800
bg-zinc-950/40
p-5
transition
duration-300
hover:border-zinc-700
"
          >
            <div className="mb-6">
                <h3 className="text-2xl font-semibold">
                  {section.title}
                </h3>

                 <p className="mt-2 text-sm text-zinc-500">
                    {section.description}
                 </p>
            </div>

            <div className="flex flex-wrap gap-4">

              {section.items.map((item) => (
                <div
  key={item}
  className="
    inline-flex
    items-center
    justify-center
    rounded-lg
    border
    border-zinc-700
    bg-black/20
    px-8
    py-2
    transition
    duration-300
    hover:border-cyan-400
  "
>
  <span className="text-[13px] font-medium">
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