import "@ui-sdk/web/tabs"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="w-full max-w-md">
      <ui-tabs class="flex flex-col gap-2" default-value="account">
        <ui-tabs-list class="relative flex items-center gap-1 border-b border-border pb-1" aria-label="الإعدادات">
          <ui-tabs-tab value="account">
            <button class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground">الحساب</button>
          </ui-tabs-tab>
          <ui-tabs-tab value="password">
            <button class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground">كلمة المرور</button>
          </ui-tabs-tab>
          <ui-tabs-tab value="notifications">
            <button class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground">الإشعارات</button>
          </ui-tabs-tab>
          <ui-tabs-indicator class="absolute -bottom-px left-(--active-tab-left) h-0.5 w-(--active-tab-width) bg-foreground transition-[left,width] duration-200"></ui-tabs-indicator>
        </ui-tabs-list>
        <ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="account">عدّل اسمك وبريدك الإلكتروني وصورتك.</ui-tabs-panel>
        <ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="password">غيّر كلمة المرور وفعّل التحقق بخطوتين.</ui-tabs-panel>
        <ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="notifications">اختر ما نرسله إليك بالبريد.</ui-tabs-panel>
      </ui-tabs>
    </div>
  `
}
