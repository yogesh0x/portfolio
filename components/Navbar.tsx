"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  {
    label: "Write-ups",
    href: "#write-ups",
    external: true,
  },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(navItems[index].href);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            YK
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm transition ${
                  active === item.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    active === item.href
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black transition-all duration-500 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        } md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}