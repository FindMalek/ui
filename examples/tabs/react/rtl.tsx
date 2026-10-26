import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"

export function Example() {
  return (
    <div dir="rtl" className="w-full max-w-md">
      <Tabs className="flex flex-col gap-2" defaultValue="account">
        <TabsList
          className="relative flex items-center gap-1 border-b border-border pb-1"
          aria-label="الإعدادات"
        >
          <TabsTab
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
            value="account"
          >
            الحساب
          </TabsTab>
          <TabsTab
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
            value="password"
          >
            كلمة المرور
          </TabsTab>
          <TabsTab
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
            value="notifications"
          >
            الإشعارات
          </TabsTab>
          <TabsIndicator className="absolute -bottom-px left-(--active-tab-left) h-0.5 w-(--active-tab-width) bg-foreground transition-[left,width] duration-200" />
        </TabsList>
        <TabsPanel
          className="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          value="account"
        >
          عدّل اسمك وبريدك الإلكتروني وصورتك.
        </TabsPanel>
        <TabsPanel
          className="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          value="password"
        >
          غيّر كلمة المرور وفعّل التحقق بخطوتين.
        </TabsPanel>
        <TabsPanel
          className="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          value="notifications"
        >
          اختر ما نرسله إليك بالبريد.
        </TabsPanel>
      </Tabs>
    </div>
  )
}
