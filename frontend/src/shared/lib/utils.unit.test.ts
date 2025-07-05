import { expect, test } from "vitest";
import { cn } from "./utils";

test("cn util should build string correctly", () => {
  const EXPECTED = "a a a";
  const condition = false;

  expect(cn(condition && "b", "a a a")).toBe(EXPECTED);
});
