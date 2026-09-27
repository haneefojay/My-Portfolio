import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function PageShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-16 pt-6">
      <header className="flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "pressable inline-flex h-11 items-center gap-2 rounded-full border border-line",
            "bg-surface px-4 text-sm font-medium text-ink",
          )}
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          Back
        </Link>
        <ThemeToggle />
      </header>

      <header className="rise mt-10">
        {kicker ? (
          <p className="text-sm font-medium tracking-wide text-muted">{kicker}</p>
        ) : null}
        <h1 className="mt-2 font-display text-4xl font-medium leading-tight tracking-tight text-ink">
          {title}
        </h1>
      </header>

      <div className="mt-8 flex flex-col gap-6">{children}</div>
    </main>
  );
}
