<script lang="ts">
  import {
    type TriggerMenuDataItem,
    TriggerMenu,
    TriggerMenuContent,
    TriggerMenuInput,
    TriggerMenuItem,
    TriggerMenuList,
  } from "@ui-sdk/svelte/trigger-menu"

  const people = [
    { value: "ada", label: "Ada Lovelace", keywords: ["ada"] },
    { value: "alan", label: "Alan Turing" },
    { value: "grace", label: "Grace Hopper" },
    { value: "katherine", label: "Katherine Johnson" },
    { value: "linus", label: "Linus Torvalds", disabled: true },
    { value: "margaret", label: "Margaret Hamilton" },
  ]

  const commands = [
    {
      value: "model",
      label: "model",
      arguments: [
        { name: "model", hint: "<model>", required: true, items: ["opus", "sonnet", "haiku"] },
        { name: "effort", hint: "[effort]", items: ["low", "medium", "high"], allowCustomValue: false },
      ],
    },
    { value: "search", label: "search", arguments: [{ name: "query", hint: "<query>", required: true }] },
    { value: "clear", label: "clear" },
    { value: "send", label: "send", after: "submit" as const },
  ]

  let open = $state(false)
  let log = $state<string[]>([])
  const note = (line: string) => (log = [line, ...log].slice(0, 4))
  const triggers = [
    { char: "@", items: people },
    { char: "/", boundary: "start" as const, items: commands },
  ]
</script>

<TriggerMenu
  bind:open
  {triggers}
  autoHighlight={false}
  loop={false}
  shortcut="ctrl+j"
  status="idle"
  onOpenChange={(next, details) => note(`${next ? "opened" : "closed"} ${details.trigger ?? ""} (${details.reason})`)}
  onOpenChangeComplete={(next) => note(next ? "finished opening" : "finished closing")}
  onQueryChange={(query, details) => note(`query “${query}”${details.argument ? ` for ${details.argument}` : ""}`)}
>
  <div class="flex w-full max-w-sm flex-col gap-2">
    <TriggerMenuInput
      aria-label="Message"
      placeholder="Type @ or /"
      class="min-h-20 w-full resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
    />
    <ul class="min-h-20 text-sm text-muted-foreground">
      {#each log as line, index (index)}
        <li>{line}</li>
      {/each}
    </ul>
  </div>
  <TriggerMenuContent
    class="max-h-[min(16rem,var(--available-height))] w-56 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none"
  >
    <TriggerMenuList>
      {#snippet children(state)}
        {#each (state.items as TriggerMenuDataItem[]) as item (item.value)}
          <TriggerMenuItem
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {item.label}
          </TriggerMenuItem>
        {/each}
      {/snippet}
    </TriggerMenuList>
  </TriggerMenuContent>
</TriggerMenu>
