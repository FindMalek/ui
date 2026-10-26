import type { AccordionController } from "@ui-sdk/core/accordion"
import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items = [
  { value: "account", label: "Account", content: "Your name, email address and profile photo." },
  { value: "security", label: "Security", content: "Your password, passkeys and two-factor authentication." },
  { value: "sessions", label: "Sessions", content: "Devices signed in to your account in the last 30 days." },
]

type AccordionElement = HTMLElement & { value: string[]; api: AccordionController }

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="w-full max-w-md">
      <div class="mb-2 flex flex-wrap gap-2">
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50" data-action="expand">Expand all</button>
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50" data-action="collapse">Collapse all</button>
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50" data-action="security">Review security</button>
      </div>
      <ui-accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" multiple default-value="account">
        ${items
          .map(
            (item) => `
              <ui-accordion-item class="border-0 border-border not-last:border-b data-open:bg-muted/50" value="${item.value}">
                <ui-accordion-header>
                  <h3 class="m-0 flex [font:inherit]">
                    <ui-accordion-trigger>
                      <button type="button" class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                        ${item.label}
                        ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
                      </button>
                    </ui-accordion-trigger>
                  </h3>
                </ui-accordion-header>
                <ui-accordion-panel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                  <div class="m-0 pb-4">${item.content}</div>
                </ui-accordion-panel>
              </ui-accordion-item>`,
          )
          .join("")}
      </ui-accordion>
      <output class="mt-2 block min-h-10 text-sm leading-5 text-muted-foreground">Open: account</output>
    </div>
  `
  const accordion = root.querySelector("ui-accordion") as AccordionElement
  const run: Record<string, () => void> = {
    expand: () => (accordion.value = items.map((item) => item.value)),
    collapse: () => (accordion.value = []),
    security: () => accordion.api.open("security"),
  }
  for (const action of root.querySelectorAll<HTMLElement>("[data-action]"))
    action.addEventListener("click", () => run[action.dataset.action!]())
  accordion.addEventListener("valuechange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: string[]; reason: string }>).detail
    root.querySelector("output")!.textContent = `Open: ${value.join(", ") || "none"}, last change: ${reason}`
  })
  accordion.addEventListener(
    "openchange",
    (event) => {
      const open = (event as CustomEvent<{ value: boolean }>).detail.value
      const item = (event.target as HTMLElement).getAttribute("value")
      if (!open && item === "security" && !window.confirm("Close the security settings?"))
        event.preventDefault()
    },
    { capture: true },
  )
}

export { mount }
