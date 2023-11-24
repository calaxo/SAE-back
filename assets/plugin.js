import{r as p,a as m}from"./chunk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();var d={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=p,_=Symbol.for("react.element"),x=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,R=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(s,t,i){var o,e={},r=null,n=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(n=t.ref);for(o in t)O.call(t,o)&&!h.hasOwnProperty(o)&&(e[o]=t[o]);if(s&&s.defaultProps)for(o in t=s.defaultProps,t)e[o]===void 0&&(e[o]=t[o]);return{$$typeof:_,type:s,key:r,ref:n,props:e,_owner:R.current}}c.Fragment=x;c.jsx=a;c.jsxs=a;d.exports=c;var l=d.exports,f={},u=m;f.createRoot=u.createRoot,f.hydrateRoot=u.hydrateRoot;f.createRoot(document.getElementById("root")).render(l.jsx(React.StrictMode,{children:l.jsx(App,{})}));
