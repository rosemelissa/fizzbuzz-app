import { fizzbuzzify } from "./fizzbuzzify";

test("Multiples of 3, 5, and 3 and 5 return Fizz, Buzz, and FizzBuzz respectively", () => {
  expect(fizzbuzzify(3)).toBe("Fizz ");
  expect(fizzbuzzify(5)).toBe("Buzz ");
  expect(fizzbuzzify(15)).toBe("FizzBuzz ");
  expect(fizzbuzzify(7)).toBe("7 ");
});
