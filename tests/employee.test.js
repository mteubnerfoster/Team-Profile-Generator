const employee = require("../lib/employee");

test("Can instantiate employee instance", () => {
  const e = new employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Fiona";
  const e = new employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new employee("Serra", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "email@test.com";
  const e = new employee("Serra", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Fiona";
  const e = new employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new employee("Serra", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "email@test.com";
  const e = new employee("Serra", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"employee\"", () => {
  const testValue = "employee";
  const e = new employee("Fiona", 1, "email@test.com");
  expect(e.getRole()).toBe(testValue);
});