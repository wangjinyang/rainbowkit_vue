import { createAuth as te, useAuth as S } from "vue-auth3";
const ne = "2.13.7", re = () => `viem@${ne}`;
class g extends Error {
  constructor(t, n = {}) {
    var o;
    super(), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ViemError"
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: re()
    });
    const r = n.cause instanceof g ? n.cause.details : (o = n.cause) != null && o.message ? n.cause.message : n.details, s = n.cause instanceof g && n.cause.docsPath || n.docsPath;
    this.message = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [
        `Docs: https://viem.sh${s}${n.docsSlug ? `#${n.docsSlug}` : ""}`
      ] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: ${this.version}`
    ].join(`
`), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
  walk(t) {
    return H(this, t);
  }
}
function H(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e ? H(e.cause, t) : t ? null : e;
}
function E(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
class Z extends g {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeExceedsPaddingSizeError"
    });
  }
}
function v(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string" ? se(e, { dir: t, size: n }) : ie(e, { dir: t, size: n });
}
function se(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new Z({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function ie(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  if (e.length > n)
    throw new Z({
      size: e.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
class oe extends g {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(`Number "${o}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntegerOutOfRangeError"
    });
  }
}
class ue extends g {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeOverflowError"
    });
  }
}
function M(e) {
  return E(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function k(e, { size: t }) {
  if (M(e) > t)
    throw new ue({
      givenSize: M(e),
      maxSize: t
    });
}
function ae(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < i) {
    const a = typeof e == "bigint" ? "n" : "";
    throw new oe({
      max: o ? `${o}${a}` : void 0,
      min: `${i}${a}`,
      signed: n,
      size: r,
      value: `${e}${a}`
    });
  }
  const u = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? v(u, { size: r }) : u;
}
const ce = /* @__PURE__ */ new TextEncoder();
function fe(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? he(e, t) : typeof e == "boolean" ? le(e, t) : E(e) ? V(e, t) : q(e, t);
}
function le(e, t = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(e), typeof t.size == "number" ? (k(n, { size: t.size }), v(n, { size: t.size })) : n;
}
const p = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function T(e) {
  if (e >= p.zero && e <= p.nine)
    return e - p.zero;
  if (e >= p.A && e <= p.F)
    return e - (p.A - 10);
  if (e >= p.a && e <= p.f)
    return e - (p.a - 10);
}
function V(e, t = {}) {
  let n = e;
  t.size && (k(n, { size: t.size }), n = v(n, { dir: "right", size: t.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, o = new Uint8Array(s);
  for (let i = 0, u = 0; i < s; i++) {
    const a = T(r.charCodeAt(u++)), c = T(r.charCodeAt(u++));
    if (a === void 0 || c === void 0)
      throw new g(`Invalid byte sequence ("${r[u - 2]}${r[u - 1]}" in "${r}").`);
    o[i] = a * 16 + c;
  }
  return o;
}
function he(e, t) {
  const n = ae(e, t);
  return V(n);
}
function q(e, t = {}) {
  const n = ce.encode(e);
  return typeof t.size == "number" ? (k(n, { size: t.size }), v(n, { dir: "right", size: t.size })) : n;
}
function U(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function X(e, ...t) {
  if (!(e instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function L(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function de(e, t) {
  X(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const x = /* @__PURE__ */ BigInt(2 ** 32 - 1), R = /* @__PURE__ */ BigInt(32);
function pe(e, t = !1) {
  return t ? { h: Number(e & x), l: Number(e >> R & x) } : { h: Number(e >> R & x) | 0, l: Number(e & x) | 0 };
}
function ge(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: i } = pe(e[s], t);
    [n[s], r[s]] = [o, i];
  }
  return [n, r];
}
const we = (e, t, n) => e << n | t >>> 32 - n, be = (e, t, n) => t << n | e >>> 32 - n, me = (e, t, n) => t << n - 32 | e >>> 64 - n, ye = (e, t, n) => e << n - 32 | t >>> 64 - n;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const xe = (e) => e instanceof Uint8Array, $e = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), Ae = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Ae)
  throw new Error("Non little-endian hardware is not supported");
function ve(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function J(e) {
  if (typeof e == "string" && (e = ve(e)), !xe(e))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
class Ie {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Se(e) {
  const t = (r) => e().update(J(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
const [K, G, W] = [[], [], []], Oe = /* @__PURE__ */ BigInt(0), y = /* @__PURE__ */ BigInt(1), Pe = /* @__PURE__ */ BigInt(2), ze = /* @__PURE__ */ BigInt(7), Ee = /* @__PURE__ */ BigInt(256), ke = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = y, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], K.push(2 * (5 * r + n)), G.push((e + 1) * (e + 2) / 2 % 64);
  let s = Oe;
  for (let o = 0; o < 7; o++)
    t = (t << y ^ (t >> ze) * ke) % Ee, t & Pe && (s ^= y << (y << /* @__PURE__ */ BigInt(o)) - y);
  W.push(s);
}
const [Be, _e] = /* @__PURE__ */ ge(W, !0), j = (e, t, n) => n > 32 ? me(e, t, n) : we(e, t, n), N = (e, t, n) => n > 32 ? ye(e, t, n) : be(e, t, n);
function Me(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const u = (i + 8) % 10, a = (i + 2) % 10, c = n[a], f = n[a + 1], l = j(c, f, 1) ^ n[u], d = N(c, f, 1) ^ n[u + 1];
      for (let h = 0; h < 50; h += 10)
        e[i + h] ^= l, e[i + h + 1] ^= d;
    }
    let s = e[2], o = e[3];
    for (let i = 0; i < 24; i++) {
      const u = G[i], a = j(s, o, u), c = N(s, o, u), f = K[i];
      s = e[f], o = e[f + 1], e[f] = a, e[f + 1] = c;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let u = 0; u < 10; u++)
        n[u] = e[i + u];
      for (let u = 0; u < 10; u++)
        e[i + u] ^= ~n[(u + 2) % 10] & n[(u + 4) % 10];
    }
    e[0] ^= Be[r], e[1] ^= _e[r];
  }
  n.fill(0);
}
class B extends Ie {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, s = !1, o = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, U(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = $e(this.state);
  }
  keccak() {
    Me(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    L(this);
    const { blockLen: n, state: r } = this;
    t = J(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let u = 0; u < i; u++)
        r[this.pos++] ^= t[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    t[r] ^= n, n & 128 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    L(this, !1), X(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      t.set(n.subarray(this.posOut, this.posOut + i), s), this.posOut += i, s += i;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return U(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (de(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: o, enableXOF: i } = this;
    return t || (t = new B(n, r, s, i, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = r, t.outputLen = s, t.enableXOF = i, t.destroyed = this.destroyed, t;
  }
}
const Te = (e, t, n) => Se(() => new B(t, e, n)), Ue = /* @__PURE__ */ Te(1, 136, 256 / 8);
function Le(e, t) {
  return Ue(E(e, { strict: !1 }) ? fe(e) : e);
}
function Re(e) {
  var l, d, h;
  const { scheme: t, statement: n, ...r } = ((l = e.match(je)) == null ? void 0 : l.groups) ?? {}, { chainId: s, expirationTime: o, issuedAt: i, notBefore: u, requestId: a, ...c } = ((d = e.match(Ne)) == null ? void 0 : d.groups) ?? {}, f = (h = e.split("Resources:")[1]) == null ? void 0 : h.split(`
- `).slice(1);
  return {
    ...r,
    ...c,
    ...s ? { chainId: Number(s) } : {},
    ...o ? { expirationTime: new Date(o) } : {},
    ...i ? { issuedAt: new Date(i) } : {},
    ...u ? { notBefore: new Date(u) } : {},
    ...a ? { requestId: a } : {},
    ...f ? { resources: f } : {},
    ...t ? { scheme: t } : {},
    ...n ? { statement: n } : {}
  };
}
const je = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, Ne = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
class Ce extends g {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAddressError"
    });
  }
}
class Q extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  set(t, n) {
    return super.set(t, n), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this;
  }
}
const O = /* @__PURE__ */ new Q(8192);
function Y(e, t) {
  if (O.has(`${e}.${t}`))
    return O.get(`${e}.${t}`);
  const n = e.substring(2).toLowerCase(), r = Le(q(n)), s = n.split("");
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return O.set(`${e}.${t}`, o), o;
}
function De(e, t) {
  if (!He(e, { strict: !1 }))
    throw new Ce({ address: e });
  return Y(e, t);
}
const Fe = /^0x[a-fA-F0-9]{40}$/, P = /* @__PURE__ */ new Q(8192);
function He(e, t) {
  const { strict: n = !0 } = t ?? {}, r = `${e}.${n}`;
  if (P.has(r))
    return P.get(r);
  const s = Fe.test(e) ? e.toLowerCase() === e ? !0 : n ? Y(e) === e : !0 : !1;
  return P.set(r, s), s;
}
class w extends g {
  constructor(t) {
    const { docsPath: n, field: r, metaMessages: s } = t;
    super(`Invalid Sign-In with Ethereum message field "${r}".`, {
      docsPath: n,
      docsSlug: "TODO",
      metaMessages: s
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SiweInvalidMessageFieldError"
    });
  }
}
function C(e) {
  if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) || /%[^0-9a-f]/i.test(e) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(e))
    return !1;
  const t = Ze(e), n = t[1], r = t[2], s = t[3], o = t[4], i = t[5];
  if (!(n != null && n.length && s.length >= 0))
    return !1;
  if (r != null && r.length) {
    if (!(s.length === 0 || /^\//.test(s)))
      return !1;
  } else if (/^\/\//.test(s))
    return !1;
  if (!/^[a-z][a-z0-9\+\-\.]*$/.test(n.toLowerCase()))
    return !1;
  let u = "";
  return u += `${n}:`, r != null && r.length && (u += `//${r}`), u += s, o != null && o.length && (u += `?${o}`), i != null && i.length && (u += `#${i}`), u;
}
function Ze(e) {
  return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
}
function Ve(e) {
  const { chainId: t, domain: n, expirationTime: r, issuedAt: s = /* @__PURE__ */ new Date(), nonce: o, notBefore: i, requestId: u, resources: a, scheme: c, uri: f, version: l } = e;
  {
    if (t !== Math.floor(t))
      throw new w({
        field: "chainId",
        metaMessages: [
          "- Chain ID must be a EIP-155 chain ID.",
          "- See https://eips.ethereum.org/EIPS/eip-155",
          "",
          `Provided value: ${t}`
        ]
      });
    if (!(qe.test(n) || Xe.test(n) || Je.test(n)))
      throw new w({
        field: "domain",
        metaMessages: [
          "- Domain must be an RFC 3986 authority.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${n}`
        ]
      });
    if (!Ke.test(o))
      throw new w({
        field: "nonce",
        metaMessages: [
          "- Nonce must be at least 8 characters.",
          "- Nonce must be alphanumeric.",
          "",
          `Provided value: ${o}`
        ]
      });
    if (!C(f))
      throw new w({
        field: "uri",
        metaMessages: [
          "- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${f}`
        ]
      });
    if (l !== "1")
      throw new w({
        field: "version",
        metaMessages: [
          "- Version must be '1'.",
          "",
          `Provided value: ${l}`
        ]
      });
    if (c && !Ge.test(c))
      throw new w({
        field: "scheme",
        metaMessages: [
          "- Scheme must be an RFC 3986 URI scheme.",
          "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1",
          "",
          `Provided value: ${c}`
        ]
      });
    const b = e.statement;
    if (b != null && b.includes(`
`))
      throw new w({
        field: "statement",
        metaMessages: [
          "- Statement must not include '\\n'.",
          "",
          `Provided value: ${b}`
        ]
      });
  }
  const d = De(e.address), h = c ? `${c}://${n}` : n, _ = e.statement ? `${e.statement}
` : "", ee = `${h} wants you to sign in with your Ethereum account:
${d}

${_}`;
  let m = `URI: ${f}
Version: ${l}
Chain ID: ${t}
Nonce: ${o}
Issued At: ${s.toISOString()}`;
  if (r && (m += `
Expiration Time: ${r.toISOString()}`), i && (m += `
Not Before: ${i.toISOString()}`), u && (m += `
Request ID: ${u}`), a) {
    let b = `
Resources:`;
    for (const I of a) {
      if (!C(I))
        throw new w({
          field: "resources",
          metaMessages: [
            "- Every resource must be a RFC 3986 URI.",
            "- See https://www.rfc-editor.org/rfc/rfc3986",
            "",
            `Provided value: ${I}`
          ]
        });
      b += `
- ${I}`;
    }
    m += b;
  }
  return `${ee}
${m}`;
}
const qe = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/, Xe = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/, Je = /^localhost(:[0-9]{1,5})?$/, Ke = /^[a-zA-Z0-9]{8,}$/, Ge = /^([a-zA-Z][a-zA-Z0-9+-.]*)$/, z = 256;
let $ = z, A;
function We(e = 11) {
  if (!A || $ + e > z * 2) {
    A = "", $ = 0;
    for (let t = 0; t < z; t++)
      A += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return A.substring($, $++ + e);
}
function Qe() {
  return We(96);
}
var Ye = Object.defineProperty, et = Object.defineProperties, tt = Object.getOwnPropertyDescriptors, D = Object.getOwnPropertySymbols, nt = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable, F = (e, t, n) => t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, st = (e, t) => {
  for (var n in t || (t = {}))
    nt.call(t, n) && F(e, n, t[n]);
  if (D)
    for (var n of D(t))
      rt.call(t, n) && F(e, n, t[n]);
  return e;
}, it = (e, t) => et(e, tt(t)), ot = (e, t, n) => new Promise((r, s) => {
  var o = (a) => {
    try {
      u(n.next(a));
    } catch (c) {
      s(c);
    }
  }, i = (a) => {
    try {
      u(n.throw(a));
    } catch (c) {
      s(c);
    }
  }, u = (a) => a.done ? r(a.value) : Promise.resolve(a.value).then(o, i);
  u((n = n.apply(e, t)).next());
}), ut = Object.prototype.toString;
function at(e) {
  return ut.call(e).slice(8, -1);
}
var ct = (e) => {
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}, ft = {
  request(e) {
    var t;
    return fetch((t = e.url) != null ? t : "/", it(st({}, e), {
      body: typeof e.data == "object" && at(e.data) !== "FormData" ? new URLSearchParams(e.data) : e.data
    })).then((n) => ot(this, null, function* () {
      let r;
      switch (e.responseType) {
        case "arraybuffer":
          r = yield n.arrayBuffer();
          break;
        case "blob":
          r = yield n.blob();
          break;
        case "json":
          r = yield n.json();
          break;
        case "text":
          r = yield n.text();
          break;
        default:
          r = ct(yield n.text());
      }
      return {
        data: r,
        headers: Object.fromEntries(Array.from(n.headers.entries())),
        status: n.status,
        statusText: n.statusText
      };
    }));
  }
};
var lt = {
  request(e, t, n) {
    return t.headers.Authorization = n, t;
  },
  response(e, { headers: t }) {
    return t.Authorization || t.authorization;
  }
};
const dt = () => {
  function e(t, n = {}) {
    const {
      scheme: r,
      domain: s,
      statement: o,
      uri: i,
      version: u,
      ...a
    } = n, f = { ...{
      drivers: {
        http: ft,
        auth: lt
      }
    }, ...a };
    return t.use(te(f)), {
      createMessage: ({ address: l, chainId: d, nonce: h }) => Ve({
        scheme: r ?? window.location.protocol.slice(0, -1),
        domain: s ?? window.location.host,
        statement: o ?? "Sign in with Ethereum to the app.",
        uri: i ?? window.location.origin,
        nonce: h === "" || h === void 0 || h === null ? Qe() : h,
        version: "1",
        address: l,
        chainId: d
      }),
      getMessageBody: ({ message: l }) => Re(l),
      getNonce: async () => {
        const d = S().currentToken;
        if (!d)
          throw new Error();
        return d;
      },
      signOut: async () => {
        await S().logout({ redirect: !1 });
      },
      async verify({ message: l, signature: d }) {
        return (await S().login({
          method: "POST",
          redirect: !1,
          data: {
            message: JSON.stringify(l),
            signature: d
          }
        })).status > 200;
      }
    };
  }
  return { create: e };
};
export {
  dt as RainbowKitVueSiweAuthAdapterPlugin
};
