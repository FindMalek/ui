import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/solid/drawer"

function Example() {
  return (
    <Drawer>
      <DrawerTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
        Account
      </DrawerTrigger>
      <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
      <DrawerContent class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg origin-top flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none [scale:calc(1-var(--drawer-stack)*0.04)] after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <DrawerTitle class="text-base font-medium text-foreground">Account</DrawerTitle>
          <DrawerDescription class="text-sm text-muted-foreground">Manage how you sign in.</DrawerDescription>
        </div>
        <dl class="mx-4 divide-y divide-border rounded-2xl border border-border">
          <div class="flex justify-between gap-4 px-3 py-2">
            <dt class="text-muted-foreground">Email</dt>
            <dd>ada@example.com</dd>
          </div>
          <div class="flex justify-between gap-4 px-3 py-2">
            <dt class="text-muted-foreground">Password</dt>
            <dd>Changed 3 months ago</dd>
          </div>
          <div class="flex justify-between gap-4 px-3 py-2">
            <dt class="text-muted-foreground">Two-factor</dt>
            <dd>On</dd>
          </div>
        </dl>
        <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Drawer>
            <DrawerTrigger class="inline-flex cursor-default h-8 w-full shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
              Change password
            </DrawerTrigger>
            <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
            <DrawerContent class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg origin-top flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none [scale:calc(1-var(--drawer-stack)*0.04)] after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
              <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
              <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
                <DrawerTitle class="text-base font-medium text-foreground">Change password</DrawerTitle>
                <DrawerDescription class="text-sm text-muted-foreground">
                  Use at least 12 characters.
                </DrawerDescription>
              </div>
              <label class="grid gap-2 px-4 text-sm leading-none font-medium">
                New password
                <input
                  type="password"
                  class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
                />
              </label>
              <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <DrawerClose class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
                  Update
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
          <DrawerClose class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
            Done
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export { Example }
