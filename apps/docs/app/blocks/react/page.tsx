import { EditorCard } from "@/components/blocks/editor-card"
import { PlanCard } from "@/components/blocks/plan-card"
import { PreferencesCard } from "@/components/blocks/preferences-card"
import { StorageCard } from "@/components/blocks/storage-card"
import { TeamCard } from "@/components/blocks/team-card"
import { WorkspaceCard } from "@/components/blocks/workspace-card"
import { Logo } from "@/components/docs/logo"
import { ThemeToggle } from "@/components/docs/theme-toggle"
import { ArrowUpRight, Component } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "React blocks",
  description:
    "Interactive UI blocks built with @ui-sdk/react. Forms, sharing, preferences, and the small details in between.",
}

export default function BlocksPage() {
  return (
    <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
      <header className="flex h-22 items-center justify-between gap-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="ui-sdk home"
            className="rounded outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <Logo className="h-5 w-auto" />
          </Link>
          <span aria-hidden className="hidden text-foreground/20 sm:inline">
            /
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">Blocks</span>
        </div>
        <nav aria-label="Blocks navigation" className="flex items-center gap-4">
          <Link
            href="/docs/react"
            className="flex min-h-11 items-center gap-1.5 rounded text-xs text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <span className="sm:hidden">Docs</span>
            <span className="hidden sm:inline">Documentation</span> <ArrowUpRight className="size-3.5" />
          </Link>
          <div className="[&_button]:size-11 md:[&_button]:size-7">
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="pb-16">
        <div className="flex flex-col gap-4 pt-14 pb-10 sm:pt-18">
          <span className="flex w-fit items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <Component className="size-3" />
            Built with @ui-sdk/react
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Small blocks. Big possibilities.
          </h1>
          <p className="max-w-lg text-sm leading-6 text-muted-foreground">
            Forms, settings, and the little details in between. A collection of interactive cards, composed
            with headless React components.
          </p>
        </div>
        <div className="mb-5 flex items-center justify-between gap-3 text-xs">
          <h2 className="font-medium">
            The collection <span className="ml-1.5 text-muted-foreground">06</span>
          </h2>
          <span className="text-muted-foreground">Go ahead. Try things out.</span>
        </div>
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          <WorkspaceCard />
          <TeamCard />
          <PreferencesCard />
          <PlanCard />
          <EditorCard />
          <StorageCard />
        </div>
        <footer className="mt-8 flex flex-col justify-between gap-3 text-xs leading-5 text-muted-foreground sm:flex-row">
          <p>Real components. Local preview data. All yours to explore.</p>
          <Link
            href="/docs/react/components/button"
            className="flex w-fit items-center gap-1 rounded outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            Explore the components <ArrowUpRight className="size-3" />
          </Link>
        </footer>
      </main>
    </div>
  )
}
