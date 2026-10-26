import "@ui-sdk/web/checkbox"
import { Check, createElement, Minus } from "lucide"

const people = [
  { id: "sarah", name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin" },
  { id: "marcus", name: "Marcus Rodriguez", email: "marcus.rodriguez@example.com", role: "User" },
  { id: "priya", name: "Priya Patel", email: "priya.patel@example.com", role: "User" },
  { id: "david", name: "David Kim", email: "david.kim@example.com", role: "Editor" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xl flex-col gap-2">
      <ui-checkbox-group class="w-full overflow-hidden rounded-2xl border border-border" aria-label="Team members" default-value="sarah" all-values="${people.map((person) => person.id).join(",")}">
        <table class="w-full text-sm">
          <thead>
            <tr>
              <th class="h-10 w-10 px-3 text-start align-middle font-medium whitespace-nowrap">
                <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" aria-label="Select all" parent>
                  <ui-checkbox-indicator class="group grid place-content-center">
                    ${createElement(Check, { class: "size-3.5 group-data-indeterminate:hidden", "aria-hidden": "true" }).outerHTML}
                    ${createElement(Minus, { class: "hidden size-3.5 group-data-indeterminate:block", "aria-hidden": "true" }).outerHTML}
                  </ui-checkbox-indicator>
                </ui-checkbox>
              </th>
              <th class="h-10 px-3 text-start align-middle font-medium whitespace-nowrap">Name</th>
              <th class="hidden h-10 px-3 text-start align-middle font-medium whitespace-nowrap sm:table-cell">Email</th>
              <th class="h-10 px-3 text-start align-middle font-medium whitespace-nowrap">Role</th>
            </tr>
          </thead>
          <tbody>
            ${people
              .map(
                (person) => `
                  <tr class="border-t border-border transition-colors hover:bg-muted/50 has-data-checked:bg-muted">
                    <td class="h-11 px-3 align-middle">
                      <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" value="${person.id}" aria-label="Select ${person.name}">
                        <ui-checkbox-indicator class="grid place-content-center">
                          ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
                        </ui-checkbox-indicator>
                      </ui-checkbox>
                    </td>
                    <td class="h-11 px-3 align-middle font-medium whitespace-nowrap">${person.name}</td>
                    <td class="hidden h-11 px-3 align-middle whitespace-nowrap text-muted-foreground sm:table-cell">${person.email}</td>
                    <td class="h-11 px-3 align-middle whitespace-nowrap">${person.role}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </ui-checkbox-group>
      <output class="block min-h-5 text-sm text-muted-foreground">1 of ${people.length} selected</output>
    </div>
  `
  root.querySelector("ui-checkbox-group")!.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string[] }>).detail
    root.querySelector("output")!.textContent = `${value.length} of ${people.length} selected`
  })
}

export { mount }
