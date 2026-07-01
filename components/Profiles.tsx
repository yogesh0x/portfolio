import Image from "next/image";
import Link from "next/link";
import { profiles } from "@/data/profiles";

export default function Profiles() {
  return (
    <section
      id="profiles"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <h2 className="mb-10 text-3xl font-bold">
        Profiles
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile) => (
          <Link
            key={profile.name}
            href={profile.url}
            target="_blank"
            className="group rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-cyan-400"
          >
            <Image
              src={profile.icon}
              alt={profile.name}
              width={40}
              height={40}
            />

            <h3 className="mt-5 text-lg font-semibold group-hover:text-cyan-400">
              {profile.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              {profile.username}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}