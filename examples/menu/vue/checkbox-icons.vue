<script setup lang="ts">
import { Bell, Check, Mail, Smartphone } from "@lucide/vue"
import { Menu, MenuCheckboxItem, MenuContent, MenuGroup, MenuGroupLabel, MenuTrigger } from "@ui-sdk/vue/menu"
import { ref } from "vue"

const channels = [
  { value: "email", label: "Email", icon: Mail },
  { value: "sms", label: "Text message", icon: Smartphone },
  { value: "push", label: "Push", icon: Bell },
]

const enabled = ref(["email", "push"])

function toggle(value: string, checked: boolean) {
  enabled.value = checked ? [...enabled.value, value] : enabled.value.filter((current) => current !== value)
}
</script>

<template>
  <Menu>
    <MenuTrigger
      class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
    >
      <Bell class="size-4" />
      Notifications
    </MenuTrigger>
    <MenuContent
      class="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
      <MenuGroup>
        <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Notify me by</MenuGroupLabel>
        <MenuCheckboxItem
          v-for="channel in channels"
          :key="channel.value"
          v-slot="{ state }"
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-checked:text-foreground data-unchecked:text-muted-foreground"
          :value="channel.value"
          :checked="enabled.includes(channel.value)"
          @update:checked="(checked: boolean) => toggle(channel.value, checked)"
        >
          <component :is="channel.icon" class="size-4" />
          {{ channel.label }}
          <Check v-if="state.checked" class="ms-auto size-4" />
        </MenuCheckboxItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
  <output class="mt-3 text-sm text-muted-foreground">{{
    enabled.length ? `On: ${enabled.join(", ")}` : "All notifications off"
  }}</output>
</template>
