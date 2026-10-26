<script setup lang="ts">
import { Check, ChevronRight, Clock, Code, File, Plus, X } from "@lucide/vue"
import {
  TokenInput,
  TokenInputEditor,
  TokenInputToken,
  TokenInputTokenRemove,
  type TokenInputValue,
  createTokenInputController,
  toText,
} from "@ui-sdk/vue/token-input"
import {
  type TriggerMenuDataItem,
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuEmpty,
  TriggerMenuHint,
  TriggerMenuItem,
  TriggerMenuList,
  type TriggerMenuSelectDetails,
} from "@ui-sdk/vue/trigger-menu"
import { onBeforeUnmount, ref } from "vue"

const files = [
  { value: "src/app.tsx", label: "app.tsx", keywords: ["src"] },
  { value: "src/routes.ts", label: "routes.ts", keywords: ["src"] },
  { value: "src/styles.css", label: "styles.css", keywords: ["src"] },
  { value: "README.md", label: "README.md" },
  { value: "package.json", label: "package.json" },
]

const skills = [
  { value: "search", label: "search", arguments: [{ name: "query", hint: "<query>", required: true }] },
  { value: "review", label: "review" },
  { value: "summarize", label: "summarize" },
]

const loadFile = () => new Promise<void>((resolve) => setTimeout(resolve, 800))

const prompt = createTokenInputController()
const sent = ref<string[]>([])
const running = ref(false)
let sendTimer: ReturnType<typeof setTimeout> | undefined

onBeforeUnmount(() => clearTimeout(sendTimer))

function send(value: TokenInputValue) {
  if (running.value || !prompt.getLabel().trim()) return
  running.value = true
  const skillTokens = value.filter((segment) => typeof segment !== "string" && segment.type === "skill")
  for (const skill of skillTokens)
    if (typeof skill !== "string") prompt.updateToken(skill.id!, { data: { ...skill.data, run: "running" } })
  sendTimer = setTimeout(() => {
    for (const skill of skillTokens)
      if (typeof skill !== "string") prompt.updateToken(skill.id!, { data: { ...skill.data, run: "done" } })
    sent.value = [...sent.value, toText(prompt.getValue())]
    prompt.clear()
    running.value = false
  }, 1500)
}

const onSelect = (value: string, details: TriggerMenuSelectDetails<string>) =>
  details.trigger === "@" ? loadFile() : undefined

function attachReadme() {
  prompt.insert({ type: "file", value: "README.md", label: "README.md" }, { resolve: loadFile() })
}
</script>

<template>
  <div class="flex w-full max-w-md min-w-0 flex-col gap-3">
    <ul class="flex h-16 flex-col gap-1 overflow-y-auto text-sm text-muted-foreground">
      <li v-for="(text, index) in sent" :key="index" class="truncate font-mono text-xs">{{ text }}</li>
    </ul>
    <TokenInput :controller="prompt" :on-submit="send">
      <div
        class="flex flex-col rounded-2xl border border-transparent bg-input/50 transition-[color,box-shadow] duration-200 has-[[data-slot=token-input-editor]:focus-visible]:border-ring has-[[data-slot=token-input-editor]:focus-visible]:ring-3 has-[[data-slot=token-input-editor]:focus-visible]:ring-ring/30 motion-reduce:transition-none"
      >
        <TokenInputEditor
          aria-label="Prompt"
          placeholder="Ask anything. @ adds a file, / runs a skill"
          class="relative h-24 overflow-y-auto px-3 pt-2.5 text-base leading-6 outline-none data-empty:before:pointer-events-none data-empty:before:absolute data-empty:before:text-muted-foreground data-empty:before:content-[attr(aria-placeholder)] md:text-sm"
        />
        <div class="flex items-center justify-between px-2 pb-2">
          <button
            type="button"
            class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
            @mousedown.prevent
            @click="attachReadme"
          >
            <Plus aria-hidden="true" class="size-4" />
            README
          </button>
          <button
            type="button"
            :aria-label="running ? 'Running' : 'Send'"
            :disabled="running"
            class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
            @click="send(prompt.getValue())"
          >
            <Clock aria-hidden="true" v-if="running" class="size-4" />
            <ChevronRight aria-hidden="true" v-else class="size-4" />
          </button>
        </div>
      </div>
      <TriggerMenu
        :triggers="[
          { char: '@', type: 'file', items: files },
          { char: '/', boundary: 'start', type: 'skill', items: skills },
        ]"
        :on-select="onSelect"
      >
        <TriggerMenuHint class="font-mono text-sm text-muted-foreground" />
        <TriggerMenuContent
          class="max-h-[min(18rem,var(--available-height))] w-56 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none"
        >
          <TriggerMenuEmpty class="py-2 text-center text-sm text-muted-foreground empty:hidden"
            >No matches</TriggerMenuEmpty
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
          class="inline-flex items-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 align-baseline font-medium text-foreground data-pending:animate-pulse data-pending:opacity-60 data-unresolved:border data-unresolved:border-dashed data-unresolved:border-ring data-selected:ring-3 data-selected:ring-ring/30 data-[token-type=skill]:bg-primary data-[token-type=skill]:text-primary-foreground dark:bg-input/60 dark:data-[token-type=skill]:bg-primary motion-reduce:animate-none"
        >
          <Code aria-hidden="true" v-if="token.type === 'skill'" class="size-3.5 shrink-0" />
          <File aria-hidden="true" v-else class="size-3.5 shrink-0" />
          {{ token.type === "skill" ? `/${token.label}` : token.label }}
          <Clock
            aria-hidden="true"
            v-if="token.data?.run === 'running'"
            class="size-3.5 animate-spin motion-reduce:animate-none"
          />
          <Check aria-hidden="true" v-if="token.data?.run === 'done'" class="size-3.5" />
          <TokenInputTokenRemove
            class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full opacity-50 hover:opacity-100"
          >
            <X aria-hidden="true" class="size-3" />
          </TokenInputTokenRemove>
        </TokenInputToken>
      </template>
    </TokenInput>
  </div>
</template>
