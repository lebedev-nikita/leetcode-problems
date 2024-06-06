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
  expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2].sort());
});

test("2", () => {
  expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1].sort());
});

test("3", () => {
  expect(twoSum([3, 3], 6).sort()).toEqual([0, 1].sort());
});
