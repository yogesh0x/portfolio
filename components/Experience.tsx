export default function Experience() {
  const responsibilities = [
    "Web Application Security Testing",
    "API Security Testing",
    "Vulnerability Assessment",
    "Penetration Testing",
    "OWASP Top 10",
    "Proof-of-Concept Validation",
  ];

  return (
    // Experience
<section
  id="experience"
  className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20"
>
      {/* Section Heading */}

      <div className="mb-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Career
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
  Professional Experience
</h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Practical experience in vulnerability assessment,
          penetration testing, and application security.
        </p>
      </div>


      {/* Experience Entry */}

      <div className="relative mx-auto max-w-6xl">

        {/* Timeline Line */}

        <div className="absolute bottom-0 left-0 top-0 w-px bg-zinc-800" />

        {/* Timeline Point */}

        <div
          className="
            absolute
            left-[-4px]
            top-2
            h-[9px]
            w-[9px]
            rounded-full
            bg-cyan-400
            shadow-[0_0_14px_rgba(34,211,238,0.45)]
          "
        />


        <div className="pl-5 sm:pl-7 md:pl-10">

          {/* Top Row */}

          <div
            className="
              flex
              flex-col
              gap-5
              border-b
              border-zinc-800
              pb-6
              md:flex-row
              md:items-start
              md:justify-between
            "
          >
            <div>
              <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
  VAPT Intern
</h3>

              <p className="mt-2 text-base font-medium text-cyan-400">
                SecureMyOrg · Hackimpilified Technologies Pvt. Ltd.
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Internship → Project-based Contributor
              </p>
            </div>


            <div className="md:text-right">
              <p className="text-sm font-medium text-zinc-300">
                Nov 2024 — May 2026
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-600">
                VAPT & Application Security
              </p>
            </div>
          </div>


          {/* Description */}

          <div className="py-5">
            <p className="max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
  Started as a VAPT Intern performing web application security
  assessments. After the initial internship period, continued
  contributing to penetration testing engagements on a project
  basis while pursuing my MCA. Later rejoined for additional
  security testing engagements during the final semester of the
  MCA program.
</p>
          </div>


          {/* Responsibilities */}

          <div className="border-t border-zinc-900 pt-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Responsibilities & Focus Areas
            </p>

            <div className="flex flex-wrap gap-3">
              {responsibilities.map((item) => (
                <span
  key={item}
  className="
    rounded-md
    border
    border-zinc-800
    bg-zinc-950/40
    px-3
    py-1.5
    text-[13px]
    text-zinc-400
    transition-all
    duration-300
    hover:border-cyan-400/60
    hover:text-cyan-400
    sm:px-4
    sm:py-2
    sm:text-sm
  "
>
  {item}
</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}