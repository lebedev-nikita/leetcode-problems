import { test, expect } from "bun:test";

function myAtoi(str: string): number {
  let minus = false;
  let metNumber = false;
  let num = 0;

  loop: for (const char of str) {
    switch (char) {
      case " ":
        if (metNumber) {
          break loop;
        }
        break;

      case "-":
        if (metNumber) {
          break loop;
        }
        metNumber = true;
        minus = true;
        break;

      case "+":
        if (metNumber) {
          break loop;
        }
        metNumber = true;
        break;

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        metNumber = true;
        num *= 10;
        num += +char;
        break;

      default:
        break loop;
    }
  }

  if (minus) {
    if (num > 2 ** 31) {
      num = 2 ** 31;
    }
    return -num;
  } else {
    if (num > 2 ** 31 - 1) {
      num = 2 ** 31 - 1;
    }
    return num;
  }
}

test("1", () => {
  expect(myAtoi("123")).toBe(123);
});

test("2", () => {
  expect(myAtoi("-123")).toBe(-123);
});

test("3", () => {
  expect(myAtoi("       -123")).toBe(-123);
});

test("4", () => {
  expect(myAtoi("00123")).toBe(123);
});

test("5", () => {
  expect(myAtoi("       -00123")).toBe(-123);
});

test("6", () => {
  expect(myAtoi("1337c0d3")).toBe(1337);
});

test("7", () => {
  expect(myAtoi("0-1")).toBe(0);
});

test("8", () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
});

test("9", () => {
  expect(myAtoi("+-12")).toBe(0);
});

test("10", () => {
  expect(myAtoi("   +0 123")).toBe(0);
});
