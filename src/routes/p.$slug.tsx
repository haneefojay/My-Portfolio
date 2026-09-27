import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/page-shell";
import {
  experience,
  profile,
  projects,
  skillGroups,
  socialLinks,
  type FeaturedId,
} from "@/lib/profile";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/p/$slug")({ component: Destination });

function Destination() {
  const { slug } = Route.useParams();

  switch (slug as FeaturedId | string) {
    case "work":
      return <WorkPage />;
    case "experience":
      return <ExperiencePage />;
    case "skills":
      return <SkillsPage />;
    case "resume":
      return <ResumePage />;
    case "contact":
      return <ContactPage />;
    default:
      return (
        <PageShell title="Not found" kicker="Lost">
          <p className="text-muted">That page is not on this site.</p>
        </PageShell>
      );
  }
}

function WorkPage() {
  return (
    <PageShell title="Selected work" kicker="Projects">
      <p className="text-base leading-relaxed text-muted">
        Three systems that show how I work: a private production platform, an
        open-source developer tool, and a live full-stack service.
      </p>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-xl border border-line bg-surface p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl font-medium leading-snug tracking-tight text-ink">
                {project.title}
              </h2>
              <p className="text-xs font-medium tracking-wide text-muted">
                {project.status}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">
              {project.kind} · {project.role}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              {project.problem}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.work}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.outcome}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-canvas px-3 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            {project.links.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "pressable inline-flex h-10 items-center gap-1.5 rounded-full",
                      "border border-line bg-canvas px-3 text-sm font-medium text-ink",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

function ExperiencePage() {
  return (
    <PageShell title="Experience" kicker="Current role">
      <article className="rounded-xl border border-line bg-surface p-5">
        <p className="text-xs font-medium tracking-wide text-muted">
          {experience.dates}
        </p>
        <h2 className="mt-2 font-display text-2xl font-medium leading-snug tracking-tight text-ink">
          {experience.company}
        </h2>
        <p className="mt-1 text-sm text-muted">{experience.title}</p>
        <p className="mt-1 text-sm text-subtle">{experience.mode}</p>
        <ul className="mt-5 flex flex-col gap-3">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="grid grid-cols-[auto_1fr] gap-x-3 text-base leading-relaxed text-ink">
              <span className="text-subtle" aria-hidden="true">
                —
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
      <p className="text-sm leading-relaxed text-muted">
        Earlier roles live on the full CV. This page is the senior-engineer
        narrative: products, architecture, and shipping.
      </p>
    </PageShell>
  );
}

function SkillsPage() {
  return (
    <PageShell title="Skills" kicker="Toolkit">
      <p className="text-base leading-relaxed text-muted">
        I work across languages and stacks. Tools are chosen for the job, not
        the other way around.
      </p>
      <div className="flex flex-col gap-6">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-sm font-medium tracking-wide text-muted">
              {group.title}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

function ResumePage() {
  return (
    <PageShell title="Resume" kicker="CV">
      <p className="text-base leading-relaxed text-muted">
        A one-page summary of the work on this site. Download the PDF for
        applications.
      </p>
      <a
        href={profile.resumeHref}
        download
        className={cn(
          "pressable inline-flex h-12 items-center justify-center gap-2 rounded-xl",
          "bg-accent px-5 font-medium text-accent-fg",
        )}
      >
        <Download className="size-4" strokeWidth={1.75} />
        Download PDF
      </a>
      <article className="rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
          {profile.name}
        </h2>
        <p className="mt-1 text-sm text-muted">
          {profile.role} · {profile.company}
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink">{profile.bio}</p>
        <h3 className="mt-6 text-sm font-medium tracking-wide text-muted">
          Experience
        </h3>
        <p className="mt-2 font-medium text-ink">
          {experience.title}, {experience.company}
        </p>
        <p className="text-sm text-muted">{experience.dates}</p>
        <h3 className="mt-6 text-sm font-medium tracking-wide text-muted">
          Selected work
        </h3>
        <ul className="mt-2 flex flex-col gap-2">
          {projects.map((project) => (
            <li key={project.id} className="text-base text-ink">
              <span className="font-medium">{project.title}</span>
              <span className="text-muted"> — {project.kind}</span>
            </li>
          ))}
        </ul>
      </article>
    </PageShell>
  );
}

function ContactPage() {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied");
    } catch {
      toast.error("Could not copy the email");
    }
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your site")}`;

  return (
    <PageShell title="Contact" kicker="Reach me">
      <p className="text-base leading-relaxed text-muted">
        Open to remote software engineering roles, international contracts, and
        serious product or consulting work.
      </p>
      <div className="flex flex-col gap-3">
        <a
          href={mailto}
          className={cn(
            "pressable inline-flex h-12 items-center justify-center rounded-xl",
            "bg-accent px-5 font-medium text-accent-fg",
          )}
        >
          Email me
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className={cn(
            "pressable inline-flex h-12 items-center justify-center gap-2 rounded-xl",
            "border border-line bg-surface font-medium text-ink",
          )}
        >
          <Copy className="size-4" strokeWidth={1.75} />
          {profile.email}
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {socialLinks
          .filter((item) => item.id !== "mail")
          .map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "link-card flex min-h-14 items-center justify-between rounded-xl",
                  "border border-line bg-surface px-4 text-ink",
                )}
              >
                <span className="font-medium">{item.label}</span>
                <ArrowUpRight className="link-arrow size-4 text-subtle" strokeWidth={1.75} />
              </a>
            </li>
          ))}
        <li>
          <a
            href={profile.site}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "link-card flex min-h-14 items-center justify-between rounded-xl",
              "border border-line bg-surface px-4 text-ink",
            )}
          >
            <span className="font-medium">Personal site</span>
            <ArrowUpRight className="link-arrow size-4 text-subtle" strokeWidth={1.75} />
          </a>
        </li>
      </ul>
      <p className="text-sm text-muted">
        {profile.languages.join(" · ")}
      </p>
    </PageShell>
  );
}
