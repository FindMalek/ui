import * as React from "react"
import { definePrimitive, keepFocus } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type ChecklistOptions = {
  keep?: boolean
}

type ChecklistState = { done: string[] }

const checklist = definePrimitive({
  name: "checklist",
  options: { keep: "boolean" },
  state: (_options: ChecklistOptions): ChecklistState => ({ done: [] }),
  api: (context) => ({
    toggle(task: string) {
      const { done } = context.store.get()
      context.store.set({
        done: done.includes(task) ? done.filter((other) => other !== task) : [...done, task],
      })
      if (context.options().keep) keepFocus(() => context.element("task", task))
    },
  }),
  slots: (slot) => ({
    root: slot<{}, ChecklistState>({ state: (state) => ({ done: state.done }) }),
    list: slot({ attrs: () => ({ role: "list" }) }),
    task: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({ type: "button", "aria-pressed": String(state.done.includes(part.key)) }),
      press: ({ api, key }) => api.toggle(key),
    }),
  }),
})

const parts = createParts(checklist, { root: "div", list: "ul", task: "button" })

const Checklist = parts.Root

const ChecklistList = parts.List

const ChecklistTask = parts.Task

const tasks = ["Write the intro", "Add examples", "Fix the links"]

const taskClass =
  "w-full rounded-md border border-border px-3 py-1.5 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-pressed:text-muted-foreground aria-pressed:line-through"

function Example() {
  const [keep, setKeep] = React.useState(true)
  return (
    <div className="flex flex-col gap-3 text-sm">
      <label className="flex items-center gap-2 text-muted-foreground">
        <input type="checkbox" checked={keep} onChange={(event) => setKeep(event.target.checked)} />
        Keep focus on the task
      </label>
      <Checklist keep={keep} className="grid min-h-36 w-80 grid-cols-2 items-start gap-3">
        {({ done }) =>
          [false, true].map((finished) => (
            <section key={String(finished)} className="flex flex-col gap-1.5">
              <h4 className="font-medium">{finished ? "Done" : "To do"}</h4>
              <ChecklistList aria-label={finished ? "Done" : "To do"} className="flex flex-col gap-1">
                {tasks
                  .filter((task) => done.includes(task) === finished)
                  .map((task) => (
                    <li key={task}>
                      <ChecklistTask value={task} className={taskClass}>
                        {task}
                      </ChecklistTask>
                    </li>
                  ))}
              </ChecklistList>
            </section>
          ))
        }
      </Checklist>
    </div>
  )
}

export {
  Checklist,
  checklist,
  ChecklistList,
  type ChecklistOptions,
  type ChecklistState,
  ChecklistTask,
  Example,
}
