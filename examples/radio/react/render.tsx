"use client"

import * as React from "react"
import { Radio, RadioGroup } from "@ui-sdk/react/radio"
import { Bell, Check, Mail, Moon } from "lucide-react"

const options = [
  { value: "all", label: "Everything", description: "Every message and update.", icon: Bell },
  { value: "mentions", label: "Mentions", description: "Only when someone mentions you.", icon: Mail },
  { value: "none", label: "Nothing", description: "Turn notifications off.", icon: Moon },
]

function Example() {
  const id = React.useId()
  return (
    <RadioGroup className="grid w-full max-w-sm gap-2" aria-label="Notify me about" defaultValue="mentions">
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          aria-labelledby={`${id}-notify-${option.value}-label`}
          aria-describedby={`${id}-notify-${option.value}-description`}
          className={(state) =>
            state.checked
              ? "flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 bg-input/30 motion-reduce:transition-none"
              : "flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-input/40 motion-reduce:transition-none"
          }
          render={(props, state) => (
            <button {...props}>
              <option.icon className="size-4 shrink-0 text-muted-foreground" />
              <span className="flex flex-1 flex-col">
                <span className="font-medium" id={`${id}-notify-${option.value}-label`}>
                  {props.children}
                </span>
                <span className="text-muted-foreground" id={`${id}-notify-${option.value}-description`}>
                  {option.description}
                </span>
              </span>
              {state.checked && <Check className="size-4 shrink-0" />}
            </button>
          )}
        >
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  )
}

export { Example }
