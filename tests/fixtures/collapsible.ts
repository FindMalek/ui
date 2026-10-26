// What every collapsible implementation renders. Labels and text are the
// contract the specs rely on, so change them here and nowhere else.
const collapsibleFixture = {
  trigger: "Order details",
  content: "Shipped on March 3 from the Lisbon warehouse.",
  // A labelled text field inside the panel, after its content.
  field: "Delivery note",
  // A button inside the panel that closes it.
  close: "Done",
  // A button outside that toggles the panel through a controller.
  controller: "Toggle details",
}

export { collapsibleFixture }
