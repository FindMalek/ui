import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { ChevronDown } from "lucide-react"

const items = [
  {
    value: "plans",
    label: "What subscription plans do you offer?",
    content: "Starter, Professional and Enterprise. Each one adds seats, storage and support.",
  },
  {
    value: "billing",
    label: "How does billing work?",
    content: "You're billed at the start of each period. Change plans any time and we'll prorate it.",
  },
  {
    value: "cancel",
    label: "How do I cancel my subscription?",
    content: "Open Billing and choose Cancel. You keep access until the period ends.",
  },
]

export function Example() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5 overflow-hidden rounded-[min(var(--radius-4xl),24px)] bg-card pt-5 text-sm text-card-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
      <div className="flex flex-col gap-1 px-4">
        <div className="text-base font-medium">Subscription and billing</div>
        <div className="text-sm text-muted-foreground">
          Common questions about your account, plans and payments.
        </div>
      </div>
      <Accordion className="w-full border-t border-border" defaultValue={["plans"]}>
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            className="border-border not-last:border-b data-open:bg-muted/50"
            value={item.value}
          >
            <AccordionHeader className="flex">
              <AccordionTrigger className="group flex w-full items-start justify-between gap-6 p-4 text-start text-sm font-medium outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                {item.label}
                <ChevronDown className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel className="h-(--accordion-panel-height) overflow-hidden px-4 text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
              <div className="pb-4">{item.content}</div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
