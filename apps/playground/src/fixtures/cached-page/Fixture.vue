<script setup lang="ts">
import { defineComponent, h, KeepAlive, ref } from "vue"
import ProfilePage from "./ProfilePage.vue"

// Two pages under a <KeepAlive>. The profile page's popup leaves for the
// other page while open, the way a link in it would.
const page = ref<"profile" | "other">("profile")

const OtherPage = defineComponent({
  emits: ["back"],
  setup(_, { emit }) {
    return () => h("button", { onClick: () => emit("back") }, "Back to profile")
  },
})
</script>

<template>
  <div class="fixture">
    <button>Before</button>
    <KeepAlive>
      <ProfilePage v-if="page === 'profile'" @leave="page = 'other'" />
      <OtherPage v-else @back="page = 'profile'" />
    </KeepAlive>
  </div>
</template>
