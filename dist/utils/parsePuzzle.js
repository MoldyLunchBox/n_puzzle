"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function parsePuzzle(inputFileTxt) {
  return inputFileTxt.split("\n").filter(line => /^([\d+| ]+)(\d{1,2})+$/.test(line)).map(l => l.split(" ").filter(l => l)).filter(l => l && l.length > 1);
}
var _default = parsePuzzle;
exports.default = _default;
//# sourceMappingURL=parsePuzzle.js.map