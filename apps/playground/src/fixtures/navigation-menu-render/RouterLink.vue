<script setup lang="ts">
// A client-side router's link: it navigates without a page load.
const props = defineProps<{ to: string }>()

function navigate(event: MouseEvent) {
  event.preventDefault()
  history.pushState(null, "", props.to)
}
</script>

<template>
  <a :href="props.to" @click="navigate"><slot /></a>
</template>
