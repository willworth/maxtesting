import { it, expect, test } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number when passed a string num", () => {
  const example = "2";
  const res = transformToNumber(example);
  expect(res).toBe(2);
});
it("should throw error when passed an object", () => {
  const exfn = () => {
    const example = {};
    const res = transformToNumber(example);
  };
  expect(exfn).toThrow();
});
