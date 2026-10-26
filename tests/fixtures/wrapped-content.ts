// Data roots whose content is wrapped in a fragment or an element, so the root
// must find it below its direct children. React and Vue only: web parts are
// always the app's own elements.
const wrappedContentFixture = {
  select: "Select fruit",
  combobox: "Combobox fruit",
  autocomplete: "Autocomplete fruit",
  triggerMenu: "Message",
  items: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
}

export { wrappedContentFixture }
