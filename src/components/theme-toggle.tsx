import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "pressable relative inline-flex size-11 items-center justify-center overflow-hidden",
        "rounded-full border border-line bg-surface text-ink",
      )}
    >
      <span
        className={cn(
          "icon-swap absolute inset-0 flex items-center justify-center",
          isDark ? "is-shown" : "is-hidden",
        )}
        aria-hidden="true"
      >
        <Sun className="size-4" strokeWidth={1.75} />
      </span>
      <span
        className={cn(
          "icon-swap flex items-center justify-center",
          isDark ? "is-hidden" : "is-shown",
        )}
        aria-hidden="true"
      >
        <Moon className="size-4" strokeWidth={1.75} />
      </span>
    </button>
  );
}
