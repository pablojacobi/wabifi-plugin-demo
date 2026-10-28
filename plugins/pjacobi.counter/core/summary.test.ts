import { describe, expect, it } from "vitest";
import { summary } from "./summary";

describe("summary", () => {
  it("says the plugin is running", () => {
    expect(summary("pjacobi.counter")).toBe("pjacobi.counter is running.");
  });
});
