// Scrub areas wherever they are. Labels, values and order are the contract
// the specs rely on, so change them here and nowhere else.
//
// Before
// Toolbar "Tools": a scrub area "Toolbar width", outside the number input,
// connected through a controller (React, Vue) or `for="width"` (web)
// A table whose header cell is a scrub area "Width column" (React and Vue,
// through `render` and `as`)
// Number input "Width" (id width, 100 at first, 0 to 1000): a scrub area "W"
// beside the input, and one "Drag width" nested three elements deep
// After
// Status "Last action", status "Committed"
const numberInputScrubFixture = {
  toolbarLabel: "Tools",
  toolbarScrub: "Toolbar width",
  headerScrub: "Width column",
  label: "Width",
  id: "width",
  defaultValue: 100,
  min: 0,
  max: 1000,
  letterScrub: "W",
  nestedScrub: "Drag width",
}

export { numberInputScrubFixture }
