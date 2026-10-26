import { Checkbox, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { For } from "solid-js"

const topics = [
  { value: "design", label: "Design", checked: true },
  { value: "engineering", label: "Engineering", checked: false },
  { value: "marketing", label: "Marketing", checked: false },
  { value: "sales", label: "Sales", checked: false },
]

export function Example() {
  return (
    <div class="flex w-full max-w-sm flex-col gap-5">
      <fieldset>
        <legend class="mb-3 text-sm font-medium">Topics you follow</legend>
        <div class="flex flex-wrap gap-2">
          <For each={topics}>
            {(topic) => (
              <Checkbox
                name="topics"
                value={topic.value}
                defaultChecked={topic.checked}
                class={(state) =>
                  state.checked
                    ? "inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                    : "inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 dark:bg-transparent dark:hover:bg-input/30"
                }
                render={(props, state) => (
                  <button {...props}>
                    {state.checked ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        class="size-3.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        class="size-3.5"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                    {topic.label}
                  </button>
                )}
              />
            )}
          </For>
        </div>
      </fieldset>
      <label class="flex items-center gap-3 text-sm font-medium">
        <Checkbox
          class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
          render={(props) => <span {...props} />}
        >
          <CheckboxIndicator class="grid place-content-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="size-3.5"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </CheckboxIndicator>
        </Checkbox>
        Notify me about new topics
      </label>
    </div>
  )
}
