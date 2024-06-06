import { test, expect } from "bun:test";

function isPalindrome(x: number): boolean {
  const str = String(x);
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

test("1", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("2", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("3", () => {
  expect(isPalindrome(10)).toBe(false);
});
