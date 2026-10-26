<script setup lang="ts">
import {
  Pagination,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from "@ui-sdk/vue/pagination"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "@lucide/vue"
</script>

<template>
  <Pagination aria-label="Pagination" :page-count="10">
    <PaginationList v-slot="{ state }" class="flex flex-wrap items-center justify-center gap-1">
      <PaginationItem>
        <PaginationFirst
          aria-label="First page"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50"
        >
          <ChevronsLeft class="size-4 rtl:rotate-180" />
        </PaginationFirst>
      </PaginationItem>
      <PaginationItem>
        <PaginationPrevious
          aria-label="Previous page"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50"
        >
          <ChevronLeft class="size-4 rtl:rotate-180" />
        </PaginationPrevious>
      </PaginationItem>
      <PaginationItem class="px-2 text-sm text-muted-foreground tabular-nums">
        <span aria-live="polite">Page {{ state.page }} of {{ state.pageCount }}</span>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext
          aria-label="Next page"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50"
        >
          <ChevronRight class="size-4 rtl:rotate-180" />
        </PaginationNext>
      </PaginationItem>
      <PaginationItem>
        <PaginationLast
          aria-label="Last page"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50"
        >
          <ChevronsRight class="size-4 rtl:rotate-180" />
        </PaginationLast>
      </PaginationItem>
    </PaginationList>
  </Pagination>
</template>
