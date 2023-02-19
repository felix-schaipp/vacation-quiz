import { classNames } from "./classNames"

describe("classNames", () => {
  test("filters input to class names", () => {
    const _classNames = classNames(
      "bg-gray-100 text-gray-900",
      "font-medium rounded-md"
    )
    expect(_classNames).toEqual("bg-gray-100 text-gray-900 font-medium rounded-md")
  })

  test("accepts expression", () => {
    const condition = false
    const _classNames = classNames(
      condition
        ? "bg-gray-100 text-gray-900"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
      "font-medium rounded-md"
    )
    expect(_classNames).toEqual(
      "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium rounded-md"
    )
  })
})
