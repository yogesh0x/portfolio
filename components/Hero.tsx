import Image from "next/image";

export default function Hero() {
  return (
    <section
  id="home"
  className="mx-auto flex min-h-[calc(90vh-80px)] max-w-7xl items-center px-6 pb-10
    md:pb-0"
>
      <div className="grid w-full items-center gap-20 lg:grid-cols-[1.6fr_1fr]">

        {/* Left Side */}

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </span>

          <h1 className="mt-3 text-5xl font-extrabold leading-tight md:text-7xl">
            Yogesh Kumar
          </h1>

          <p className="mt-6 text-lg text-zinc-300 md:text-xl">
            Bug Bounty Hunter

            <span className="mx-3 text-zinc-600">
              •
            </span>

            Cyber Security Researcher
          </p>

          <p className="mt-5 max-w-xl leading-8 text-zinc-400">
            Finding real-world vulnerabilities through ethical hacking,
            responsible disclosure, and offensive security research.
            I enjoy securing modern web applications, testing APIs,
            and building automation tools for security workflows.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span>Web Security</span>

            <span className="text-cyan-400">
              •
            </span>

            <span>API Security</span>

            <span className="text-cyan-400">
              •
            </span>

            <span>Penetration Testing</span>

            <span className="text-cyan-400">
              •
            </span>

            <span>Automation</span>
          </div>
        </div>


        {/* Right Side */}

        <div className="flex justify-center">
          <div
  className="
    relative
    mx-auto
    h-[270px]
    w-[270px]
    overflow-hidden
    rounded-full

    sm:h-[310px]
    sm:w-[310px]

    md:h-[380px]
    md:w-[380px]
  "
>
  <Image
    src="/profile.jpg"
    alt="Profile"
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