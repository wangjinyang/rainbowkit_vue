import { openBlock as t, createElementBlock as e, createStaticVNode as o } from "vue";
const c = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "28",
  height: "28",
  fill: "none"
}, r = /* @__PURE__ */ o('<path fill="#fff" d="M0 0h28v28H0z"></path><rect width="20" height="16" x="4" y="6" fill="url(#a)" rx="3.5"></rect><path fill="#0E76FD" d="M16 14a3 3 0 0 1 3-3h4.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C25 11.76 25 12.04 25 12.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C24.24 17 23.96 17 23.4 17H19a3 3 0 0 1-3-3"></path><circle cx="19" cy="14" r="1.25" fill="#A3D7FF"></circle><defs><linearGradient id="a" x1="14" x2="14" y1="6" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#174299"></stop><stop offset="1" stop-color="#001E59"></stop></linearGradient></defs>', 5), i = [
  r
];
function l(a, s) {
  return t(), e("svg", c, [...i]);
}
const d = { render: l };
export {
  d as default,
  l as render
};
