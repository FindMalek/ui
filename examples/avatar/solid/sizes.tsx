import { Avatar, AvatarFallback, AvatarImage } from "@ui-sdk/solid/avatar"

const person = {
  name: "Hedy Lamarr",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAACqklEQVR42u2Yz0tVQRTH73/QX1CrNi3a1SaC2ortIgKpoEVIG6mdvUWrtMVbpJAYIdEPK1Mw68GrCBGeBvm0RfbSTUJBorQRC2oXfWBieNi7du+c8Z55MPBd6Jtzznw/c+fOnZlkdfl3WyuJABEgAkSACBABIsA21V++H+/vv9XdNXi2E/EH//JjGwC8uD3a13Gw9/CelqKJgEABGODyyaNp1ptFmMenkfhyf/XYvizujQj2xZAU794vgxRgZXHTwb1lIF0Z4M7li27ujUjXBJibrEncG1FEDUA4/F4eQiKZ/dbE9Y79jYmBXCLFpkveBHeA6dGKdYChH0uvc4kUm04pBQB2B6b74TNH8ro3ItFUoJQCAJsc0/2b4ZIbAImmAqU0AdzcG+kDOM+f5lmkCTBZ6pIAkK4GwC6fvqvXLkgASKcIpdRWIS8AOqsQe0lfAJJtqWgrwQlL/g5QRG0vxKOXr0KS+SMFMIcBCYD8SCA9DzwbGHp3r8/NPYmk6x8pqzccAUgM4kzMHFifn87rnhT5edLbrcTn5Z/fl2ayuyeYlLDuhdYaa9kBCA7xZi4jg0f3/q8Wv3zc2vzwNs06TQSEfrm70fiUBkBTG9xOR4AIEAEigBbAwszW48GVuUe1NACaCCAsLIBa5Vu5Z/bcofsn9g6hu71jaQA0mRiCSSFRGYDh7D7+xHiyKp9/MP/weUvRtC2YdIooALwa+2qHXC5KUbAggEb915XTVV/Wm0VZiu8uALPW48C3fBR5X4wkl/tTB0Z2z70RXeRiSIJy78CQZFzgC3NvGTJ+LjIB/LtWFiA69QNws1Qv3r0RXUsBip88eSfSfwD44Gu5//td75kVASgOv30I7gBTI6u67o2w4QigPn+yzKKdAC51Pg0BABuOACG4N9rB5B8Fwv5FfO7deQAAAABJRU5ErkJggg==",
}

export function Example() {
  return (
    <div class="flex items-center gap-4">
      <Avatar class="relative flex size-6 shrink-0 rounded-full select-none">
        <AvatarImage src={person.src} alt={person.name} class="size-full rounded-full object-cover" />
        <AvatarFallback class="flex size-full items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">
          HL
        </AvatarFallback>
      </Avatar>
      <Avatar class="relative flex size-8 shrink-0 rounded-full select-none">
        <AvatarImage src={person.src} alt={person.name} class="size-full rounded-full object-cover" />
        <AvatarFallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">
          HL
        </AvatarFallback>
      </Avatar>
      <Avatar class="relative flex size-10 shrink-0 rounded-full select-none">
        <AvatarImage src={person.src} alt={person.name} class="size-full rounded-full object-cover" />
        <AvatarFallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">
          HL
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
