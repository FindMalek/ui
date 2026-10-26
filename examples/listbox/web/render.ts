import "@ui-sdk/web/listbox"
import { createElement, ExternalLink } from "lucide"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "sveltekit", label: "SvelteKit" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-listbox default-value="next" activation="manual" aria-label="Framework docs" class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none">
      ${frameworks
        .map(
          (framework) => `
            <ui-listbox-item value="${framework.value}" label="${framework.label}" as-child>
              <a href="#${framework.value}" class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 text-inherit no-underline data-selected:font-medium">
                ${framework.label}
                ${createElement(ExternalLink, { class: "pointer-events-none hidden size-4 shrink-0 ms-auto text-muted-foreground group-data-selected:block", "aria-hidden": "true" }).outerHTML}
              </a>
            </ui-listbox-item>`,
        )
        .join("")}
    </ui-listbox>
  `
}

export { mount }
