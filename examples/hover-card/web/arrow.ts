import "@ui-sdk/web/hover-card"

const alan = {
  handle: "alan",
  name: "Alan Turing",
  bio: "Described the universal machine every computer descends from.",
}
const groups = [
  { name: "side", values: ["top", "right", "bottom", "left"], current: "bottom" },
  { name: "align", values: ["start", "center", "end"], current: "center" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-8">
      <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        ${groups
          .map(
            ({ name, values, current }) => `
        <span class="text-end text-sm text-muted-foreground">${name}</span>
        <div role="group" aria-label="${name}" data-attribute="${name}" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${values.map((value) => `<button type="button" value="${value}" aria-pressed="${value === current}" class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`).join("")}
        </div>`,
          )
          .join("")}
      </div>
      <ui-hover-card>
        <ui-hover-card-trigger><a href="https://example.com/people/alan" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">@${alan.handle}</a></ui-hover-card-trigger>
        <ui-hover-card-content side="bottom" align="center" side-offset="10" arrow-padding="12" class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-hover-card-arrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l dark:border-foreground/10"></ui-hover-card-arrow>
          <p class="font-medium">${alan.name}</p>
          <p>${alan.bio}</p>
        </ui-hover-card-content>
      </ui-hover-card>
    </div>
  `
  const content = root.querySelector("ui-hover-card-content")!
  for (const group of root.querySelectorAll<HTMLElement>("[data-attribute]"))
    group.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button")
      if (!button) return
      content.setAttribute(group.dataset.attribute!, button.value)
      for (const other of group.querySelectorAll("button"))
        other.setAttribute("aria-pressed", String(other === button))
    })
}

export { mount }
