import type { TokenInputValue } from "@ui-sdk/core/token-input"
import "@ui-sdk/web/token-input"
import "@ui-sdk/web/trigger-menu"

const files = [
  { value: "src/app.tsx", label: "app.tsx", keywords: ["src"] },
  { value: "src/routes.ts", label: "routes.ts", keywords: ["src"] },
  { value: "src/styles.css", label: "styles.css", keywords: ["src"] },
  { value: "README.md", label: "README.md" },
  { value: "package.json", label: "package.json" },
]

const draft: TokenInputValue = [
  "Explain ",
  { type: "file", value: "src/routes.ts", label: "routes.ts", data: { trigger: "@" } },
  " in two sentences.",
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
      <div role="radiogroup" aria-label="Backspace" class="inline-flex h-8 w-fit items-center gap-0.5 rounded-2xl bg-muted p-0.5">
        ${["whole", "select", "revert"]
          .map(
            (option) =>
              `<label class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,box-shadow] hover:text-foreground has-checked:bg-background has-checked:text-foreground has-checked:shadow-sm has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/30 dark:text-muted-foreground dark:has-checked:border-input dark:has-checked:bg-input/30 dark:has-checked:text-foreground motion-reduce:transition-none"><input type="radio" name="token-deletion" value="${option}" ${option === "whole" ? "checked" : ""} class="sr-only" />${option}</label>`,
          )
          .join("")}
      </div>
    </div>
  `
  const input = document.createElement("ui-token-input")
  input.setAttribute("token-deletion", "whole")
  input.defaultValue = draft
  input.innerHTML = `
    <ui-token-input-editor aria-label="Prompt" class="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"></ui-token-input-editor>
    <template><ui-token-input-token class="rounded-2xl bg-input px-1.5 font-medium data-selected:bg-primary data-selected:text-primary-foreground dark:bg-input/60 dark:data-selected:bg-primary">@<span data-token-label></span></ui-token-input-token></template>
    <ui-trigger-menu>
      <template>
        <ui-trigger-menu-content class="max-h-[min(18rem,var(--available-height))] w-56 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
          <ui-trigger-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          </ui-trigger-menu-item>
        </ui-trigger-menu-content>
      </template>
    </ui-trigger-menu>
  `
  root.firstElementChild!.append(input)
  const menu = input.querySelector("ui-trigger-menu")!
  menu.triggers = [{ char: "@", type: "file", items: files }]
  for (const radio of root.querySelectorAll<HTMLInputElement>('input[type="radio"]'))
    radio.addEventListener("change", () => input.setAttribute("token-deletion", radio.value))
}
