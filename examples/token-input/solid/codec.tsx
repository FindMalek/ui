import {
  fromText,
  toLabel,
  toText,
  TokenInput,
  TokenInputEditor,
  type Token,
  type TokenCodec,
  type TokenInputValue,
} from "@ui-sdk/solid/token-input"
import { createSignal } from "solid-js"

const slack: TokenCodec = {
  format: (token: Token) => `<@${token.value}>`,
  parse: (text: string) =>
    text.split(/(<@[\w.-]+>)/).map((part) => {
      const id = /^<@([\w.-]+)>$/.exec(part)?.[1]
      return id ? { type: "mention", value: id, label: `@${id}` } : part
    }),
}

export function Example() {
  const [value, setValue] = createSignal<TokenInputValue>(fromText("Ping <@ada> and <@grace>", slack))
  return (
    <div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
      <TokenInput codec={slack} copy="label" value={value()} onValueChange={(next) => setValue(next)}>
        <TokenInputEditor
          aria-label="Message"
          class="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm [&_[data-token-type]]:rounded-2xl [&_[data-token-type]]:bg-input [&_[data-token-type]]:px-1.5 [&_[data-token-type]]:font-medium dark:[&_[data-token-type]]:bg-input/60 motion-reduce:transition-none"
        />
      </TokenInput>
      <dl class="grid h-28 grid-cols-[auto_1fr] content-start gap-x-3 gap-y-1 overflow-y-auto text-sm">
        <dt class="text-muted-foreground">Codec</dt>
        <dd class="font-mono break-all">{toText(value(), slack)}</dd>
        <dt class="text-muted-foreground">Default</dt>
        <dd class="font-mono break-all">{toText(value())}</dd>
        <dt class="text-muted-foreground">Label</dt>
        <dd>{toLabel(value())}</dd>
      </dl>
    </div>
  )
}
