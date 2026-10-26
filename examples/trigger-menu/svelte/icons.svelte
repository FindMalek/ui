<script lang="ts">
  import { Clock, Reply, Search, Share, Trash } from "@lucide/svelte"
  import {
    TriggerMenu,
    TriggerMenuContent,
    TriggerMenuInput,
    TriggerMenuItem,
    TriggerMenuItemIcon,
    TriggerMenuList,
  } from "@ui-sdk/svelte/trigger-menu"

  const commands = [
    { value: "reply", icon: Reply, mirror: true },
    { value: "remind", icon: Clock },
    { value: "search", icon: Search },
    { value: "share", icon: Share },
    { value: "clear", icon: Trash },
  ]
</script>

<TriggerMenu triggers={[{ char: "/", boundary: "start", type: "command" }]}>
  <TriggerMenuInput
    aria-label="Message"
    placeholder="Type / for commands"
    class="min-h-20 w-full max-w-sm resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
  />
  <TriggerMenuContent
    class="max-h-[min(16rem,var(--available-height))] w-48 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none"
  >
    <TriggerMenuList>
      {#each commands as command (command.value)}
        <TriggerMenuItem
          value={command.value}
          class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        ><TriggerMenuItemIcon
          mirror={command.mirror}
          class="flex text-muted-foreground group-data-highlighted:text-foreground"
        ><command.icon class="size-4" /></TriggerMenuItemIcon
          >{command.value}</TriggerMenuItem
        >
      {/each}
    </TriggerMenuList>
  </TriggerMenuContent>
</TriggerMenu>
