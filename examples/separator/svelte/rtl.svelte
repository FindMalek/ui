<script lang="ts">
  import { Separator } from "@ui-sdk/svelte/separator"
</script>

<div dir="rtl" class="flex max-w-sm flex-col gap-4 text-sm text-foreground">
  <div class="flex flex-col gap-1.5">
    <div class="leading-none font-medium">الحساب</div>
    <p class="text-muted-foreground">إدارة ملفك الشخصي وتفضيلاتك.</p>
  </div>
  <Separator
    class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
  />
  <div class="flex h-5 items-center gap-4">
    <div>الملف الشخصي</div>
    <Separator
      orientation="vertical"
      class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
    />
    <div>الفوترة</div>
    <Separator
      orientation="vertical"
      class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
    />
    <div>الإعدادات</div>
  </div>
</div>
