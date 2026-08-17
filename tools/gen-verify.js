#!/usr/bin/env node
const crypto = require("crypto");
const ALPH = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const secret = Buffer.from([
  102, 237, 23, 169, 21, 112, 133, 247, 121, 221, 202, 77, 34, 77, 35, 63,
  1, 70, 84, 254, 102, 214, 208, 161, 3, 143, 51, 41, 31, 172, 233, 234,
]);

function identity(raw) {
  const s = String(raw || "").trim();
  if (!s) return "";
  if (s.includes("@")) return "g:" + s.toLowerCase();
  return "u:" + s.toLowerCase().replace(/\s+/g, " ");
}

function codeFor(id) {
  const hex = crypto.createHmac("sha256", secret).update("ahdaf.v2|" + id).digest("hex");
  let n = BigInt("0x" + hex.slice(0, 16));
  let out = "";
  for (let i = 0; i < 12; i++) {
    out = ALPH[Number(n % 32n)] + out;
    n /= 32n;
  }
  return out.slice(0, 4) + "-" + out.slice(4, 8) + "-" + out.slice(8, 12);
}

const input = process.argv.slice(2).join(" ").trim();
if (!input) {
  console.error("usage: node tools/gen-verify.js <username-or-gmail>");
  process.exit(1);
}
const id = identity(input);
console.log(id);
console.log(codeFor(id));
