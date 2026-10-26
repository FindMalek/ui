import { Credit } from "./footer"
import { VercelLogo } from "./logo"
import { ThemeToggle } from "./theme-toggle"

function SiteFooter() {
  return (
    <footer className="container flex flex-wrap items-center justify-between gap-4 py-8">
      <div className="flex items-center gap-4">
        <a
          href="https://vercel.com"
          aria-label="Vercel"
          className="rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          <VercelLogo className="h-4 w-auto" />
        </a>
        <Credit />
      </div>
      <ThemeToggle />
    </footer>
  )
}

export { SiteFooter }
