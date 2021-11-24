const intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "University of Washington";
  const e = new intern("Serra", 1, "email@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
  const testValue = "intern";
  const e = new intern("Serra", 1, "email@test.com", "University of Washington");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "University of Washington";
  const e = new intern("Serra", 1, "email@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});