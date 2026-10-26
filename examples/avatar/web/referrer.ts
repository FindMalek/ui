import "@ui-sdk/web/avatar"

const person = {
  name: "Margaret Hamilton",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAACrUlEQVR42u2Yz0uUQRjH32sRQXhI+nGIloQOYgWSVFCbsiJKB41UEjyURVEt0SHEoIwIZKlDRpIHhQyiW0s3D0EUQUHQqc5BtyD6B6IPDAyL7WvvO8/4PrMw8D3s7jzPM9/PvPPOzkzy5+vLllYSASJABIgAESACRIA1+vKqdq86PjpwpP/YAcQHvvJjCwA8m7u6v7R7y+ZNTUUTAYECMMA9XR1p1htFmMenkfhyv3N7Wxb3RgT7YkiKd++XQQrw6+Oyg3vLQLoywIUzfW7ujUjXBHi7Mitxb0QRNQDh8Ht5CIlk9lsT7du2DnfvyyVSbLrkTXAHqD+5aR1g6HJvVy6RYtMppQDA7sB0X2pvy+veiERTgVIKAGxyTPeVzj1uACSaCpTSBHBzb6QP4Dx/GmeRJkD33h0SANLVANjl0/fRjl0SANIpQim1VcgLgM4qxF7SF4BkWyraSnDCkr8DFFHbC/Ho5auQZP5IAcxhQAIgPxJIzwPzt84NHSy5uSeRdP0j5bWxPjcAEoM4EzMH7pztzeueFPl50tutxM/3izeGDmd3TzApYd0LfVieyQ5AcIg3cxkZPLr3f7X4ffXR/clKmnWaCAj9cvf1gytpADS1wO10BIgAESACaAH8eLdUX5qbvTiaBkATAYSFBfBt9Wnt7vTgyOShE6fRqXI5DYAmE0MwKSQqAzCcYxPnjSer/nJl4mRPU9G0Jph0iigAfKo/tkMuF6UoWBDA78/Pr1ervqw3irIU31gAZq3HgW/6KPK+GEku98cHxjfOvRFd5GJIgnLvwJBkXOALc28ZMv5dZAL4d60sQHTqB2Chdrt490Z0LQUofvLknUj/AeAPX8u9EQZEAIrDbx+CO8CbFw913RthwxFAff5kmUXrAUxNXQoBABuOACG4N1rH5F+xq/YTAG4wDgAAAABJRU5ErkJggg==",
}

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-avatar class="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten">
      <img
        src="${person.src}"
        srcset="${person.src} 1x, ${person.src} 2x"
        alt="${person.name}"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
        class="aspect-square size-full rounded-full object-cover"
      />
      <ui-avatar-fallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"><span aria-hidden="true">MH</span><span class="sr-only">Margaret Hamilton</span></ui-avatar-fallback>
    </ui-avatar>
  `
}
