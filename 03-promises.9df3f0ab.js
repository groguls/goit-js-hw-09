!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i");function r(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var t=+e.target.elements.delay.value,n=+e.target.elements.step.value,o=+e.target.elements.amount.value,a=1;a<=o;a+=1)r(a,t).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),{useIcon:!1})})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),{useIcon:!1})})),t+=n;e.target.reset()}))}();
//# sourceMappingURL=03-promises.9df3f0ab.js.map
