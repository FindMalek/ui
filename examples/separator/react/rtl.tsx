import { Separator } from "@ui-sdk/react/separator"

export function Example() {
  return (
    <div dir="rtl" className="flex max-w-sm flex-col gap-4 text-sm text-foreground">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">الحساب</div>
        <p className="text-muted-foreground">إدارة ملفك الشخصي وتفضيلاتك.</p>
      </div>
      <Separator className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch" />
      <div className="flex h-5 items-center gap-4">
        <div>الملف الشخصي</div>
        <Separator
          orientation="vertical"
          className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
        />
        <div>الفوترة</div>
        <Separator
          orientation="vertical"
          className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
        />
        <div>الإعدادات</div>
      </div>
    </div>
  )
}
