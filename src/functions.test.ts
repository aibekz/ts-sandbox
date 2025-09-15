import { describe, it, expect } from "vitest";
import { greet, add } from "./functions";

describe("greet", () => {
  it("formats username and age", () => {
    expect(greet("Alex", 25)).toBe("Hello, Alex. You are 25 years old.");
  });
});

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(5, 10)).toBe(15);
  });
});
