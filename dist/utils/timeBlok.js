"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blok;
function blok(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
}
//# sourceMappingURL=timeBlok.js.map