import "@ui-sdk/web/checkbox"
import { Check, createElement, Plus } from "lucide"

const topics = [
  { value: "design", label: "Design", checked: true },
  { value: "engineering", label: "Engineering", checked: false },
  { value: "marketing", label: "Marketing", checked: false },
  { value: "sales", label: "Sales", checked: false },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-5">
      <fieldset>
        <legend class="mb-3 text-sm font-medium">Topics you follow</legend>
        <div class="flex flex-wrap gap-2">
          ${topics
            .map(
              (topic) => `
                <ui-checkbox class="group inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-transparent data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary/80 dark:bg-transparent dark:hover:bg-input/30 dark:data-checked:bg-primary dark:data-checked:hover:bg-primary/80" name="topics" value="${topic.value}"${topic.checked ? " default-checked" : ""}>
                  ${createElement(Check, { class: "hidden size-3.5 group-data-checked:block", "aria-hidden": "true" }).outerHTML}
                  ${createElement(Plus, { class: "size-3.5 group-data-checked:hidden", "aria-hidden": "true" }).outerHTML}
                  ${topic.label}
                </ui-checkbox>
              `,
            )
            .join("")}
        </div>
      </fieldset>
      <label class="flex items-center gap-3 text-sm font-medium">
        <ui-checkbox class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50">
          <ui-checkbox-indicator class="grid place-content-center">
            ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
          </ui-checkbox-indicator>
        </ui-checkbox>
        Notify me about new topics
      </label>
    </div>
  `
}
