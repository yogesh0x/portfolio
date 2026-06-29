export default function Footer() {
  const socialLinks = [
    {
      name: "X",
      href: "https://x.com/yourusername",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
    },
    {
      name: "Discord",
      href: "#",
    },
  ];

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
            >
              {social.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}