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
} from "@ui-sdk/solid/carousel"
import { render } from "@solidjs/web"
import { createSignal, For, Show } from "solid-js"
import { carouselFixture, carouselOptions } from "tests/fixtures/carousel.ts"

const controller = createCarouselController()

function Fixture() {
  const [action, setAction] = createSignal("")
  const [reason, setReason] = createSignal("")
  const [rested, setRested] = createSignal("")
  const { perView, cancel, playToggle, options } = carouselOptions()
  return (
    <div class="fixture">
      <button>Before</button>
      <Carousel
        class="carousel"
        aria-label={carouselFixture.label}
        style={{ "--per-view": String(perView) }}
        controller={controller}
        {...options}
        onPageChange={(page, details) => {
          if (page === cancel) return details.cancel()
          setAction(String(page))
          setReason(details.reason)
        }}
        onPageChangeComplete={(page) => setRested(String(page))}
      >
        <Show when={playToggle}>
          <CarouselPlayToggle class="carousel-toggle">
            {(state) => (state.playing ? carouselFixture.stop : carouselFixture.start)}
          </CarouselPlayToggle>
        </Show>
        <CarouselViewport class="carousel-viewport">
          <CarouselContent class="carousel-content">
            <For each={carouselFixture.slides}>
              {(slide, index) => (
                <CarouselItem class="carousel-slide">
                  <p>{slide.title}</p>
                  <a href={`?product=${index() + 1}`}>{slide.link}</a>
                  <Show when={index() === 2}>
                    <label>
                      {" "}
                      {carouselFixture.field} <input />
                    </label>
                  </Show>
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
        </CarouselViewport>
        <div class="carousel-controls">
          <CarouselPrevious class="carousel-step">{carouselFixture.previous}</CarouselPrevious>
          <CarouselNext class="carousel-step">{carouselFixture.next}</CarouselNext>
        </div>
        <CarouselIndicatorGroup class="carousel-controls" aria-label={carouselFixture.indicators}>
          <For each={carouselFixture.slides}>
            {(_, index) => (
              <CarouselIndicator
                class="carousel-indicator"
                aria-label={carouselFixture.indicator(index() + 1)}
              >
                {index() + 1}
              </CarouselIndicator>
            )}
          </For>
        </CarouselIndicatorGroup>
      </Carousel>
      <button>After</button>
      <output role="status" aria-label="Last action">
        {action()}
      </output>
      <output aria-label="Last reason">{reason()}</output>
      <output aria-label="Rested on">{rested()}</output>
      <button onClick={() => controller.setPage(4)}>Show page 4</button>
      <CarouselNext controller={controller}>Next from outside</CarouselNext>
    </div>
  )
}

function mount(root: HTMLElement) {
  render(() => <Fixture />, root)
}

export { Fixture, mount }
