import "@ui-sdk/web/radio"
import "@ui-sdk/web/field"

const environments = [
  { value: "kubernetes", title: "Kubernetes", description: "Run GPU workloads on a K8s configured cluster." },
  {
    value: "vm",
    title: "Virtual machine",
    description: "Access a VM configured cluster to run GPU workloads.",
  },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-md flex-col gap-3">
      <ui-field-label class="text-sm leading-snug font-medium">Compute environment</ui-field-label>
      <ui-field-description class="text-sm text-muted-foreground">Select the compute environment for your cluster.</ui-field-description>
      <ui-radio-group class="flex flex-col gap-3" name="environment" default-value="kubernetes">
        ${environments
          .map(
            (environment) => `
              <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-input/40 has-data-checked:bg-input/30">
                <span class="flex flex-1 flex-col gap-1">
                  <span class="text-sm leading-snug font-medium">${environment.title}</span>
                  <span class="text-sm text-muted-foreground">${environment.description}</span>
                </span>
                <ui-radio class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50" value="${environment.value}">
                  <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                </ui-radio>
              </label>`,
          )
          .join("")}
      </ui-radio-group>
    </ui-field>
  `
}
