import "@ui-sdk/web/hover-card"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl">
      <ui-hover-card>
        <ui-hover-card-trigger><a href="https://example.com/people/ada" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">آدا لوفليس</a></ui-hover-card-trigger>
        <ui-hover-card-content align="start" side-offset="10" class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-hover-card-arrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l dark:border-foreground/10"></ui-hover-card-arrow>
          <p class="font-medium">آدا لوفليس</p>
          <p>كتبت أول برنامج منشور للمحرك التحليلي.</p>
        </ui-hover-card-content>
      </ui-hover-card>
    </div>
  `
}

export { mount }
