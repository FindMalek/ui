<script lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from "@ui-sdk/svelte/avatar"

  const person = {
    name: "Ada Lovelace",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAACqklEQVR42u2Yu2tUQRSH7z+itShYCBYRMRaSFIKPIj4qMQppVhexEVIYVHwEExGCWUHYCCEhUVZB4osEERITsDFLwJBoYZcqRCzsxA8GhiXujffOmdwzCwO/YnfnnDO/b+7c2ZlJPqz+aWklESACRIAIEAEiQATYpPH3S9dvDPacv3DuVBfiA1/5sQUAHjyePH64rX33jqaiiYBAARjg00c706w3ijCPTyPx5b5z/54s7o0I9sWQFO/eL4MU4M2XDQf3loF0ZYBy6YqbeyPSNQGqLz5J3BtRRA1AOPxeHkIimf3WRNehvbMjt3KJFJsueRPcAYZH31oHGPo5P5ZLpNh0SikAsDsw3ZdOtud1b0SiqUApBQA2Oab72v2rbgAkmgqU0gRwc2+kD+A8fxpnkSbAQPmsBIB0NQB2+fRdudYtASCdIpRSW4W8AOisQuwlfQFItqWirQQnLPk7QBG1vRCPXr4KSeaPFMAcBiQA8iOB9DxwZ/DJu0e9bu5JJF3/SDl077YbAIlBnImZA98+1vK6J0V+nvR2KzG3/Gt94Xl29wSTEta9UH3pe3YAgkO8mcvI4NG9/6vFha/ra59fp1mniYDQL3eXF+tpADS1wO10BIgAESACaAE8m9+4Wa2/nJhKA6CJAMLCAng6s3axb2bfscrOA/3obl8lDYAmE0MwKSQqAzCcB8+MGE9Wl8pD06PVpqJpUzDpFFEAGH71ww65XJSiYEEAU4u/T5Rqvqw3irIU314AZq3HgW/6KPK+GEku97uOPNw+90Z0kYshCcq9A0OScYEvzL1lyPh3kQng37WyANGpH4DL/bPFuzeiaylA8ZMn70T6DwB/+FrujTAgAlAcfvsQ3AEGJlZ03RthwxFAff5kmUVbAXR0j4cAgA1HgBDcG21h8i9D6D5a5WfrvgAAAABJRU5ErkJggg==",
  }

  let presses = $state(0)
</script>

<div class="flex items-center gap-3">
  <Avatar
    class="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten cursor-default border-0 bg-transparent p-0 outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
    onclick={() => presses++}
  >
    {#snippet render({ props })}
      <button {...props} type="button">
        <AvatarImage src={person.src} alt={person.name} class="aspect-square size-full rounded-full object-cover" />
        <AvatarFallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"><span aria-hidden="true">AL</span><span class="sr-only">Ada Lovelace</span></AvatarFallback>
      </button>
    {/snippet}
  </Avatar>
  <output class="min-h-5 text-sm text-muted-foreground tabular-nums">Presses: {presses}</output>
</div>
