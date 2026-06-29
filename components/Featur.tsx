export default function Featur() {
  return (
    <section id="writeups" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        {/* Featured Writeups */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">Featured Writeups</h2>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="aspect-video bg-neutral-800" />

            <div className="p-5">
              <h3 className="text-lg font-semibold">
                Writeup Title
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Short description of the writeup goes here.
              </p>

              <button className="mt-5 rounded-lg border border-cyan-400 px-4 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Hall of Fame */}
        <div id="hof" className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Hall of Fame
          </h2>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="aspect-video flex items-center justify-center bg-neutral-800">
              Company Logo
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">
                Company Name
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Acknowledgement description goes here.
              </p>

              <button className="mt-5 rounded-lg border border-cyan-400 px-4 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
                View
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}