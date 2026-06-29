export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Resume</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="grid gap-10 md:grid-cols-2">

            {/* Left */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold">
                Experience
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>• Bug Bounty Hunter</li>
                <li>• Cyber Security Researcher</li>
              </ul>
            </div>

            {/* Right */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold">
                Skills
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>• Web Security</li>
                <li>• API Security</li>
                <li>• Burp Suite</li>
                <li>• Linux</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-cyan-400 px-6 py-3 font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}