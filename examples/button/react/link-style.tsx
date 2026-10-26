import { Button } from "@ui-sdk/react/button"

export function Example() {
  return (
    <p className="text-sm text-muted-foreground">
      Didn't get the email?{" "}
      <Button className="inline h-auto rounded-md p-0 font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
        Resend code
      </Button>
    </p>
  )
}
