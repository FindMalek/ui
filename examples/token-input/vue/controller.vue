<script setup lang="ts">
import {
  createTokenInputController,
  TokenInput,
  TokenInputEditor,
  type TokenInputValue,
} from "@ui-sdk/vue/token-input"

const draft: TokenInputValue = [
  "Explain ",
  { type: "file", value: "src/routes.ts", label: "routes.ts" },
  " in two sentences.",
]

const loadFile = () => new Promise<void>((resolve) => setTimeout(resolve, 800))

const prompt = createTokenInputController()

const first = () => prompt.getValue().find((segment) => typeof segment !== "string")

function rename() {
  const token = first()
  if (typeof token === "object") prompt.updateToken(token.id!, { label: token.label.toUpperCase() })
}

function remove() {
  const token = first()
  if (typeof token === "object") prompt.removeToken(token.id!)
}
</script>

<template>
  <div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
    <TokenInput :controller="prompt" :default-value="draft">
      <TokenInputEditor
        aria-label="Prompt"
        class="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm [&_[data-pending]]:opacity-50 [&_[data-token-type]]:rounded-2xl [&_[data-token-type]]:bg-input [&_[data-token-type]]:px-1.5 [&_[data-token-type]]:font-medium dark:[&_[data-token-type]]:bg-input/60 motion-reduce:transition-none"
      />
    </TokenInput>
    <div class="flex flex-wrap gap-2" @mousedown.prevent>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        @click="
          prompt.insert(
            { type: 'file', value: 'package.json', label: 'package.json' },
            { at: 'end', resolve: loadFile() },
          )
        "
      >
        Attach package.json
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        @click="rename"
      >
        Rename first
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        @click="remove"
      >
        Remove first
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        @click="prompt.canUndo() && prompt.undo()"
      >
        Undo
      </button>

      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        @click="prompt.clear()"
      >
        Clear
      </button>
    </div>
  </div>
</template>
