import Image from "next/image";
import Link from "next/link";
import { writeups } from "@/data/writeups";

export default function HomeWriteups() {
  return (
    <section
      id="writeups"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Latest Write-ups
        </h2>
      </div>

      {/* Writeups */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
        {writeups.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group w-full max-w-[330px]"
          >
            {/* Cover Image */}
            <div className="relative h-[190px] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Meta */}
            <p className="mt-4 text-xs text-zinc-500">
              Yogesh Kumar • {post.date}
            </p>

            {/* Title */}
            <h3 className="mt-2 text-xl font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-400 line-clamp-2">
              {post.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-[15px] leading-6 text-zinc-400 line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}