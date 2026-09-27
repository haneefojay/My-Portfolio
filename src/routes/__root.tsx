import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import appCss from "../styles.css?url";

const APP_NAME = "Haneef Ojutalayo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — Senior Software Engineer` },
      {
        name: "description",
        content:
          "Senior software engineer in Ibadan. Backend systems, full-stack products, AI, and developer tools. Open to remote roles.",
      },
      { name: "theme-color", content: "#12110f" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Outfit:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        children: `(function(){try{var t=localStorage.getItem("haneef-theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.add(d?"dark":"light");r.classList.remove(d?"light":"dark");}catch(e){document.documentElement.classList.add("dark")}})();`,
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <ThemeProvider>
      <ThemedDocument />
    </ThemeProvider>
  );
}

function ThemedDocument() {
  const { theme } = useTheme();

  return (
    <html lang="en" className={cn("antialiased", theme)} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-canvas text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Toaster
          theme={theme}
          position="top-center"
          gap={10}
          toastOptions={{
            classNames: {
              toast:
                "font-sans border border-line bg-surface text-ink shadow-soft",
              title: "text-ink",
              description: "text-muted",
            },
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}
