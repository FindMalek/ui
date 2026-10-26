<script setup lang="ts">
import {
  createPopoverController,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/vue/popover"
import { ref } from "vue"

type Member = { name: string; role: string }

const popover = createPopoverController<Member>()
const MemberPopoverContent = PopoverContent<Member>
const members = ref<Member[]>([
  { name: "Ada Lovelace", role: "Owner" },
  { name: "Grace Hopper", role: "Editor" },
  { name: "Alan Turing", role: "Viewer" },
])
const status = ref("")

function save(event: SubmitEvent, member: Member | undefined) {
  if ((event.submitter as HTMLButtonElement).value !== "save" || !member) return
  const next = String(new FormData(event.currentTarget as HTMLFormElement).get("role"))
  members.value = members.value.map((entry) =>
    entry.name === member.name ? { ...entry, role: next } : entry,
  )
}

function showEditing(payload: unknown) {
  const member = payload as Member | undefined
  if (member) status.value = `Editing ${member.name}`
}

async function editNewest(event: MouseEvent) {
  const result = await popover.open({
    payload: members.value[members.value.length - 1],
    anchor: event.currentTarget as HTMLElement,
  })
  status.value = `Closed with ${result.reason}, returned ${result.returnValue ?? "nothing"}`
}
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-center gap-3">
    <ul class="w-full divide-y divide-border rounded-2xl border border-border">
      <li v-for="member in members" :key="member.name" class="flex items-center gap-3 px-3 py-2 text-sm">
        {{ member.name }}
        <span class="ms-auto text-muted-foreground">{{ member.role }}</span>
        <PopoverTrigger
          :controller="popover"
          :payload="member"
          :disabled="member.role === 'Owner'"
          :aria-label="`Edit ${member.name}`"
          class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >
          Edit
        </PopoverTrigger>
      </li>
    </ul>
    <Popover :controller="popover" @payload-change="showEditing">
      <MemberPopoverContent
        v-slot="{ state }"
        align="end"
        class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
      >
        <div class="flex flex-col gap-1">
          <PopoverTitle class="text-base font-medium">Edit {{ state.payload?.name }}</PopoverTitle>
          <PopoverDescription class="text-sm text-muted-foreground"
            >Roles decide what they can change.</PopoverDescription
          >
        </div>
        <form
          method="dialog"
          class="flex flex-col gap-4"
          @submit="save($event as SubmitEvent, state.payload)"
        >
          <label class="grid gap-2 text-sm leading-none font-medium">
            Role
            <input
              :key="state.payload?.name"
              name="role"
              :value="state.payload?.role"
              class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
            />
          </label>
          <div class="flex gap-2">
            <button
              value="save"
              class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >
              Save
            </button>
            <button
              value="cancel"
              class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </MemberPopoverContent>
    </Popover>
    <button
      type="button"
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      @click="editNewest"
    >
      Edit the newest member
    </button>
    <output class="text-sm text-muted-foreground block min-h-5">{{ status || "Not edited yet" }}</output>
  </div>
</template>
