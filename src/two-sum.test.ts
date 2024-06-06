import { test, expect } from "bun:test";

function twoSum(nums: number[], target: number): number[] {
  const numToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const pairIndex = numToIndex.get(target - nums[i]);
    if (pairIndex !== undefined) {
      return [i, pairIndex];
    } else {
      numToIndex.set(nums[i], i);
    }
  }

  return [-1, -1];
}

test("1", () => {
  const input = [3, 2, 4];
  const target = 6;
  const result = [1, 2];
  expect(twoSum(input, target).sort()).toEqual(result.sort());
});

test("2", () => {
  const input = [2, 7, 11, 15];
  const target = 9;
  const result = [0, 1];
  expect(twoSum(input, target).sort()).toEqual(result.sort());
});

test("3", () => {
  const input = [3, 3];
  const target = 6;
  const result = [0, 1];
  expect(twoSum(input, target).sort()).toEqual(result.sort());
});
