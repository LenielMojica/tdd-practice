import { capitalize } from "./capitalize.js";
import { reverse } from "./reverseString.js";
import { Calculator } from "./calculator.js";
import { cipher } from "./caesarCipher.js";
it("capitalizes", () => {
  expect(capitalize("hey")).toBe("Hey");
});

it("reverses", () => {
  expect(reverse("hola")).toBe("aloh");
});
it("substracts", () => {
  expect(Calculator.substract(10, 2)).toBe(8);
});
it("adds", () => {
  expect(Calculator.add(10, 2)).toBe(12);
});
it("multiplies", () => {
  expect(Calculator.multiply(10, 2)).toBe(20);
});
it("divides", () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});
//FACTOR=3
it("returns the right letters (basic case)", () => {
  expect(cipher("abcd", 3)).toBe("defg");
});
it("returns the right letters (basic case)", () => {
  expect(cipher("defg", 3)).toBe("ghij");
});

it("returns the right letters for a word", () => {
  expect(cipher("hola", 3)).toBe("krod");
});
it("returns the right letters for a sentence with spaces", () => {
  expect(cipher("hola que", 3)).toBe("krod txh");
});
it("returns the right letters with signs", () => {
  expect(cipher("hola!!", 3)).toBe("krod!!");
});
it("returns the right letters when letters are on the edge of the lists length", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});
it("returns the right letters with capital letters", () => {
  expect(cipher("Hola", 3)).toBe("Krod");
});
//FACTOR=2
it("returns the right letters (basic case)", () => {
  expect(cipher("abcd", 2)).toBe("cdef");
});
it("returns the right letters (basic case)", () => {
  expect(cipher("defg", 2)).toBe("fghi");
});

it("returns the right letters for a word", () => {
  expect(cipher("hola", 2)).toBe("jqnc");
});
it("returns the right letters for a sentence with spaces", () => {
  expect(cipher("hola que", 2)).toBe("jqnc swg");
});
it("returns the right letters with signs", () => {
  expect(cipher("hola!!", 2)).toBe("jqnc!!");
});
it("returns the right letters when letters are on the edge of the lists length", () => {
  expect(cipher("xyz", 2)).toBe("zab");
});
it("returns the right letters with capital letters", () => {
  expect(cipher("Hola", 2)).toBe("Jqnc");
});