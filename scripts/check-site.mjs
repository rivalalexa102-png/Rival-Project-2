import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(path.join(root, file), "utf8");
const html = read("index.html");
const css = read("styles.css");
const script = read("script.js");

assert.match(html, /<html lang="en">/, "The page should declare its language.");
assert.match(html, /<title>[^<]+<\/title>/, "The page should have a title.");
assert.match(html, /Kabankalan Catholic College/, "The page should identify the college.");
assert.match(html, /id="home"/, "The page should include the home section.");
assert.match(html, /aria-expanded="false"/, "The mobile menu should expose its collapsed state.");
assert.match(script, /event\.key === "Escape"/, "The mobile menu should close with Escape.");
assert.ok(existsSync(path.join(root, "404.html")), "The Pages not-found page should exist.");

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
for (const anchor of anchors) {
  assert.ok(ids.has(anchor), `The in-page link #${anchor} should have a target.`);
}

for (const match of html.matchAll(/<(?:img|link|script)\b[^>]*>/g)) {
  const tag = match[0];
  const reference = tag.match(/\b(?:src|href)="([^"]+)"/)?.[1];
  if (!reference || /^(?:[a-z]+:|\/\/|#)/i.test(reference)) continue;
  const localPath = reference.split(/[?#]/, 1)[0];
  assert.ok(existsSync(path.join(root, localPath)), `The local asset ${localPath} should exist.`);
}

for (const match of css.matchAll(/url\((["']?)(.*?)\1\)/g)) {
  const reference = match[2];
  if (/^(?:[a-z]+:|\/\/|data:|#)/i.test(reference)) continue;
  assert.ok(existsSync(path.join(root, reference)), `The local stylesheet asset ${reference} should exist.`);
}

console.log(`Site check passed: ${anchors.length} in-page links and local assets verified.`);
