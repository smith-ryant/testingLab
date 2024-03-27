import { describe, it, test, expect } from "vitest";

import * as functions from "./functions";

describe("functions", () => {
  test("should be an object", () => {
    expect(typeof functions).toBe("object");
  });
});

test("returnTwo function returns 2", () => {
  expect(functions.returnTwo()).toBe(2);
});

test("greeting function returns correct greeting", () => {
  expect(functions.greeting("James")).toBe("Hello, James.");
  expect(functions.greeting("Jill")).toBe("Hello, Jill.");
});

test("add function returns correct sum", () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(5, 9)).toBe(14);
});

test("functions should throw error when dividing by zero", () => {
  expect(() => functions.divide(1, 0)).toThrow("Cannot divide by zero");
});

test("functions should return NaN when non-numeric inputs are provided", () => {
  expect(functions.add("a", "b")).toBeNaN();
  expect(functions.multiply("a", "b")).toBeNaN();
  expect(functions.subtract("a", "b")).toBeNaN();
  expect(functions.divide("a", "b")).toBeNaN();
});
