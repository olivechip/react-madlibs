const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("test for positive integers", () => {
  it("should return a string", () => {
    expect(typeof addCommas(1234)).toBe("string");
    expect(typeof addCommas(1000000)).toBe("string");
    expect(typeof addCommas(9876543210)).toBe("string");
    expect(typeof addCommas(6)).toBe("string");
  });
  it("should have a comma in the right space", () => {
    expect(addCommas(1234).indexOf(",")).toBe(1);
    expect(addCommas(1000000).indexOf(",")).toBe(1);
    expect(addCommas(1000000).indexOf(",", 2)).toBe(5);
    expect(addCommas(9876543210).indexOf(",")).toBe(1);
    expect(addCommas(9876543210).indexOf(",", 2)).toBe(5);
    expect(addCommas(9876543210).indexOf(",", 6)).toBe(9);
    expect(addCommas(6).indexOf(",")).toBe(-1);
  })
});

describe("test for negative integers", () => {
  it("should return a string", () => {
    expect(typeof addCommas(-10)).toBe("string");
  });
  it("should include a negative sign", () => {
    expect(addCommas(-10).includes("-")).toBe(true);
    expect(addCommas(10).includes("-")).toBe(false);
  })
});