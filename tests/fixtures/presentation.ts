// ?presentation=sheet or ?presentation=auto presents a popup that supports it
// as a sheet, always or on small touch screens. The *-sheet projects set it.
// Its own module, since specs import some fixture modules in Node.
function presentationOption() {
  const presentation = new URLSearchParams(location.search).get("presentation")
  return presentation ? { presentation: presentation as "auto" | "sheet" } : {}
}

export { presentationOption }
