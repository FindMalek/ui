<script lang="ts">
  import { Check, ImageIcon, X } from "@lucide/svelte"
  import {
    FileInput,
    FileInputDropzone,
    FileInputItem,
    FileInputItemRemove,
    FileInputList,
    FileInputTrigger,
  } from "@ui-sdk/svelte/file-input"

</script>

<FileInput multiple accept="image/*" maxFiles={4} class="flex w-full max-w-md flex-col gap-3">
  <FileInputDropzone>
    {#snippet render({ props, state })}
      <section
        {...props}
        aria-label="Gallery upload"
        class={[
          "flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-10 text-center transition-colors",
          state.dragReject
            ? "border-destructive bg-destructive/10 text-destructive dark:bg-destructive/20"
            : state.dragAccept
              ? "border-ring bg-muted/50"
              : "border-border",
        ]}
      >
        {#if state.dragReject}
          <X class="size-5" />
        {:else if state.dragAccept}
          <Check class="size-5" />
        {:else}
          <ImageIcon class="size-5" />
        {/if}
        <p class="text-sm font-medium">
          {state.dragReject ? "Only up to 4 images" : state.dragAccept ? "Release to add" : "Drag up to 4 images here"}
        </p>
        {#if !state.dragging}
          <FileInputTrigger
            class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
          >
            Browse
          </FileInputTrigger>
        {/if}
      </section>
    {/snippet}
  </FileInputDropzone>
  <FileInputList aria-label="Images" class="flex flex-wrap gap-2">
    {#snippet render({ props, state, children })}
      <ul {...props}>{@render children?.(state)}</ul>
    {/snippet}
    <FileInputItem>
      {#snippet render({ props, state })}
        <li
          {...props}
          class={[
            "flex h-7 items-center gap-1.5 rounded-2xl ps-3 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
            state.index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
          ]}
        >
          {#if state.index === 0}
            <span class="font-medium">Cover:</span>
          {/if}
          <span class="max-w-32 truncate">{state.file.name}</span>
          <FileInputItemRemove>
            {#snippet render({ props: removeProps, state: remove })}
              <button
                {...removeProps}
                class={[
                  "inline-flex size-5 items-center justify-center rounded-xl outline-none",
                  remove.disabled ? "opacity-50" : "hover:bg-current/10",
                ]}
              >
                <X class="size-3" />
              </button>
            {/snippet}
          </FileInputItemRemove>
        </li>
      {/snippet}
    </FileInputItem>
  </FileInputList>
</FileInput>
