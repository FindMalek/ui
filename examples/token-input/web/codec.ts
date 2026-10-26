import {
  fromText,
  toLabel,
  toText,
  type Token,
  type TokenCodec,
  type TokenInputValue,
} from "@ui-sdk/core/token-input"
import "@ui-sdk/web/token-input"

const slack: TokenCodec = {
  format: (token: Token) => `<@${token.value}>`,
  parse: (text: string) =>
    text.split(/(<@[\w.-]+>)/).map((part) => {
      const id = /^<@([\w.-]+)>$/.exec(part)?.[1]
      return id ? { type: "mention", value: id, label: `@${id}` } : part
    }),
}

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
      <dl class="grid h-28 grid-cols-[auto_1fr] content-start gap-x-3 gap-y-1 overflow-y-auto text-sm">
        <dt class="text-muted-foreground">Codec</dt><dd data-show="codec" class="font-mono break-all"></dd>
        <dt class="text-muted-foreground">Default</dt><dd data-show="default" class="font-mono break-all"></dd>
        <dt class="text-muted-foreground">Label</dt><dd data-show="label"></dd>
      </dl>
    </div>
  `
  const input = document.createElement("ui-token-input")
  input.setAttribute("copy", "label")
  input.codec = slack
  input.defaultValue = fromText("Ping <@ada> and <@grace>", slack)
  input.innerHTML = `<ui-token-input-editor aria-label="Message" class="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm [&_[data-token-type]]:rounded-2xl [&_[data-token-type]]:bg-input [&_[data-token-type]]:px-1.5 [&_[data-token-type]]:font-medium dark:[&_[data-token-type]]:bg-input/60 motion-reduce:transition-none"></ui-token-input-editor>`
  root.firstElementChild!.prepend(input)
  const show = (value: TokenInputValue) => {
    root.querySelector('[data-show="codec"]')!.textContent = toText(value, slack)
    root.querySelector('[data-show="default"]')!.textContent = toText(value)
    root.querySelector('[data-show="label"]')!.textContent = toLabel(value)
  }
  show(input.value)
  input.addEventListener("valuechange", (event) => show(event.detail.value))
}
