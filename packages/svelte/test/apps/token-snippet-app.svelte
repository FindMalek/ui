<script lang="ts">
  import type { Token, TokenInputValue } from "@ui-sdk/core/token-input"
  import { TokenInput, TokenInputEditor } from "../../src"

  let { loud }: { loud: boolean } = $props()

  const value: TokenInputValue = [{ type: "person", value: "ada", label: "Ada" }]
</script>

{#snippet quiet(token: Token)}<span data-content>{token.label}</span>{/snippet}
{#snippet shouted(token: Token)}<span data-content>{token.label.toUpperCase()}</span>{/snippet}

<TokenInput defaultValue={value} token={loud ? shouted : quiet}>
  <TokenInputEditor aria-label="Prompt" />
</TokenInput>
