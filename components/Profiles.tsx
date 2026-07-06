import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { profiles } from "@/data/profiles";

export default function Profiles() {
  return (
    // Profiles
<section
  id="profiles"
  className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20"
>
      {/* Heading */}

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
  Profiles
</h2>

        <p className="mt-4 text-zinc-400">
          Explore my bug bounty, open-source, and security research profiles.
        </p>
      </div>


      {/* Profile Cards */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {profiles.map((profile) => {
          const Icon = profile.icon;

          return (
            <Link
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
  group
  flex
  h-full
  flex-col
  rounded-2xl
  border
  border-zinc-800
  bg-zinc-950/30
  p-4
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-cyan-500/40
  hover:bg-zinc-950/60
  sm:p-5
"
            >

              {/* Header */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-zinc-800
                    bg-black/30
                    transition-all
                    duration-300
                    group-hover:border-cyan-500/30
                    group-hover:bg-cyan-950/20
                  "
                >
                  <Icon
                    size={21}
                    className="
                      text-cyan-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>


                <div className="min-w-0">

                  <h3
                    className="
                      text-lg
                      font-semibold
                      transition-colors
                      duration-300
                      group-hover:text-cyan-400
                    "
                  >
                    {profile.name}
                  </h3>

                  <p className="text-xs text-zinc-500">
                    {profile.subtitle}
                  </p>

                </div>

              </div>


              {/* Description */}

              <p className="mt-3 text-[13px] leading-6 text-zinc-400 sm:mt-4">
  {profile.description}
</p>


              {/* Action */}

              <div className="mt-auto pt-4 sm:pt-6">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-cyan-400
                  "
                >
                  {profile.button}

                  <FiExternalLink
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
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