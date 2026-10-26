import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"
import { Input, InputClear, InputGroup } from "@ui-sdk/solid/input"

export function Example() {
  return (
    <div dir="rtl" class="flex w-full max-w-sm flex-col gap-6">
      <Field name="name" class="flex flex-col gap-2">
        <FieldLabel class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          الاسم الكامل
        </FieldLabel>
        <Input
          placeholder="ليلى حسن"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
        <FieldDescription class="text-sm text-muted-foreground">كما يظهر في ملفك الشخصي.</FieldDescription>
      </Field>
      <InputGroup class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="size-4 shrink-0"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <Input
          type="search"
          aria-label="بحث"
          defaultValue="حسن"
          class="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <InputClear
          aria-label="مسح البحث"
          class="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="size-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </InputClear>
      </InputGroup>
    </div>
  )
}
