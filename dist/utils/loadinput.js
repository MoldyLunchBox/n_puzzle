"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function loadInput(filePath) {
  return new Promise((resolve, reject) => {
    _fs.default.readFile(filePath, function (err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(data.toString());
    });
  });
}
var _default = loadInput;
exports.default = _default;
//# sourceMappingURL=loadinput.js.map