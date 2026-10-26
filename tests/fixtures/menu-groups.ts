// Groups of items a spec reorders while the menu is open, with `changeItems`,
// like sections an app sorts. Three groups, so the new order isn't the old one
// turned around a loop.
const menuGroups = [
  {
    label: "Edit",
    items: [
      { value: "undo", label: "Undo" },
      { value: "redo", label: "Redo" },
    ],
  },
  {
    label: "View",
    items: [
      { value: "zoom-in", label: "Zoom in" },
      { value: "zoom-out", label: "Zoom out" },
    ],
  },
  {
    label: "Help",
    items: [
      { value: "docs", label: "Docs" },
      { value: "about", label: "About" },
    ],
  },
]

type MenuGroupsFixture = typeof menuGroups

const changedMenuGroups = {
  reversed: [...menuGroups].reverse(),
}

export { changedMenuGroups, menuGroups, type MenuGroupsFixture }
