import assert from "node:assert/strict";
import { add } from "./src/math.js";
assert.equal(add(2, 3), 5);
assert.equal(add(-2, 2), 0);
console.log("CANARY_TEST_OK");
