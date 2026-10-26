<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Checkbox, CheckboxIndicator } from "@ui-sdk/svelte/checkbox"
  import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/svelte/field"
</script>

<div dir="rtl" class="flex w-full max-w-sm flex-col gap-6">
  <Field class="flex flex-col gap-3">
    <FieldLabel class="text-sm leading-snug font-medium">الاسم على البطاقة</FieldLabel>
    <FieldControl
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
      name="card-name"
      autocomplete="cc-name"
      placeholder="ليلى حسن"
    />
  </Field>
  <Field class="flex flex-col gap-3">
    <FieldLabel class="text-sm leading-snug font-medium">رقم البطاقة</FieldLabel>
    <FieldControl
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
      name="card-number"
      inputmode="numeric"
      autocomplete="cc-number"
      placeholder="1234 5678 9012 3456"
    />
    <FieldDescription class="text-sm text-muted-foreground">أدخل الرقم المكون من 16 خانة.</FieldDescription>
  </Field>
  <Field class="flex flex-row items-center gap-3">
    <Checkbox
      class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
      name="save-card"
      defaultChecked
    >
      <CheckboxIndicator class="grid place-content-center">
        <Check class="size-3.5" />
      </CheckboxIndicator>
    </Checkbox>
    <FieldLabel class="text-sm leading-snug font-medium">احفظ البطاقة للمدفوعات القادمة</FieldLabel>
  </Field>
</div>
