import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/react/drawer"

const links = ["الرئيسية", "الطلبات", "المنتجات", "العملاء", "الإعدادات"]

export function Example() {
  return (
    <div dir="rtl">
      <Drawer side="start">
        <DrawerTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          القائمة
        </DrawerTrigger>
        <DrawerBackdrop className="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent className="relative flex h-full w-80 max-w-[85vw] flex-col gap-4 rounded-e-[min(var(--radius-4xl),24px)] bg-popover p-4 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-y-0 after:end-full after:w-24 after:bg-inherit dark:ring-foreground/10">
          <div className="flex flex-col gap-0.5 md:gap-1.5">
            <DrawerTitle className="text-base font-medium text-foreground">القائمة</DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              اسحبها نحو حافتها لإغلاقها.
            </DrawerDescription>
          </div>
          <nav aria-label="الأقسام">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="https://example.com"
                    className="block rounded-xl px-2 py-1.5 outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DrawerClose className="mt-auto inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50">
            إغلاق
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
