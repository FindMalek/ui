import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/solid/dialog"
import { createSignal, For, Show } from "solid-js"

const modes = [
  { value: "true", label: "Modal" },
  { value: "trap-focus", label: "Trap focus" },
  { value: "false", label: "Non-modal" },
] as const

const notes = {
  true: "The rest of the page is inert and doesn't scroll.",
  "trap-focus": "Tab stays inside, and the page still scrolls and takes clicks.",
  false: "The page stays usable. Tab leaves the notes, and Escape closes them while focus is inside.",
}

function Example() {
  const [mode, setMode] = createSignal<(typeof modes)[number]["value"]>("false")
  const [outside, setOutside] = createSignal(false)
  const modal = () => (mode() === "true" ? true : mode() === "false" ? false : "trap-focus")
  return (
    <div class="grid gap-4">
      <fieldset class="m-0 flex flex-wrap gap-4 border-0 p-0 text-sm">
        <legend class="sr-only">modal</legend>
        <For each={modes}>
          {(option) => (
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="modal"
                checked={mode() === option.value}
                onChange={() => setMode(option.value)}
                class="m-0 size-4 accent-primary"
              />
              {option.label}
            </label>
          )}
        </For>
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            checked={outside()}
            onChange={(event) => setOutside(event.currentTarget.checked)}
            class="m-0 size-4 accent-primary"
          />
          closeOnOutsidePress
        </label>
      </fieldset>
      <Dialog modal={modal()} closeOnOutsidePress={outside()}>
        <DialogTrigger class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 justify-self-start data-open:bg-muted">
          Open notes
        </DialogTrigger>
        <Show when={modal() === true}>
          <DialogBackdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
        </Show>
        <DialogContent class="fixed end-4 bottom-4 grid w-80 max-w-[calc(100%-2rem)] gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,translate] duration-100 data-starting-style:translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0 motion-reduce:transition-none">
          <div class="flex flex-col gap-1.5">
            <DialogTitle class="m-0 text-base leading-none font-medium">Notes</DialogTitle>
            <DialogDescription class="m-0 text-sm text-muted-foreground">{notes[mode()]}</DialogDescription>
          </div>
          <textarea
            aria-label="Notes"
            value="Call the printer about the proofs."
            class="h-auto min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm resize-none"
          />
          <DialogClose class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 justify-self-end">
            Done
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Example }
