"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class PriorityQueue {
  constructor() {
    this.items = [];
    this.maxOpen = 0;
  }
  enqueue(elem) {
    let contain = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].score > elem.score) {
        this.items.splice(i, 0, elem);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(elem);
    }
    if (this.items.length > this.maxOpen) this.maxOpen = this.items.length;
  }
  dequeue() {
    return this.isEmpty() ? undefined : this.items.shift();
  }
  isEmpty() {
    return this.items.length == 0;
  }
}
exports.default = PriorityQueue;
//# sourceMappingURL=priorityQueue.js.map