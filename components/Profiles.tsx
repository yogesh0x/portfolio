import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { profiles } from "@/data/profiles";

export default function Profiles() {
  return (
    <section
      id="profiles"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}

      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          Profiles
        </h2>

        <p className="mt-4 text-zinc-400">
          Explore my bug bounty, open-source, and security research profiles.
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {profiles.map((profile) => {
          const Icon = profile.icon;

          return (
            <Link
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              {/* Header */}

              <div className="flex items-center gap-3">

                <div className="rounded-lg border border-zinc-800 p-2">
                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <div>

                  <h3 className="text-lg font-semibold transition group-hover:text-cyan-400">
                    {profile.name}
                  </h3>

                  <p className="text-xs text-zinc-500">
                    {profile.subtitle}
                  </p>

                </div>

              </div>

              {/* Description */}

              <p className="mt-4 text-[13px] leading-6 text-zinc-400">
                {profile.description}
              </p>

              {/* Footer */}

              <div className="mt-auto pt-6">

                <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">

                  {profile.button}

                  <FiExternalLink
                    size={15}
                  />

                </span>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}