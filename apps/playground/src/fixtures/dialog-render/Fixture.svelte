<script lang="ts">
  import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
  } from "@ui-sdk/svelte/dialog"
</script>

<div class="fixture">
  <button>Before</button>
  <Dialog>
    <DialogTrigger>
      {#snippet render({ props, state })}
        <button {...props} class={state.open ? "is-open" : "is-closed"}>
          Shipping <span aria-hidden="true">{state.open ? "▲" : "▼"}</span>
        </button>
      {/snippet}
    </DialogTrigger>
    <DialogBackdrop class="dialog-backdrop">
      {#snippet render({ props })}
        <section {...props}></section>
      {/snippet}
    </DialogBackdrop>
    <DialogContent class="dialog">
      {#snippet children(state)}
        <span class={state.open ? "is-open" : "is-closed"} hidden></span>
        <DialogTitle>
          {#snippet render({ props })}
            <h3 {...props}>Shipping</h3>
          {/snippet}
        </DialogTitle>
        <DialogDescription>
          {#snippet render({ props })}
            <div {...props}>Arrives in two days.</div>
          {/snippet}
        </DialogDescription>
        <DialogClose href="#done">
          {#snippet render({ props })}
            <a {...props}>Done</a>
          {/snippet}
        </DialogClose>
      {/snippet}
    </DialogContent>
  </Dialog>
  <button>After</button>
</div>
