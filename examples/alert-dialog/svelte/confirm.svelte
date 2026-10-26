<script lang="ts">
  import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogClose,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    createConfirm,
  } from "@ui-sdk/svelte/alert-dialog"
  import type { DialogContentState } from "@ui-sdk/svelte/dialog"

  const confirm = createConfirm<{ name: string }>()
  let projects = $state(["Acme", "Globex", "Initech"])
  let reset: HTMLButtonElement

  async function remove(name: string, button: HTMLButtonElement) {
    if (!(await confirm({ name }))) return
    const row = button.closest("li")
    const next = (row?.nextElementSibling ?? row?.previousElementSibling)?.querySelector("button")
    const target = next ?? reset
    target?.focus()
    projects = projects.filter((project) => project !== name)
  }
</script>

<div class="grid w-full max-w-xs gap-3">
  <ul aria-label="Projects" class="m-0 min-h-36 list-none p-0">
    {#each projects as name (name)}
      <li class="flex h-12 items-center justify-between gap-3 border-b border-border text-sm text-foreground">
        {name}
        <button
          type="button"
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
          onclick={(event) => remove(name, event.currentTarget)}
        >
          Delete
        </button>
      </li>
    {:else}
      <li class="flex h-12 items-center text-sm text-muted-foreground">All projects deleted.</li>
    {/each}
  </ul>
  <button
    type="button"
    bind:this={reset}
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
    onclick={() => (projects = ["Acme", "Globex", "Initech"])}
  >
    Reset projects
  </button>
  <AlertDialog controller={confirm.controller}>
    <AlertDialogBackdrop
      class="fixed inset-0 isolate z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"
    />
    <AlertDialogContent
      class="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none sm:max-w-md"
    >
      {#snippet children(state: DialogContentState<{ name: string }>)}
        <div class="grid place-items-center gap-1.5 text-center sm:place-items-start sm:text-start">
          <AlertDialogTitle class="m-0 text-lg font-medium">Delete {state.payload?.name}?</AlertDialogTitle>
          <AlertDialogDescription
            class="m-0 text-sm leading-5 text-balance text-muted-foreground md:text-pretty"
          >
            The project and its files will be deleted for everyone.
          </AlertDialogDescription>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <AlertDialogClose
            class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
          >
            Cancel
          </AlertDialogClose>
          <AlertDialogClose
            value="confirm"
            class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
          >
            Delete
          </AlertDialogClose>
        </div>
      {/snippet}
    </AlertDialogContent>
  </AlertDialog>
</div>
