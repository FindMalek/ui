<script setup lang="ts">
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/vue"
import { ref } from "vue"

const action = ref("")
</script>

<template>
  <div class="fixture">
    <button>Before</button>
    <Collapsible
      v-slot="{ state }"
      class="collapsible"
      @open-change="(open: boolean) => (action = open ? 'open' : 'closed')"
    >
      <span :class="state.open ? 'is-open' : 'is-closed'" hidden></span>
      <CollapsibleTrigger class="collapsible-trigger">
        <template #render="{ props, state: trigger }">
          <div v-bind="props">
            Files<span aria-hidden="true"> {{ trigger.open ? "−" : "+" }}</span>
          </div>
        </template>
      </CollapsibleTrigger>
      <CollapsiblePanel class="collapsible-panel">
        <template #render="{ props }">
          <section v-bind="props">The files panel.</section>
        </template>
      </CollapsiblePanel>
    </Collapsible>
    <button>After</button>
    <output role="status" aria-label="Last action">{{ action }}</output>
  </div>
</template>
