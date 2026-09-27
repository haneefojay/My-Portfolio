import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { FeaturedLinks } from "@/components/featured-links";
import { ShareButton } from "@/components/share-button";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-16 pt-6">
      <header className="flex items-center justify-between">
        <ThemeToggle />
        <ShareButton />
      </header>

      <div className="home-rise mt-10 flex flex-col items-center text-center">
        <div className="rise">
          <div className="mx-auto size-32 rounded-full border border-line bg-surface p-1 shadow-soft">
            <img
              src={profile.avatarSrc}
              alt={`Portrait of ${profile.name}`}
              width={1408}
              height={1408}
              className="size-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        <p className="rise mt-6 inline-flex items-center rounded-full bg-chip px-3 py-1 text-xs font-medium tracking-wide text-accent">
          {profile.availability}
        </p>

        <h1 className="rise mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="rise mt-2 text-sm font-medium text-muted">{profile.role}</p>
        <p className="rise mt-1 text-sm text-muted">{profile.company}</p>
        <p className="rise mx-auto mt-4 max-w-sm text-base leading-relaxed text-ink">
          {profile.bio}
        </p>
        <p className="rise mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-3.5" strokeWidth={1.75} />
          {profile.location}
        </p>
      </div>

      <section className="mt-10" aria-label="Featured links">
        <FeaturedLinks />
      </section>

      <SocialLinks className="mt-8" />

      <p className="mt-10 text-center text-xs tracking-wide text-subtle">
        {profile.name}
      </p>
    </main>
  );
}
