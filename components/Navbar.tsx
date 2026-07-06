"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "Skills",
    href: "/#skills",
    sectionId: "skills",
  },
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Write-ups",
    href: "YOUR_MEDIUM_URL",
    external: true,
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/#contact",
    sectionId: "contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const pathname = usePathname();


  // Navbar background + homepage section detection

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== "/") {
        return;
      }

      const sectionItems = navItems.filter(
        (item) => item.sectionId
      );

      sectionItems.forEach((item) => {
        if (!item.sectionId) {
          return;
        }

        const section = document.getElementById(
          item.sectionId
        );

        if (!section) {
          return;
        }

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(item.sectionId);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [pathname]);


  // Close mobile menu after route changes

  useEffect(() => {
    setOpen(false);
  }, [pathname]);


  // Disable page scrolling while mobile menu is open

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


  // Active navigation state

  const isActive = (
    item: (typeof navItems)[number]
  ) => {
    if (item.sectionId && pathname === "/") {
      return active === item.sectionId;
    }

    if (!item.sectionId && !item.external) {
      return pathname === item.href;
    }

    return false;
  };


  return (
    <>
      {/* Navbar */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${
            scrolled || open
              ? "border-b border-white/10 bg-[#09090b]/85 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
          "
        >

          {/* Logo */}

          <Link
            href="/#home"
            onClick={() => setOpen(false)}
            className="
              text-2xl
              font-bold
              tracking-wide
              transition-colors
              hover:text-cyan-400
            "
          >
            YK
          </Link>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 md:flex">

            {navItems.map((item) => {
              const activeItem = isActive(item);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={
                    item.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`
                    group
                    relative
                    text-sm
                    transition-colors
                    duration-300
                    ${
                      activeItem
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      bg-cyan-400
                      transition-all
                      duration-300
                      ${
                        activeItem
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                </Link>
              );
            })}

          </nav>


          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-zinc-800
              text-zinc-200
              transition-colors
              hover:border-zinc-700
              hover:text-cyan-400
              md:hidden
            "
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </header>


      {/* Mobile Navigation */}

      <div
        className={`
          fixed
          inset-x-0
          bottom-0
          top-20
          z-40
          bg-[#09090b]/98
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }
          md:hidden
        `}
      >
        <nav
          className="
            mx-auto
            flex
            h-full
            max-w-md
            flex-col
            justify-center
            px-8
            pb-16
          "
        >

          {navItems.map((item) => {
            const activeItem = isActive(item);

            return (
              <Link
                key={item.label}
                href={item.href}
                target={
                  item.external
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => setOpen(false)}
                className={`
                  flex
                  items-center
                  justify-between
                  border-b
                  border-zinc-900
                  py-4
                  text-xl
                  font-medium
                  transition-colors
                  ${
                    activeItem
                      ? "text-cyan-400"
                      : "text-zinc-300 hover:text-white"
                  }
                `}
              >
                <span>
                  {item.label}
                </span>

                {activeItem && (
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}

              </Link>
            );
          })}

        </nav>
      </div>
    </>
  );
}