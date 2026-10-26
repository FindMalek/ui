import "@ui-sdk/web/toast"
import { createToaster } from "@ui-sdk/web"

export function mount(root: HTMLElement) {
  const toast = createToaster()

  const placements = [
    { side: "top", align: "start", label: "Top Left" },
    { side: "top", align: "center", label: "Top Center" },
    { side: "top", align: "end", label: "Top Right" },
    { side: "bottom", align: "start", label: "Bottom Left" },
    { side: "bottom", align: "center", label: "Bottom Center" },
    { side: "bottom", align: "end", label: "Bottom Right" },
  ] as const

  root.innerHTML = `
    <div class="flex flex-wrap gap-2">
      ${placements
        .map(
          (item) =>
            `<button class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">${item.label}</button>`,
        )
        .join("")}
    </div>
    <ui-toast-region side="bottom" align="end" class="m-4 w-[356px] max-w-[calc(100vw-2rem)] h-(--toast-front-height) outline-none [--dir:-1] data-[side=top]:[--dir:1] data-expanded:h-[calc(var(--toast-stack-height)+(var(--toast-count)-1)*0.75rem)]">
      <template>
        <ui-toast class="absolute inset-x-0 z-[calc(100-var(--toast-index))] flex items-center gap-3 overflow-hidden rounded-2xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[translate,scale,opacity,height,box-shadow] duration-300 in-data-[side=bottom]:bottom-0 in-data-[side=top]:top-0 [--y:calc(var(--dir)*var(--toast-index)*0.75rem)] [translate:var(--toast-swipe-x,0px)_calc(var(--y)+var(--toast-swipe-y,0px))] scale-[calc(1-var(--toast-index)*0.05)] not-data-front:not-data-expanded:h-(--toast-front-height) focus-visible:ring-3 focus-visible:ring-ring/30 data-expanded:scale-100 data-expanded:[--y:calc(var(--dir)*(var(--toast-offset)+var(--toast-index)*0.75rem))] data-starting-style:opacity-0 data-starting-style:[--y:calc(var(--dir)*-100%)] data-ending-style:opacity-0 data-swiping:transition-none motion-reduce:transition-none dark:ring-foreground/10">
          <div class="grid flex-1 gap-1">
            <ui-toast-title class="font-medium"></ui-toast-title>
            <ui-toast-description class="text-muted-foreground"></ui-toast-description>
          </div>
        </ui-toast>
      </template>
    </ui-toast-region>
  `
  const region = Object.assign(root.querySelector("ui-toast-region")!, {
    toaster: toast,
  })
  root.querySelectorAll("button").forEach((button, index) => {
    const item = placements[index]
    button.addEventListener("click", () => {
      region.setAttribute("side", item.side)
      region.setAttribute("align", item.align)
      toast("Event has been created", { description: item.label })
    })
  })
  return () => {
    toast.dismiss()
  }
}
