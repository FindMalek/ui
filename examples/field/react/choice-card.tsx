import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const environments = [
  { value: "kubernetes", title: "Kubernetes", description: "Run GPU workloads on a K8s configured cluster." },
  {
    value: "vm",
    title: "Virtual machine",
    description: "Access a VM configured cluster to run GPU workloads.",
  },
]

export function Example() {
  return (
    <Field className="flex w-full max-w-md flex-col gap-3">
      <FieldLabel className="text-sm leading-snug font-medium">Compute environment</FieldLabel>
      <FieldDescription className="text-sm text-muted-foreground">
        Select the compute environment for your cluster.
      </FieldDescription>
      <RadioGroup className="flex flex-col gap-3" name="environment" defaultValue="kubernetes">
        {environments.map((environment) => (
          <label
            key={environment.value}
            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-input/40 has-data-checked:bg-input/30"
          >
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-sm leading-snug font-medium">{environment.title}</span>
              <span className="text-sm text-muted-foreground">{environment.description}</span>
            </span>
            <Radio
              className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50"
              value={environment.value}
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
          </label>
        ))}
      </RadioGroup>
    </Field>
  )
}
