import { expect, test } from "../fixtures"
import { paginationFixture as f } from "../fixtures/pagination"
import { current, part, range } from "./pagination.helpers"

// Right-to-left pages keep the list in reading order: Next still goes forward.

test("Next goes to the next page and the range reads the same in a right-to-left page", async ({
  page,
  open,
}) => {
  await open("pagination", { dir: "rtl", page: "5" })
  await part(page, f.next).click()
  expect(await current(page)).toEqual(["6"])
  expect(await range(page)).toBe("1 … 5 6 7 … 10")
})
