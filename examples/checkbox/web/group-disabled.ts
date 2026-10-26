import "@ui-sdk/web/checkbox"
import { Check, createElement, Minus } from "lucide"

const backups = [
  { value: "photos", label: "Photos" },
  { value: "documents", label: "Documents" },
  { value: "messages", label: "Messages" },
]

const folders = [
  { value: "desktop", label: "Desktop", disabled: true },
  { value: "projects", label: "Projects", disabled: false },
  { value: "downloads", label: "Downloads", disabled: false },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs flex-col gap-8">
      <div class="flex flex-col gap-3">
        <h3 id="disabled-backups" class="m-0 text-sm font-medium text-foreground">Backups</h3>
        <p class="m-0 -mt-2 text-sm text-muted-foreground">Managed by your organization.</p>
        <ui-checkbox-group class="flex flex-col gap-3" aria-labelledby="disabled-backups" default-value="photos,documents" disabled>
          ${backups
            .map(
              (item) => `
                <label class="flex w-fit items-center gap-3 text-sm text-muted-foreground">
                  <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" value="${item.value}">
                    <ui-checkbox-indicator class="grid place-content-center">
                      ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
                    </ui-checkbox-indicator>
                  </ui-checkbox>
                  ${item.label}
                </label>
              `,
            )
            .join("")}
        </ui-checkbox-group>
      </div>
      <div class="flex flex-col gap-3">
        <h3 id="disabled-folders" class="m-0 text-sm font-medium text-foreground">Sync folders</h3>
        <ui-checkbox-group
          class="flex flex-col gap-3"
          aria-labelledby="disabled-folders"
          default-value="desktop"
          all-values="${folders.map((item) => item.value).join(",")}"
        >
          <label class="flex w-fit items-center gap-3 text-sm text-muted-foreground">
            <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" parent>
              <ui-checkbox-indicator class="group grid place-content-center">
                ${createElement(Check, { class: "size-3.5 group-data-indeterminate:hidden", "aria-hidden": "true" }).outerHTML}
                ${createElement(Minus, { class: "hidden size-3.5 group-data-indeterminate:block", "aria-hidden": "true" }).outerHTML}
              </ui-checkbox-indicator>
            </ui-checkbox>
            Select all
          </label>
          <div class="flex flex-col gap-3 ps-7">
            ${folders
              .map(
                (item) => `
                  <label class="flex w-fit items-center gap-3 text-sm text-muted-foreground">
                    <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" value="${item.value}"${item.disabled ? " disabled" : ""}>
                      <ui-checkbox-indicator class="grid place-content-center">
                        ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
                      </ui-checkbox-indicator>
                    </ui-checkbox>
                    ${item.label}
                  </label>
                `,
              )
              .join("")}
          </div>
        </ui-checkbox-group>
      </div>
    </div>
  `
}

export { mount }
