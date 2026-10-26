<script lang="ts">
  import {
    Autocomplete,
    AutocompleteContent,
    AutocompleteInput,
    AutocompleteLabel,
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxLabel,
    Select,
    SelectContent,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    TriggerMenu,
    TriggerMenuContent,
    TriggerMenuInput,
    TriggerMenuList,
  } from "@ui-sdk/svelte"
  import { wrappedContentFixture as f } from "tests/fixtures/wrapped-content.ts"

  // Data roots whose content sits inside a snippet, Svelte's fragment, or a
  // wrapping element. Each renders that content, and no second list of its own.
  const triggers = [{ char: "@", items: f.items }]
</script>

{#snippet selectContent()}
  <SelectContent class="popup" />
{/snippet}

{#snippet triggerMenuContent()}
  <TriggerMenuContent class="popup"><TriggerMenuList /></TriggerMenuContent>
{/snippet}

<div class="fixture">
  <button>Before</button>
  <Select items={f.items}>
    <SelectLabel>{f.select}</SelectLabel>
    <SelectTrigger><SelectValue /></SelectTrigger>
    {@render selectContent()}
  </Select>
  <Combobox items={f.items}>
    <ComboboxLabel>{f.combobox}</ComboboxLabel>
    <ComboboxInput />
    <div><ComboboxContent class="popup" /></div>
  </Combobox>
  <Autocomplete items={f.items}>
    <AutocompleteLabel>{f.autocomplete}</AutocompleteLabel>
    <AutocompleteInput />
    <div><AutocompleteContent class="popup" /></div>
  </Autocomplete>
  <TriggerMenu {triggers}>
    <TriggerMenuInput aria-label={f.triggerMenu} />
    {@render triggerMenuContent()}
  </TriggerMenu>
</div>
