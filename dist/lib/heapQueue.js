"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _heapq = _interopRequireDefault(require("heapq"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class HeapQueue {
  constructor() {
    this.items = [];
    this.maxOpen = 0;
    this.cmp = function (x, y) {
      return x.score < y.score;
    };
  }
  enqueue(elem) {
    _heapq.default.push(this.items, elem, this.cmp);
    if (this.items.length > this.maxOpen) this.maxOpen = this.items.length;
  }
  dequeue() {
    return this.isEmpty() ? undefined : this.items.shift();
  }
  isEmpty() {
    return !this.items.length;
  }
}
exports.default = HeapQueue;
//# sourceMappingURL=heapQueue.js.map