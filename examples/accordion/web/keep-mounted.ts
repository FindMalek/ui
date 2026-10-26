import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" default-value="reply">
      <ui-accordion-item class="border-0 border-border not-last:border-b data-open:bg-muted/50" value="reply">
        <ui-accordion-header>
          <h3 class="m-0 flex [font:inherit]">
            <ui-accordion-trigger>
              <button type="button" class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                Reply
                ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
              </button>
            </ui-accordion-trigger>
          </h3>
        </ui-accordion-header>
        <ui-accordion-panel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0" keep-mounted>
          <label class="flex flex-col gap-2 pb-4 font-medium">
            Your reply
            <textarea class="box-border min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 font-normal text-inherit outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm md:leading-5" placeholder="Write a reply…"></textarea>
          </label>
        </ui-accordion-panel>
      </ui-accordion-item>
      <ui-accordion-item class="border-0 border-border not-last:border-b data-open:bg-muted/50" value="formatting">
        <ui-accordion-header>
          <h3 class="m-0 flex [font:inherit]">
            <ui-accordion-trigger>
              <button type="button" class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                Formatting
                ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
              </button>
            </ui-accordion-trigger>
          </h3>
        </ui-accordion-header>
        <ui-accordion-panel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
          <p class="m-0 pb-4">Use **bold**, _italics_ and \`code\`. Links paste as previews.</p>
        </ui-accordion-panel>
      </ui-accordion-item>
    </ui-accordion>
  `
}

export { mount }
