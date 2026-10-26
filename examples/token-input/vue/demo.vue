<script setup lang="ts">
import { File, X } from "@lucide/vue"
import { TokenInput, TokenInputEditor, TokenInputToken, TokenInputTokenRemove } from "@ui-sdk/vue/token-input"
import {
  type TriggerMenuDataItem,
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuItem,
  TriggerMenuList,
} from "@ui-sdk/vue/trigger-menu"

const files = [
  { value: "src/app.tsx", label: "app.tsx", keywords: ["src"] },
  { value: "src/routes.ts", label: "routes.ts", keywords: ["src"] },
  { value: "src/styles.css", label: "styles.css", keywords: ["src"] },
  { value: "README.md", label: "README.md" },
  { value: "package.json", label: "package.json" },
]
</script>

<template>
  <TokenInput>
    <TokenInputEditor
      aria-label="Prompt"
      placeholder="Ask about a file, type @ to add one"
      class="relative h-28 overflow-y-auto w-96 max-w-full rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-empty:before:pointer-events-none data-empty:before:absolute data-empty:before:text-muted-foreground data-empty:before:content-[attr(aria-placeholder)] md:text-sm motion-reduce:transition-none"
    />
    <TriggerMenu :triggers="[{ char: '@', type: 'file', items: files }]">
      <TriggerMenuContent
        class="max-h-[min(18rem,var(--available-height))] w-56 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none"
      >
        <TriggerMenuList v-slot="{ state }">
          <TriggerMenuItem
            v-for="item in state.items as TriggerMenuDataItem[]"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {{ item.label }}
          </TriggerMenuItem>
        </TriggerMenuList>
      </TriggerMenuContent>
    </TriggerMenu>
    <template #token="{ token }">
      <TokenInputToken
        class="inline-flex items-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 align-baseline font-medium text-foreground data-selected:ring-3 data-selected:ring-ring/30 dark:bg-input/60"
      >
        <File aria-hidden="true" class="size-3.5 shrink-0" />
        {{ token.label }}
        <TokenInputTokenRemove
          class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full opacity-50 hover:opacity-100"
        >
          <X aria-hidden="true" class="size-3" />
        </TokenInputTokenRemove>
      </TokenInputToken>
    </template>
  </TokenInput>
</template>
