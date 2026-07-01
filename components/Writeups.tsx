const writeups = [
  {
    title: "How I Found an IDOR in XYZ",
    description:
      "A detailed walkthrough explaining the discovery, impact, and responsible disclosure process.",
    image: "/writeups/idor.jpg",
    url: "#",
    date: "Jun 2026",
  },
  {
    title: "Understanding Business Logic Vulnerabilities",
    description:
      "Exploring common business logic flaws and practical testing methodologies.",
    image: "/writeups/business.jpg",
    url: "#",
    date: "May 2026",
  },
  {
    title: "From Recon to Report",
    description:
      "A complete methodology for reconnaissance, validation, and high-quality reporting.",
    image: "/writeups/recon.jpg",
    url: "#",
    date: "Apr 2026",
  },
];

export default function Writeups() {
  return (
    <section
      id="writeups"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16">
        <p className="text-cyan-400 font-medium">
          Latest Research
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Write-ups
        </h2>
      </div>

      <div className="space-y-16">

        {writeups.map((post) => (
          <a
            key={post.title}
            href={post.url}
            className="group block"
          >
            <div className="grid gap-8 md:grid-cols-[260px_1fr]">

              <img
                src={post.image}
                alt={post.title}
                className="aspect-video w-full rounded-xl object-cover"
              />

              <div>

                <p className="text-sm text-gray-500">
                  {post.date}
                </p>

                <h3 className="mt-3 text-3xl font-bold transition group-hover:text-cyan-400">
                  {post.title}
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-gray-400">
                  {post.description}
                </p>

                <span className="mt-6 inline-block text-cyan-400">
                  Read Article →
                </span>

              </div>

            </div>

          </a>
        ))}

      </div>
    </section>
  );
}