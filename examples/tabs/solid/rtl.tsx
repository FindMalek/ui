import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "@ui-sdk/solid/tabs"

export function Example() {
  return (
    <div dir="rtl" class="w-full max-w-md">
      <Tabs class="flex flex-col gap-2" defaultValue="account">
        <TabsList class="relative flex items-center gap-1 border-b border-border pb-1" aria-label="الإعدادات">
          <TabsTab
            class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
            value="account"
          >
            الحساب
          </TabsTab>
          <TabsTab
            class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
            value="password"
          >
            كلمة المرور
          </TabsTab>
          <TabsTab
            class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
            value="notifications"
          >
            الإشعارات
          </TabsTab>
          <TabsIndicator class="absolute -bottom-px left-(--active-tab-left) h-0.5 w-(--active-tab-width) bg-foreground transition-[left,width] duration-200" />
        </TabsList>
        <TabsPanel
          class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          value="account"
        >
          عدّل اسمك وبريدك الإلكتروني وصورتك.
        </TabsPanel>
        <TabsPanel
          class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          value="password"
        >
          غيّر كلمة المرور وفعّل التحقق بخطوتين.
        </TabsPanel>
        <TabsPanel
          class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          value="notifications"
        >
          اختر ما نرسله إليك بالبريد.
        </TabsPanel>
      </Tabs>
    </div>
  )
}
