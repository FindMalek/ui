import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

const tasks = [
  { label: "Write the release notes", done: false },
  { label: "Update the changelog", done: true },
  { label: "Tag the release", done: false },
]

function Example() {
  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <label
          key={task.label}
          className="flex items-center gap-3 text-sm font-medium transition-colors has-data-checked:text-muted-foreground has-data-checked:line-through"
        >
          <Checkbox
            className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            defaultChecked={task.done}
          >
            <CheckboxIndicator
              className="grid place-content-center transition-[scale,opacity] duration-150 ease-out data-starting-style:scale-50 data-starting-style:opacity-0 data-ending-style:scale-50 data-ending-style:opacity-0 data-unchecked:scale-50 data-unchecked:opacity-0 motion-reduce:transition-none"
              keepMounted
            >
              <Check aria-hidden="true" className="size-3.5" />
            </CheckboxIndicator>
          </Checkbox>
          {task.label}
        </label>
      ))}
    </div>
  )
}

export { Example }
