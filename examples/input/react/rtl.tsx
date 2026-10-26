import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Input, InputClear, InputGroup } from "@ui-sdk/react/input"
import { Search, X } from "lucide-react"

export function Example() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-6">
      <Field name="name" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          الاسم الكامل
        </FieldLabel>
        <Input
          placeholder="ليلى حسن"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
        <FieldDescription className="text-sm text-muted-foreground">
          كما يظهر في ملفك الشخصي.
        </FieldDescription>
      </Field>
      <InputGroup className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
        <Search className="size-4 shrink-0" />
        <Input
          type="search"
          aria-label="بحث"
          defaultValue="حسن"
          className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <InputClear
          aria-label="مسح البحث"
          className="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50"
        >
          <X className="size-4" />
        </InputClear>
      </InputGroup>
    </div>
  )
}
