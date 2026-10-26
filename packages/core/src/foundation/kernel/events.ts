/**
 * Adds a listener and returns what removes it.
 */
function on<Type extends keyof HTMLElementEventMap>(
  target: HTMLElement | Document | Window,
  type: Type,
  listener: (event: HTMLElementEventMap[Type]) => void,
  options?: AddEventListenerOptions,
) {
  target.addEventListener(type, listener as EventListener, options)
  return () => target.removeEventListener(type, listener as EventListener, options)
}

// What an `onSelect` handler receives when no DOM event is left to cancel, like
// for a shortcut or a controller's call. A real Event, so `target`, `timeStamp`
// and `preventDefault()` behave as on a click; Node has `Event` too.
const selectEvent = () => new Event("select", { cancelable: true })

export { on, selectEvent }
