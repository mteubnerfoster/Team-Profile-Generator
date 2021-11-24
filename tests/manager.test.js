const manager = require("../lib/manager");
const employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new manager("Serra", 1, "email@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "manager"', () => {
  const testValue = "manager";
  const e = new manager("Serra", 1, "email@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new manager("Serra", 1, "email@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});