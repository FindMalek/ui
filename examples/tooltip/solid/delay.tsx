import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/solid/tooltip"
import { createSignal, For } from "solid-js"

const icon = (markup: string) => (props: { class?: string }) => (
  <svg
    class={props.class}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    innerHTML={markup}
  />
)
const Bold = icon('<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />')
const Code = icon('<path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" />')
const Italic = icon(
  '<line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" />',
)
const Link = icon(
  '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />',
)
const Underline = icon('<path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" />')

const tools = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: Link, label: "Link" },
  { icon: Code, label: "Code" },
]

const delays = [0, 600, 1200]
const closeDelays = [0, 300]

function Example() {
  const [delay, setDelay] = createSignal(600)
  const [closeDelay, setCloseDelay] = createSignal(0)
  const [enabled, setEnabled] = createSignal(true)

  return (
    <div class="flex flex-col items-center gap-6">
      <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        <span class="text-end text-sm text-muted-foreground">delay</span>
        <div
          role="group"
          aria-label="delay"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={delays}>
            {(value) => (
              <button
                type="button"
                aria-pressed={delay() === value ? "true" : "false"}
                onClick={() => setDelay(value)}
                class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
        <span class="text-end text-sm text-muted-foreground">closeDelay</span>
        <div
          role="group"
          aria-label="closeDelay"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={closeDelays}>
            {(value) => (
              <button
                type="button"
                aria-pressed={closeDelay() === value ? "true" : "false"}
                onClick={() => setCloseDelay(value)}
                class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
      </div>
      <label class="flex items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={enabled()}
          onChange={(event) => setEnabled(event.currentTarget.checked)}
          class="size-4 accent-primary"
        />
        Show tooltips
      </label>
      <div
        role="group"
        aria-label="Formatting"
        class="flex items-center gap-1 rounded-3xl border border-border p-1"
      >
        <For each={tools}>
          {(tool) => (
            <Tooltip delay={delay()} closeDelay={closeDelay()} disabled={!enabled()}>
              <TooltipTrigger class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">
                <tool.icon class="size-4" />
              </TooltipTrigger>
              <TooltipContent class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
                {tool.label}
              </TooltipContent>
            </Tooltip>
          )}
        </For>
      </div>
    </div>
  )
}

export { Example }
