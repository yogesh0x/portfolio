export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="mt-5 leading-8 text-zinc-400">
          Looking for a penetration test, bug bounty collaboration,
          security consultation, or any cybersecurity-related discussion?
          Feel free to get in touch using the form or contact details below.
        </p>
      </div>

      {/* Content */}
      <div className="grid items-start gap-16 lg:grid-cols-2">

        {/* Left */}
        <form className="space-y-6">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="First Name"
              className="border-b border-zinc-700 bg-transparent py-3 outline-none transition focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border-b border-zinc-700 bg-transparent py-3 outline-none transition focus:border-cyan-400"
            />

          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-zinc-700 bg-transparent py-3 outline-none transition focus:border-cyan-400"
          />

          <textarea
            rows={3}
            placeholder="Your Message"
            className="w-full resize-none border-b border-zinc-700 bg-transparent py-3 outline-none transition focus:border-cyan-400"
          />

          <button
            type="button"
            className="rounded-lg bg-cyan-500 px-2 py-2.5 font-medium text-black transition hover:bg-cyan-400"
          >
            Send Message
          </button>

        </form>

        {/* Right */}
        <div className="space-y-10">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Email
            </p>

            <a
              href="mailto:yogeshkumar.ax@gmail.com"
              className="mt-2 inline-block text-lg transition hover:text-cyan-400"
            >
              yogeshkumar.ax@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Phone
            </p>

            <a
              href="tel:+91XXXXXXXXXX"
              className="mt-2 inline-block text-lg transition hover:text-cyan-400"
            >
              +91 XXXXX XXXXX
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              WhatsApp
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg transition hover:text-cyan-400"
            >
              +91 XXXXX XXXXX
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}