const mocker = require("./../mock");

test("Mock Function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("Mahmouds")).toBe("Hello Mahmouds");
  expect(mocker("Mahmoudd")).toBe("Hello Mahmoudd");
  expect(mocker("Mahmoudf")).toBe("Hello Mahmoudf");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("Mahmoudd");
  expect(mocker).toHaveBeenLastCalledWith("Mahmoudf");
});
