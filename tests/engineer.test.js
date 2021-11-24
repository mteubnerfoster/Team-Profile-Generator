const engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new engineer("Serra", 1, "email@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
  const testValue = "engineer";
  const e = new engineer("Serra", 1, "email@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new engineer("Serra", 1, "email@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});