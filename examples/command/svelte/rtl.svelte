<script lang="ts">
  import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@ui-sdk/svelte/command"

  const commands = [
    { value: "calendar", label: "التقويم" },
    { value: "search", label: "البحث" },
    { value: "settings", label: "الإعدادات" },
    { value: "profile", label: "الملف الشخصي" },
  ]

</script>

<div dir="rtl" class="w-full max-w-sm">
  <Command
    class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
  >
    <div class="p-1 pb-0">
      <CommandInput
        aria-label="ابحث عن أمر"
        placeholder="ابحث..."
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
      />
    </div>
    <CommandEmpty class="py-6 text-center text-sm text-muted-foreground empty:hidden">لا توجد نتائج.</CommandEmpty>
    <CommandList class="max-h-72 scroll-py-1 overflow-y-auto p-1 outline-none">
      {#each commands as item (item.value)}
        <CommandItem
          value={item.value}
          label={item.label}
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {item.label}
        </CommandItem>
      {/each}
    </CommandList>
  </Command>
</div>
