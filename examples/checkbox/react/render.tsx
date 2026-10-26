import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check, Plus } from "lucide-react"

const topics = [
  { value: "design", label: "Design", checked: true },
  { value: "engineering", label: "Engineering", checked: false },
  { value: "marketing", label: "Marketing", checked: false },
  { value: "sales", label: "Sales", checked: false },
]

export function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <fieldset>
        <legend className="mb-3 text-sm font-medium">Topics you follow</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Checkbox
              key={topic.value}
              name="topics"
              value={topic.value}
              defaultChecked={topic.checked}
              className={(state) =>
                state.checked
                  ? "inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                  : "inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 dark:bg-transparent dark:hover:bg-input/30"
              }
              render={(props, state) => (
                <button {...props}>
                  {state.checked ? <Check className="size-3.5" /> : <Plus className="size-3.5" />}
                  {topic.label}
                </button>
              )}
            />
          ))}
        </div>
      </fieldset>
      <label className="flex items-center gap-3 text-sm font-medium">
        <Checkbox
          className="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
          render={<span />}
        >
          <CheckboxIndicator className="grid place-content-center">
            <Check className="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        Notify me about new topics
      </label>
    </div>
  )
}
