<script setup lang="ts">
import { Button } from "@ui-sdk/vue/button"
</script>

<template>
  <p class="text-sm text-muted-foreground">
    Didn't get the email?
    <Button
      class="inline h-auto rounded-md p-0 font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      Resend code
    </Button>
  </p>
</template>
