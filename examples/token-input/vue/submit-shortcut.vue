<script setup lang="ts">
import { toLabel, TokenInput, TokenInputEditor, type TokenInputValue } from "@ui-sdk/vue/token-input"
import { ref } from "vue"

const sent = ref("")
</script>

<template>
  <div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
    <TokenInput submit-shortcut="mod+enter" @submit="(value: TokenInputValue) => (sent = toLabel(value))">
      <TokenInputEditor
        aria-label="Message"
        placeholder="Enter adds a line, Cmd/Ctrl+Enter sends"
        class="relative h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-empty:before:pointer-events-none data-empty:before:absolute data-empty:before:text-muted-foreground data-empty:before:content-[attr(aria-placeholder)] md:text-sm motion-reduce:transition-none"
      />
    </TokenInput>
    <p class="h-12 overflow-y-auto text-sm whitespace-pre-wrap text-muted-foreground">
      {{ sent ? `Sent:\n${sent}` : "Nothing sent yet." }}
    </p>
  </div>
</template>
