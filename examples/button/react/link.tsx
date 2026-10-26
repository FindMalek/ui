import { Button } from "@ui-sdk/react/button"

function Example() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        render={<a href="#installation" />}
        className="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] no-underline"
      >
        Get started
      </Button>
      <Button
        disabled
        render={<a href="#changelog" />}
        className="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none border-border bg-background text-foreground hover:not-aria-disabled:bg-muted dark:bg-transparent dark:hover:not-aria-disabled:bg-input/30 no-underline data-disabled:cursor-default"
      >
        Changelog
      </Button>
    </div>
  )
}

export { Example }
