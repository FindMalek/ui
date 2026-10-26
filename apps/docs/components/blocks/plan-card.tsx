"use client"

import { cn } from "cn"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"
import { Toggle, ToggleGroup } from "@ui-sdk/react/toggle"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import * as React from "react"
import { BlockButton, BlockCard, BlockFooter, focus } from "./primitives"

const PLANS = [
  { value: "starter", name: "Starter", description: "A space to get going.", price: 0 },
  { value: "pro", name: "Pro", description: "For your next big thing.", price: 19 },
  { value: "team", name: "Team", description: "Room for everyone.", price: 39 },
]

function PlanCard() {
  const [billing, setBilling] = React.useState("yearly")
  const [plan, setPlan] = React.useState("pro")
  const [selected, setSelected] = React.useState("")
  return (
    <BlockCard
      title="Make room to grow"
      description="A plan for wherever you are right now."
      icon={<Sparkles />}
    >
      <div className="flex flex-1 flex-col gap-5 px-6 pb-6">
        <ToggleGroup
          value={[billing]}
          onValueChange={(value) => {
            if (value.length) setBilling(value[value.length - 1])
            setSelected("")
          }}
          aria-label="Billing period"
          className="flex w-fit items-center gap-1 rounded-xl bg-muted p-1"
        >
          <Toggle
            value="monthly"
            className={cn(
              "min-h-11 rounded-lg px-3 text-xs font-medium text-muted-foreground data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-xs md:min-h-8",
              focus,
            )}
          >
            Monthly
          </Toggle>
          <Toggle
            value="yearly"
            className={cn(
              "flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-medium text-muted-foreground data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-xs md:min-h-8",
              focus,
            )}
          >
            Yearly{" "}
            <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
              −20%
            </span>
          </Toggle>
        </ToggleGroup>
        <RadioGroup
          value={plan}
          onValueChange={(value) => {
            if (value !== null) setPlan(value)
            setSelected("")
          }}
          aria-label="Plan"
          className="flex flex-col gap-2.5"
        >
          {PLANS.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3.5 has-data-checked:border-violet-400 has-data-checked:bg-violet-50/60 dark:has-data-checked:border-violet-800 dark:has-data-checked:bg-violet-950/30"
            >
              <Radio
                value={option.value}
                className={cn(
                  "flex size-4 shrink-0 items-center justify-center rounded-full border border-input data-checked:border-violet-600 data-checked:bg-violet-600",
                  focus,
                )}
              >
                <RadioIndicator className="size-1.5 rounded-full bg-white" />
              </Radio>
              <div className="flex-1">
                <span className="text-xs font-semibold">{option.name}</span>
                <p className="mt-1 text-xs text-muted-foreground">{option.description}</p>
              </div>
              <span className="text-lg font-semibold tracking-tight tabular-nums">
                ${billing === "yearly" ? option.price : Math.round(option.price / 0.8)}
                <span className="text-xs font-normal text-muted-foreground">/mo</span>
              </span>
            </label>
          ))}
        </RadioGroup>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Check className="size-3.5" />
          {billing === "yearly" ? "Billed yearly. Cancel anytime." : "Billed monthly. Cancel anytime."}
        </p>
      </div>
      <BlockFooter status={selected}>
        <BlockButton
          onClick={() => setSelected(`${PLANS.find((option) => option.value === plan)?.name} plan selected.`)}
        >
          Choose plan <ArrowRight />
        </BlockButton>
      </BlockFooter>
    </BlockCard>
  )
}

export { PlanCard }
