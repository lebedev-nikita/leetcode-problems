import { test, expect } from "bun:test";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function toListNodes(nums: number[]) {
  return nums.reduceRight<ListNode | null>(
    (agg, curr) => new ListNode(curr, agg),
    null
  );
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const sum: number[] = [];

  let i = 0;
  while (l1 || l2) {
    sum[i] ??= 0;
    if (l1) {
      sum[i] += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum[i] += l2.val;
      l2 = l2.next;
    }

    if (sum[i] >= 10) {
      sum[i] -= 10;
      sum[i + 1] = 1;
    }
    i++;
  }

  return toListNodes(sum);
}

test("1", () => {
  const n1 = toListNodes([2, 4, 3]);
  const n2 = toListNodes([5, 6, 4]);
  const result = toListNodes([7, 0, 8]);

  expect(str(addTwoNumbers(n1, n2))).toBe(str(result));
});

test("2", () => {
  const n1 = toListNodes([0]);
  const n2 = toListNodes([0]);
  const result = toListNodes([0]);

  expect(str(addTwoNumbers(n1, n2))).toBe(str(result));
});

test("3", () => {
  const n1 = toListNodes([9, 9, 9, 9, 9, 9, 9]);
  const n2 = toListNodes([9, 9, 9, 9]);
  const result = toListNodes([8, 9, 9, 9, 0, 0, 0, 1]);

  expect(str(addTwoNumbers(n1, n2))).toBe(str(result));
});

function str(val: unknown) {
  return JSON.stringify(val);
}
