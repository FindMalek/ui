import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { createSignal, For } from "solid-js"

const people = [
  { id: "sarah", name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin" },
  { id: "marcus", name: "Marcus Rodriguez", email: "marcus.rodriguez@example.com", role: "User" },
  { id: "priya", name: "Priya Patel", email: "priya.patel@example.com", role: "User" },
  { id: "david", name: "David Kim", email: "david.kim@example.com", role: "Editor" },
]

function Example() {
  const [selected, setSelected] = createSignal(["sarah"])

  return (
    <div class="flex w-full max-w-xl flex-col gap-2">
      <CheckboxGroup
        class="w-full overflow-hidden rounded-2xl border border-border"
        aria-label="Team members"
        value={selected()}
        onValueChange={setSelected}
        allValues={people.map((person) => person.id)}
      >
        <table class="w-full text-sm">
          <thead>
            <tr>
              <th class="h-10 w-10 px-3 text-start align-middle font-medium whitespace-nowrap">
                <Checkbox
                  class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
                  aria-label="Select all"
                  parent
                >
                  <CheckboxIndicator class="group grid place-content-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="size-3.5 group-data-indeterminate:hidden"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="hidden size-3.5 group-data-indeterminate:block"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </CheckboxIndicator>
                </Checkbox>
              </th>
              <th class="h-10 px-3 text-start align-middle font-medium whitespace-nowrap">Name</th>
              <th class="hidden h-10 px-3 text-start align-middle font-medium whitespace-nowrap sm:table-cell">
                Email
              </th>
              <th class="h-10 px-3 text-start align-middle font-medium whitespace-nowrap">Role</th>
            </tr>
          </thead>
          <tbody>
            <For each={people}>
              {(person) => (
                <tr class="border-t border-border transition-colors hover:bg-muted/50 has-data-checked:bg-muted">
                  <td class="h-11 px-3 align-middle">
                    <Checkbox
                      class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
                      value={person.id}
                      aria-label={`Select ${person.name}`}
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
                  </td>
                  <td class="h-11 px-3 align-middle font-medium whitespace-nowrap">{person.name}</td>
                  <td class="hidden h-11 px-3 align-middle whitespace-nowrap text-muted-foreground sm:table-cell">
                    {person.email}
                  </td>
                  <td class="h-11 px-3 align-middle whitespace-nowrap">{person.role}</td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </CheckboxGroup>
      <output class="block min-h-5 text-sm text-muted-foreground">
        {selected().length} of {people.length} selected
      </output>
    </div>
  )
}

export { Example }
