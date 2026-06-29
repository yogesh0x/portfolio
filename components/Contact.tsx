const contacts = [
  {
    title: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    title: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    title: "Discord",
    value: "yourusername",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-400">
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold">{contact.title}</h3>

              <p className="mt-3 break-all text-gray-400">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}