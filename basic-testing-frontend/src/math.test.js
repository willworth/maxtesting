import { it, expect, test } from "vitest";
import { add } from "./math";

it("should sum all nums", () => {
  const result = add([1, 2, 3]);
  //https://vitest.dev/api/#tobe
  expect(result).toBe(6);
});

it("should yield NaN for invalid input", () => {
  const inputs = ["invalid", 3];
  const result = add(inputs);
  expect(result).toBeNaN();
});

it("should work with numbers passed as strings", () => {
  const inputs = ["1", "2"];
  const result = add(inputs);
  const expectedResult = inputs.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it("should yield 0 for empty array", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});
it("should throw error if no val passed", () => {
  //try catch would also work, but is more work
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
  //   expect(resultFn).not.toThrow();
});

it("should throw error with multiple args instead of array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow(/is not iterable/);
});
