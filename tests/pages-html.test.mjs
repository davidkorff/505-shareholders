import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages output contains the essential campaign content", async () => {
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  const assetNames = await readdir(new URL("../docs/assets/", import.meta.url));
  const jsName = assetNames.find((name) => name.endsWith(".js"));
  assert.ok(jsName, "expected a JavaScript bundle");
  const js = await readFile(new URL(`../docs/assets/${jsName}`, import.meta.url), "utf8");
  const output = `${html}\n${js}`;

  assert.match(html, /505 Shareholders/);
  assert.match(output, /Independent shareholder information/);
  assert.match(output, /September 23, 2026/);
  assert.match(output, /505 East 79th Street/);
  assert.match(output, /Eight priorities\. A 100-day start/);
  assert.match(output, /Sign the proxy\. Build the votes for change/);
  assert.match(output, /505-shareholder-slate-proxy\.pdf/);
  assert.match(output, /a community of more than 115 shareholders/);
  assert.match(output, /Candidate experience at a glance/);
  assert.match(output, /The Chair was chosen by the current Board/);
  assert.match(output, /All six incumbent applicants were recommended/);
  assert.match(output, /not the co-op/);
  assert.doesNotMatch(output, /June 18/);
  assert.doesNotMatch(output, /gym|playroom|outdoor space/i);
  assert.doesNotMatch(output, /revised proxy|revised form/i);
  assert.doesNotMatch(output, /15 to 20 hours|time commitment/i);
  assert.doesNotMatch(output, /39 valid apartments|valid apartment votes/i);
  assert.doesNotMatch(output, /WhatsApp Chat - 505 Shareholders/);
});
