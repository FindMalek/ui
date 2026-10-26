import "@ui-sdk/web/command"

const commands = [
  { value: "calendar", label: "التقويم" },
  { value: "search", label: "البحث" },
  { value: "settings", label: "الإعدادات" },
  { value: "profile", label: "الملف الشخصي" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="w-full max-w-sm">
      <ui-command class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
        <div class="p-1 pb-0">
          <ui-command-input>
            <input aria-label="ابحث عن أمر" placeholder="ابحث..." class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm" />
          </ui-command-input>
        </div>
        <ui-command-empty class="py-6 text-center text-sm text-muted-foreground empty:hidden">لا توجد نتائج.</ui-command-empty>
        <ui-command-list class="max-h-72 scroll-py-1 overflow-y-auto p-1 outline-none">
          ${commands
            .map(
              (item) =>
                `<ui-command-item value="${item.value}" label="${item.label}" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">${item.label}</ui-command-item>`,
            )
            .join("")}
        </ui-command-list>
      </ui-command>
    </div>
  `
}
