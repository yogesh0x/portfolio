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
    href: "https://github.com/yogesh0x",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mr-yogii",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/MR_Y0Gii",
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
    <footer className="border-t border-zinc-800/80 bg-zinc-950/20">

      <div className="mx-auto max-w-7xl px-6 py-9">

        {/* Identity */}

        <div className="text-center">

          <h3 className="text-xl font-bold text-zinc-100">
            Yogesh Kumar
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Bug Bounty Hunter
            <span className="mx-2 text-zinc-600">•</span>
            Cyber Security Researcher
          </p>

        </div>


        {/* Social Links */}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">

          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                "
              >
                <Icon
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                <span className="text-sm font-medium">
                  {social.name}
                </span>

              </Link>
            );
          })}

        </div>


        {/* Copyright */}

        <div className="mt-8 border-t border-zinc-800/70 pt-5 text-center">

          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}