import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  FileText,
  Layers,
  Send,
  type LucideIcon,
} from "lucide-react";
import { featuredLinks, type FeaturedIcon } from "@/lib/profile";
import { cn } from "@/lib/utils";

const icons: Record<FeaturedIcon, LucideIcon> = {
  work: Layers,
  experience: Briefcase,
  skills: Code2,
  resume: FileText,
  contact: Send,
};

export function FeaturedLinks() {
  return (
    <ul className="link-rise flex flex-col gap-3">
      {featuredLinks.map((item) => {
        const Icon = icons[item.icon];
        return (
          <li key={item.id} className="rise">
            <Link
              to="/p/$slug"
              params={{ slug: item.id }}
              className={cn(
                "link-card group flex min-h-16 items-center gap-3 rounded-xl border border-line",
                "bg-surface p-3 pr-4 text-ink",
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-chip text-ink">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-medium leading-snug">{item.title}</span>
                <span className="block text-sm leading-snug text-muted">{item.hint}</span>
              </span>
              <ArrowUpRight
                className="link-arrow size-4 shrink-0 text-subtle opacity-70"
                strokeWidth={1.75}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
