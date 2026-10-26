import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Input, InputGroup } from "@ui-sdk/react/input"

export function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 text-foreground">
      <Field name="website" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Website
        </FieldLabel>
        <InputGroup className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
          <span>https://</span>
          <Input
            placeholder="example"
            className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
          />
          <span>.com</span>
        </InputGroup>
      </Field>
    </div>
  )
}
