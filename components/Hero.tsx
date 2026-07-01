import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <p className="mb-4 text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Yogesh Kumar
          </h1>

          <h2 className="mt-6 text-xl font-medium text-gray-300 md:text-2xl">
            Bug Bounty Hunter | Cyber Security Researcher
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-gray-400">
            Passionate about identifying real-world security
            vulnerabilities, responsible disclosure, and helping
            organizations improve their security through ethical
            hacking and continuous research.
          </p>

        </div>

        {/* Right Image */}

        <div className="flex justify-center">

          <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border border-white/10">

            <Image
              src="/profile.png"
              alt="Yogesh Kumar"
              fill
              priority
              className="object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}