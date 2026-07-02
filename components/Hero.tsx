import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20"
    >
      <div className="grid w-full items-center gap-20 lg:grid-cols-[1.6fr_1fr]">

        {/* Left */}

        <div>

          <p className="font-medium tracking-wide text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-5xl font-extrabold leading-tight md:text-7xl">
            Yogesh Kumar
          </h1>

          <p className="mt-6 text-xl text-zinc-300 md:text-2xl">
            Bug Bounty Hunter
            <span className="mx-3 text-zinc-600">•</span>
            Cyber Security Researcher
          </p>

          <p className="mt-8 max-w-2xl leading-8 text-zinc-400">
            Passionate about identifying real-world security
            vulnerabilities through ethical hacking and responsible
            disclosure. My primary focus is Web Application Security,
            API Security, Vulnerability Assessment, Penetration Testing,
            and Bug Bounty Hunting.
          </p>

        </div>

        {/* Right */}

        <div className="flex justify-center ">

          <div
            className="
              relative
              h-[390px]
              w-[390px]
              overflow-hidden
              rounded-full
              border
              border-zinc-800
              bg-zinc-950
              shadow-2xl
            "
          >

            <Image
              src="/profile.jpg"
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