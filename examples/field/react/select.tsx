import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { ChevronDown } from "lucide-react"

const departments = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Customer support" },
]

export function Example() {
  return (
    <Field className="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
      <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
        Department
      </FieldLabel>
      <div className="relative">
        <FieldControl
          render={<select />}
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm appearance-none data-disabled:opacity-50"
          name="department"
          defaultValue=""
        >
          <option value="" disabled>
            Choose department
          </option>
          {departments.map((department) => (
            <option key={department.value} value={department.value}>
              {department.label}
            </option>
          ))}
        </FieldControl>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute end-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
      </div>
      <FieldDescription className="m-0 text-sm text-muted-foreground">
        Select your department or area of work.
      </FieldDescription>
    </Field>
  )
}
