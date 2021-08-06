const allData = require("./../all");

test("Check If Array Contains 6 Elmenets 1st Method", () => {
  expect(allData.length).toBe(6);
});

test("Check If Array Contains 6 Elmenets 2end method", () => {
  expect(allData).toHaveLength(6);
});

test("Check If Array not Contains number 6", () => {
  expect(allData).toContain(6);
});

test("Check If Array not Contains number 7", () => {
  expect(allData).not.toContain(7);
});

test("Check If Array not Contains number 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(0);
  }
});

test("Check If Array  Contains only Numbers", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});

test("Check If Array  Contains only Numbers", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});

test("Check If Array  Frist Element Is larger Than 1", () => {
  expect(allData[2]).toBeGreaterThan(1);
});

test("Check If Array  Frist Element Is larger Than 1", () => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
});

test("Check If Array  Frist Element Is Less Than 5", () => {
  expect(allData[0]).toBeLessThan(5);
});

test("Check for Given Value is Undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("Check for Substring Inside String By RegExp", () => {
  let myString = "I love Elzero Web School";
  expect(myString).toMatch(/Elzero/);
});

test("Check for Property Age", () => {
  let myObject = {
    name: "Osama",
    age: 37,
  };
  expect(myObject).toHaveProperty("age");
});

test("Check for Property Age value 37", () => {
  let myObject = {
    name: "Osama",
    age: 37,
  };
  expect(myObject).toHaveProperty("age", 37);
});

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;

    if (pass) {
      return {
        massage: () => `Expected ${received} To Be larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        massage: () =>
          `Error: Expected ${received} To Be larger Than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check number Is Larger Than Other Number ", () => {
  expect(10).toBeLargerThan(9);
});

expect.extend({
  toBebetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `Expected ${received} To Be between ${start} And ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected ${received} To Be between ${start} And ${end}`,
        pass: false,
      };
    }
  },
});

test("Expect Anything ", () => {
  expect("Mahmoud").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
});

test("Expect Any Array Containing  ", () => {
  expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([1, 2]));
});
