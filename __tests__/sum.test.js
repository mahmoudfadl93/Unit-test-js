const sum = require("./../sum");

// test (name , fn , timeout);
// it name , fn , timeout);

// describe (name , fn );

describe("check the number sum totel", () => {
  it("should return 0 if no number enter", () => {
    expect(sum()).toBe(0);
  });
  it("should return number", () => {
    expect(sum(10)).toBe(10);
  });

  it("should return number one + number 2", () => {
    expect(sum(15, 25)).toBe(40);
  });

  it("should return number one + number 2 + number 3 ", () => {
    expect(sum(15, 25, 10)).toBe(50);
  });

  it("should return result of all numbers ", () => {
    expect(sum(1, 2, 3, 5, 6, 7, 8)).toBe(32);
  });
});
