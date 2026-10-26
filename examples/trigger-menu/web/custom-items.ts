import "@ui-sdk/web/trigger-menu"
import { createElement, Users } from "lucide"

const people = [
  { value: "ada", label: "Ada Lovelace", keywords: ["ada"] },
  { value: "alan", label: "Alan Turing" },
  { value: "grace", label: "Grace Hopper" },
  { value: "katherine", label: "Katherine Johnson" },
  { value: "linus", label: "Linus Torvalds", disabled: true },
  { value: "margaret", label: "Margaret Hamilton" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-trigger-menu>
      <ui-trigger-menu-input>
        <textarea aria-label="Message" placeholder="Type @ and a first name" class="min-h-20 w-full max-w-sm resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"></textarea>
      </ui-trigger-menu-input>
      <ui-trigger-menu-content class="max-h-[min(16rem,var(--available-height))] w-64 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
        <ui-trigger-menu-list>
          <ui-trigger-menu-group>
            <ui-trigger-menu-group-label class="px-2 py-1.5 text-xs text-muted-foreground">People</ui-trigger-menu-group-label>
            ${people
              .map(
                (person) => `
                  <ui-trigger-menu-item value="${person.value}" label="${person.label}"${person.keywords ? ` keywords="${person.keywords.join(",")}"` : ""}${person.disabled ? " disabled" : ""} class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                    <span aria-hidden="true" class="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">${person.label[0]}</span>
                    ${person.label}
                  </ui-trigger-menu-item>`,
              )
              .join("")}
          </ui-trigger-menu-group>
          <ui-trigger-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-trigger-menu-separator>
          <ui-trigger-menu-item value="here" label="here" keywords="everyone,channel" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-trigger-menu-item-icon class="flex size-6 items-center justify-center">${createElement(Users, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-trigger-menu-item-icon>
            Notify everyone here
          </ui-trigger-menu-item>
        </ui-trigger-menu-list>
      </ui-trigger-menu-content>
    </ui-trigger-menu>
  `
  const menu = root.querySelector("ui-trigger-menu")!
  menu.triggers = [
    {
      char: "@",
      spaces: 2,
      maxLength: 30,
      pattern: /[\p{L}.'-]/u,
      filter: "startsWith",
      insert: (item) => `@${item.label.split(" ")[0]} `,
    },
  ]
  menu.addEventListener("select", (event) => {
    if (event.detail.value === "here") {
      event.detail.insert("@here ")
    }
  })
}

export { mount }
