import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

        {/* Profile Image */}
        <div className="relative mb-8 h-44 w-44 overflow-hidden rounded-full border-4 border-cyan-400">
          <Image
            src="/profile.png"
            alt="Yogesh Kumar"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Yogesh Kumar
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg font-medium text-cyan-400 md:text-xl">
          Bug Bounty Hunter | Cyber Security Researcher
        </p>

        {/* About */}
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          Passionate about discovering real-world security vulnerabilities,
          practicing responsible disclosure, and helping organizations improve
          their security posture through ethical hacking and continuous research.
        </p>

        {/* Profile Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-400 px-6 py-3 transition hover:bg-cyan-400 hover:text-black"
          >
            HackerOne
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-400 px-6 py-3 transition hover:bg-cyan-400 hover:text-black"
          >
            Intigriti
          </a>

        </div>

      </div>
    </section>
  );
}