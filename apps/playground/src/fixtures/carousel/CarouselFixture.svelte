<script lang="ts">
  import {
    Carousel,
    CarouselContent,
    CarouselIndicator,
    CarouselIndicatorGroup,
    CarouselItem,
    CarouselNext,
    CarouselPlayToggle,
    CarouselPrevious,
    CarouselViewport,
    createCarouselController,
  } from "@ui-sdk/svelte"
  import { carouselFixture, carouselOptions } from "tests/fixtures/carousel.ts"

  const controller = createCarouselController()
  const { perView, cancel, playToggle, options } = carouselOptions()

  let action = $state("")
  let reason = $state("")
  let rested = $state("")

  function onPageChange(page: number, details: { reason: string; cancel: () => void }) {
    if (page === cancel) return details.cancel()
    action = String(page)
    reason = details.reason
  }
</script>

<div class="fixture">
  <button>Before</button>
  <Carousel
    class="carousel"
    aria-label={carouselFixture.label}
    style="--per-view: {perView}"
    {...options}
    {controller}
    {onPageChange}
    onPageChangeComplete={(page) => (rested = String(page))}
  >
    {#if playToggle}
      <CarouselPlayToggle class="carousel-toggle">
        {#snippet children(state)}
          {state.playing ? carouselFixture.stop : carouselFixture.start}
        {/snippet}
      </CarouselPlayToggle>
    {/if}
    <CarouselViewport class="carousel-viewport">
      <CarouselContent class="carousel-content">
        {#each carouselFixture.slides as slide, index (slide.title)}
          <CarouselItem class="carousel-slide">
            <p>{slide.title}</p>
            <a href={`?product=${index + 1}`}>{slide.link}</a>
            {#if index === 2}
              <label> {carouselFixture.field} <input /></label>
            {/if}
          </CarouselItem>
        {/each}
      </CarouselContent>
    </CarouselViewport>
    <div class="carousel-controls">
      <CarouselPrevious class="carousel-step">{carouselFixture.previous}</CarouselPrevious>
      <CarouselNext class="carousel-step">{carouselFixture.next}</CarouselNext>
    </div>
    <CarouselIndicatorGroup class="carousel-controls" aria-label={carouselFixture.indicators}>
      {#each carouselFixture.slides as slide, index (slide.title)}
        <CarouselIndicator class="carousel-indicator" aria-label={carouselFixture.indicator(index + 1)}>
          {index + 1}
        </CarouselIndicator>
      {/each}
    </CarouselIndicatorGroup>
  </Carousel>
  <button>After</button>
  <output role="status" aria-label="Last action">{action}</output>
  <output aria-label="Last reason">{reason}</output>
  <output aria-label="Rested on">{rested}</output>
  <button onclick={() => controller.setPage(4)}>Show page 4</button>
  <CarouselNext {controller}>Next from outside</CarouselNext>
</div>
