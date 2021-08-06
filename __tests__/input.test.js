const filter = require("./../input");

describe("Validate The Input Field ", () => {
  test("Check If Name if Empty", () => {
    expect(filter()).toBe("unknown");
  });

  test("Check for Spaces (Start + End)", () => {
    expect(filter(" Mahmoud ")).toBe("Mahmoud");
  });

  test("Check If Name Not Starts With Underscore", () => {
    expect(filter("_Mahmoud")).toBe("Mahmoud");
  });
});
