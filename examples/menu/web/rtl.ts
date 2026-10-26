import "@ui-sdk/web/menu"
import { ChevronRight, createElement, File, Folder, Link, Mail, Share, Trash } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex flex-col items-center">
      <ui-menu>
        <ui-menu-trigger>
          <button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">ملف</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-40 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:ps-4 **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground">
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="new" shortcut="mod+n">
            ${createElement(File, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            جديد
          </ui-menu-item>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="open" shortcut="mod+o">
            ${createElement(Folder, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            فتح…
          </ui-menu-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-sub>
            <ui-menu-sub-trigger class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground">
              ${createElement(Share, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
              مشاركة
              ${createElement(ChevronRight, { class: "ms-auto size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </ui-menu-sub-trigger>
            <ui-menu-sub-content class="min-w-40 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
              <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="email">
                ${createElement(Mail, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                البريد الإلكتروني
              </ui-menu-item>
              <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="copy-link">
                ${createElement(Link, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                نسخ الرابط
              </ui-menu-item>
            </ui-menu-sub-content>
          </ui-menu-sub>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="delete">
            ${createElement(Trash, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            حذف
          </ui-menu-item>
        </ui-menu-content>
      </ui-menu>
      <output class="mt-3 text-sm text-muted-foreground">اختر عنصرًا</output>
    </div>
  `
  root.addEventListener(
    "action",
    (event) => {
      root.querySelector("output")!.textContent =
        `نُفّذ: ${(event as CustomEvent<{ value: string }>).detail.value}`
    },
    { capture: true },
  )
}
