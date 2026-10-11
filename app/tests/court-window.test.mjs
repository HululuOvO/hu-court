import test from "node:test";
import assert from "node:assert/strict";
import { courtState, WINDOW } from "../src/data.js";
test("court opens only after full time and closes at the 12-hour boundary", () => {
  const endedAt = 1000;
  assert.equal(courtState({ state: "live" }, endedAt + WINDOW), "live");
  assert.equal(
    courtState({ state: "scheduled" }, endedAt + WINDOW),
    "scheduled",
  );
  assert.equal(
    courtState({ state: "finished", endedAt }, endedAt + WINDOW - 1),
    "open",
  );
  assert.equal(
    courtState({ state: "finished", endedAt }, endedAt + WINDOW),
    "closed",
  );
});
