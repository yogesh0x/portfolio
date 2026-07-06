type ColorKey = "cyan" | "blue" | "violet" | "amber";

type SkillSection = {
  title: string;
  description: string;
  color: ColorKey;
  icon: string;
  items: string[];
};

const sections: SkillSection[] = [
  {
    title: "Security",
    description: "Web, API and offensive security expertise.",
    color: "cyan",
    icon: "🛡",
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
    color: "blue",
    icon: "💻",
    items: [
      "Python",
      "Bash",
      "JavaScript",
     
    ],
  },

  {
    title: "Tools",
    description: "Tools used during reconnaissance and testing.",
    color: "violet",
    icon: "🛠",
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
    color: "amber",
    icon: "📚",
    items: [
      "MySQL",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
];


const styles = {
  cyan: {
    card:
      "border-cyan-900/40 bg-cyan-950/10 hover:border-cyan-500/40",

    pill:
      "hover:border-cyan-400 hover:text-cyan-400",
  },

  blue: {
    card:
      "border-blue-900/40 bg-blue-950/10 hover:border-blue-500/40",

    pill:
      "hover:border-blue-400 hover:text-blue-400",
  },

  violet: {
    card:
      "border-violet-900/40 bg-violet-950/10 hover:border-violet-500/40",

    pill:
      "hover:border-violet-400 hover:text-violet-400",
  },

  amber: {
    card:
      "border-amber-900/40 bg-amber-950/10 hover:border-amber-500/40",

    pill:
      "hover:border-amber-400 hover:text-amber-400",
  },
};


function SkillCard({
  section,
}: {
  section: SkillSection;
}) {
  const style = styles[section.color];

  return (
    <div
      className={`
  h-full
  rounded-3xl
  border
  p-5
  sm:p-6
  transition-all
  duration-300
  ${style.card}
`}
    >
      {/* Card Header */}

      <div className="mb-6 flex items-start gap-3">

        <span className="mt-0.5 text-2xl leading-none">
          {section.icon}
        </span>

        <div>
          <h3 className="text-2xl font-semibold">
            {section.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {section.description}
          </p>
        </div>

      </div>


      {/* Skills */}

      <div className="flex flex-wrap gap-3">

        {section.items.map((item) => (
          <div
            key={item}
            className={`
  rounded-lg
  border
  border-zinc-700
  bg-black/20
  px-3
  py-1.5
  sm:px-4
  sm:py-2
  transition
  duration-300
  ${style.pill}
`}
          >
            <span className="text-[13px] font-medium text-zinc-200 sm:text-sm">
              {item}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}


export default function Skills() {
  const security = sections[0];
  const coding = sections[1];
  const tools = sections[2];
  const learning = sections[3];

  return (
    // Skills
<section
  id="skills"
  className="mx-auto max-w-6xl px-2 pt-20 pb-16"
>
      {/* Heading */}

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-bold">
          Skills
        </h2>

        <p className="mt-4 text-zinc-400">
          Technical expertise, programming languages, and tools I use
          for security research.
        </p>

      </div>


      {/* Skills Layout */}

      <div className="space-y-5">

        {/* Security — Full Width */}

        <SkillCard section={security} />


        {/* Tools — Full Width */}

        <SkillCard section={tools} />

         {/* Coding + Currently Learning */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[1.6fr_1fr]
          "
        >
          <SkillCard section={coding} />

          <SkillCard section={learning} />
        </div>

      </div>

    </section>
  );
}