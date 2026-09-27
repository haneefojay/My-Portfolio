import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { socialLinks, type SocialId } from "@/lib/profile";
import { cn } from "@/lib/utils";

function XMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M14.72 10.32 22.06 2h-1.74l-6.37 7.24L8.86 2H2.2l7.7 11.02L2.2 22h1.74l6.73-7.65L15.14 22h6.66l-7.08-11.68Zm-2.38 2.71-.78-1.1L4.56 3.3h2.67l5.01 7.06.78 1.1 6.52 9.2h-2.67l-5.53-7.63Z" />
    </svg>
  );
}

const icons: Record<SocialId, ReactNode> = {
  github: <Github className="size-4" strokeWidth={1.75} />,
  linkedin: <Linkedin className="size-4" strokeWidth={1.75} />,
  x: <XMark />,
  mail: <Mail className="size-4" strokeWidth={1.75} />,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Social" className={cn("flex items-center justify-center gap-3", className)}>
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.id === "mail" ? undefined : "_blank"}
          rel={item.id === "mail" ? undefined : "noreferrer"}
          aria-label={item.label}
          className={cn(
            "pressable inline-flex size-11 items-center justify-center",
            "rounded-full border border-line bg-surface text-ink",
            "transition-colors duration-150 hover:border-ink/25",
          )}
        >
          {icons[item.id]}
        </a>
      ))}
    </nav>
  );
}
