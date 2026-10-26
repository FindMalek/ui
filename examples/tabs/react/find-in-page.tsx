"use client"

import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"

const policies = [
  {
    value: "shipping",
    label: "Shipping",
    text: "Orders leave our warehouse within two working days. Express delivery arrives the next morning.",
  },
  {
    value: "returns",
    label: "Returns",
    text: "Send anything back within 30 days. Opened electronics carry a restocking fee of 10 percent.",
  },
  {
    value: "warranty",
    label: "Warranty",
    text: "Every product has a two year warranty. Batteries are covered for one year.",
  },
]

function Example() {
  return (
    <Tabs className="flex w-full max-w-md flex-col gap-2" defaultValue="shipping" hiddenUntilFound>
      <TabsList
        className="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        aria-label="Policies"
      >
        {policies.map((policy) => (
          <TabsTab
            key={policy.value}
            className="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
            value={policy.value}
          >
            {policy.label}
          </TabsTab>
        ))}
      </TabsList>
      {policies.map((policy) => (
        <TabsPanel
          key={policy.value}
          className="box-border min-h-28 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30 [&>p]:mt-1"
          value={policy.value}
        >
          <h3 className="m-0 text-base leading-6 font-medium text-foreground">{policy.label}</h3>
          <p className="m-0 text-sm leading-5 text-muted-foreground">{policy.text}</p>
        </TabsPanel>
      ))}
    </Tabs>
  )
}

export { Example }
