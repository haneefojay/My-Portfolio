import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function ShareButton() {
  async function onShare() {
    const url = window.location.origin + "/";
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({
          title: profile.name,
          text: `${profile.name} — ${profile.role}`,
          url,
        });
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    } catch {
      toast.error("Could not copy the link");
    }
  }

  return (
    <button
      type="button"
      onClick={onShare}
      aria-label="Share this page"
      className={cn(
        "pressable inline-flex size-11 items-center justify-center",
        "rounded-full border border-line bg-surface text-ink",
      )}
    >
      <Share2 className="size-4" strokeWidth={1.75} />
    </button>
  );
}
