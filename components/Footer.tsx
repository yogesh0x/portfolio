import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/YOUR_USERNAME",
    icon: FaXTwitter,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/YOUR_ID",
    icon: FaDiscord,
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="text-center">

          <h3 className="text-2xl font-bold">
            Yogesh Kumar
          </h3>

          <p className="mt-2 text-zinc-400">
            Bug Bounty Hunter • Cyber Security Researcher
          </p>

        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">

          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400"
              >
                <Icon
                  size={20}
                  className="transition group-hover:scale-110"
                />

                <span className="text-sm font-medium">
                  {social.name}
                </span>
              </Link>
            );
          })}

        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Yogesh Kumar. All rights reserved. {/*© 2026 Yogesh Kumar • Built with Next.js, React & Tailwind CSS*/}
          </p>
        </div> 
        

      </div>
    </footer>
  );
}