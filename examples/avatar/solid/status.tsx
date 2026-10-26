import { Avatar, AvatarFallback, AvatarImage } from "@ui-sdk/solid/avatar"
import { createSignal, For, Show } from "solid-js"

const sources = [
  {
    label: "Load",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAACqElEQVR42u2Yz0tVQRTH765/IIJ27qVdLdrUTqJFUDsJIoIHldUiiN4mCzGMqMAEEanErIdaSHJF+iGlaJGgEG8RgkFthCDQZds+MDE87F27d854zzwY+C7ee3POme9n7tx5M5O8+/2lpZVEgAgQASJABIgAEWCbZtcnp15emujvGO87jPjAV35sAYDpD7efXWsbPbenqWgiIFAABrjWfSDLeqMI8/g0El/ux7r25nFvRLAvhqR8934ZpABvNhcd3FsG0pUBXgyfcnNvRLomwEz9icS9EUXUAITD7+UhJJLZb01MXt7/9enVQiLFpkveBHeA9HO/dYChn68HC4kUm04pBQB2B3+7r7YXdW9EoqlAKQUANjmm+9Whs24AJJoKlNIEcHNvpA/gPH8aZ5EmwPydDgkA6WoA7PLpe+n+CQkA6RShlNoq5AVAZxViL+kLQLItFW0lOGHJ3wGKqO2FePTyVUgyf6QA5jAgAZAfCaTngVez1frjC27uSSQ9gDNx7aIbAIlBnImZA+vvh4q6J0V+nvR2K7GwtbwxN5zfPcGkhHUvtPL9bX4AgkO8mcvJ4NG9/6vFxV8ffyyNZlmniYDQL3fra2nmurmWtsDtdASIABEgAmgB1DbmbswPjqf3sgBoIoCwsAAefUvPPK+2Xz+2r3IQ3XxQyQKgycQQTAqJygAM56FbJ40nq0pv58xYd1PRtC2YdIooADysT9ghl4tSFCwJYHrz0/GBii/rjaIsxXcXgFnrceCbPoqiL0ZSyH3blSO7596ILgoxJEG5d2BIci7wpbm3DDn/LnIB/LtWliA69QNwfqqnfPdGdC0FKH/yFJ1I/wHgD1/LvREGRACKw28fgjtA3/KIrnsjbDgCqM+fPLNoJ4Cjd0+HAIANR4AQ3BvtYPIP6eT82uvB/KAAAAAASUVORK5CYII=",
  },
  { label: "Break", src: "data:image/png;base64,AAAA" },
  { label: "Remove", src: undefined },
]

export function Example() {
  const [src, setSrc] = createSignal(sources[0].src)
  const [status, setStatus] = createSignal("")

  return (
    <div class="flex w-full max-w-sm flex-col items-start gap-3 text-foreground">
      <div class="flex items-center gap-3">
        <Avatar
          onLoadingStatusChange={(status, details) => setStatus(`${status} (${details.reason})`)}

          class="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
        >
          <Show when={src()}>
            {(src) => (
              <AvatarImage
                src={src()}
                alt="Alan Turing"
                class="aspect-square size-full rounded-full object-cover"
              />
            )}
          </Show>
          <AvatarFallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">
            <span aria-hidden="true">AT</span>
            <span class="sr-only">Alan Turing</span>
          </AvatarFallback>
        </Avatar>
        <output class="min-h-5 flex-1 text-sm text-muted-foreground tabular-nums">Status: {status()}</output>
      </div>
      <div class="flex flex-wrap gap-2">
        <For each={sources}>
          {(source) => (
            <button
              type="button"
              aria-pressed={src() === source.src ? "true" : "false"}
              class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-pressed:ring-1 aria-pressed:ring-ring motion-reduce:transition-none"
              onClick={() => setSrc(source.src)}
            >
              {source.label}
            </button>
          )}
        </For>
      </div>
    </div>
  )
}
