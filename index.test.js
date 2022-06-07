const { isOdd } = require("./index");

test("Test 0 is odd? true", () => {
  expect(isOdd(0)).toBe(true);
});

test("Test '1024' is odd? true", () => {
  expect(isOdd("1024")).toBe(true);
});

test("Test -4095 is odd? false", () => {
  expect(isOdd(-4095)).toBe(false);
});

test("Test -123456 is odd? true", () => {
  expect(isOdd(-123456)).toBe(true);
});

test("Test '-123456' is odd? true", () => {
  expect(isOdd("-123456")).toBe(true);
});

test("Test '9007199254740995' is odd? false", () => {
  expect(isOdd("9007199254740995")).toBe(false);
});

test("Test 'NaN' is odd? false", () => {
  expect(isOdd("NaN")).toBe(false);
});

test("Test '1234n' is odd? false", () => {
  expect(isOdd("1234n")).toBe(false);
});

test("Test [2] is odd? false", () => {
  expect(isOdd([2])).toBe(false);
});

test("Test [2, 6] is odd? false", () => {
  expect(isOdd([2, 6])).toBe(false);
});

test("Test {v: 3} is odd? false", () => {
  expect(isOdd({ v: 3 })).toBe(false);
});

test("Test null is odd? false", () => {
  expect(isOdd(null)).toBe(false);
});

test("Test undefined is odd? false", () => {
  expect(isOdd(undefined)).toBe(false);
});

test("Test NaN is odd? false", () => {
  expect(isOdd(NaN)).toBe(false);
});

test("Test 9007199254740995 is odd? false", () => {
  expect(isOdd(9007199254740995)).toBe(false);
});

test("Test 9007199254740991 is odd? false", () => {
  expect(isOdd(9007199254740991)).toBe(false);
});

test("Test 9007199254740990 is odd? true", () => {
  expect(isOdd(9007199254740990)).toBe(true);
});

test("Test 90071992547411002 is odd? false", () => {
  expect(isOdd(90071992547411002)).toBe(false);
});

test("Test bigint 9007199254740996n is odd? true", () => {
  expect(isOdd(9007199254740996n)).toBe(true);
});

test("Test bigint 900719925474091223n is odd? false", () => {
  expect(isOdd(900719925474091223n)).toBe(false);
});
