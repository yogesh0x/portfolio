export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Heading */}

      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          Experience
        </h2>

        <p className="mt-4 text-zinc-400">
          Practical experience in vulnerability assessment,
          penetration testing, and offensive security.
        </p>
      </div>

      {/* Experience */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">

        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

          <div>

            <h3 className="text-2xl font-semibold">
              VAPT Intern
            </h3>

            <p className="mt-1 text-lg text-cyan-400">
              SecureMyOrg (Hackimpilified technologies Pvt-Ltd)
            </p>

          </div>

          <p className="mt-2 text-sm text-zinc-500 md:mt-0">
            Nov 2024 — May 2026
          </p>

        </div>

        <p className="mt-1.5 text-sm italic text-zinc-500">
          Full-time Internship → Project-based Contributor
        </p>

        <p className="mt-5 max-w-4xl leading-8 text-zinc-400">
          Started as a VAPT Intern performing web application security
          assessments. After the initial internship period, continued
          contributing on a project basis while pursuing my MCA.
          Later rejoined to complete additional penetration testing
          engagements as part of my final semester internship.
        </p>

        <div className="mt-7">

          <h4 className="mb-4 text-lg font-semibold">
            Responsibilities
          </h4>

          <div className="flex flex-wrap gap-3">

            {[
              "Web Application Security Testing",
              "API Security Testing",
              "Vulnerability Assessment",
              "Penetration Testing",
              "OWASP Top 10",
              "Proof-of-Concept Validatiom",
              //"Security Reporting",
              //"Client Report Documentation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}