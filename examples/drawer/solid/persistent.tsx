import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/solid/drawer"
import { createSignal } from "solid-js"

function Example() {
  let chat: HTMLButtonElement | undefined
  const [messages, setMessages] = createSignal(0)
  return (
    <>
      <Drawer
        persistentElements={() => (chat ? [chat] : [])}
        onOpenChange={(open) => {
          if (open) requestAnimationFrame(() => chat?.showPopover())
          else chat?.hidePopover()
        }}
      >
        <DrawerTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Upgrade plan
        </DrawerTrigger>
        <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <DrawerTitle class="text-base font-medium text-foreground">Upgrade to Pro</DrawerTitle>
            <DrawerDescription class="text-sm text-muted-foreground">
              Questions? The chat in the corner still works.
            </DrawerDescription>
          </div>
          <div class="flex flex-col gap-2 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <DrawerClose
              value="upgrade"
              class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >
              Upgrade
            </DrawerClose>
            <DrawerClose class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
              Not now
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
      <button
        ref={chat}
        type="button"
        popover="manual"
        onClick={() => setMessages((count) => count + 1)}
        class="fixed inset-auto end-4 top-4 m-0 inline-flex cursor-default not-open:hidden h-9 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-4 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
      >
        Chat with us{messages() ? ` (${messages()})` : ""}
      </button>
    </>
  )
}

export { Example }
