import "@ui-sdk/web/separator"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex max-w-sm flex-col gap-4 text-sm text-foreground">
      <div class="flex flex-col gap-1.5">
        <div class="leading-none font-medium">الحساب</div>
        <p class="text-muted-foreground">إدارة ملفك الشخصي وتفضيلاتك.</p>
      </div>
      <ui-separator class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
      <div class="flex h-5 items-center gap-4">
        <div>الملف الشخصي</div>
        <ui-separator orientation="vertical" class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
        <div>الفوترة</div>
        <ui-separator orientation="vertical" class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
        <div>الإعدادات</div>
      </div>
    </div>
  `
}
