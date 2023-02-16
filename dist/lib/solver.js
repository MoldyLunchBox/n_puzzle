"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _priorityQueue = _interopRequireDefault(require("./priorityQueue"));
var _heapQueue = _interopRequireDefault(require("./heapQueue"));
var _bloomfilter = require("bloomfilter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Solver {
  constructor(firstElement, queueType) {
    this.visited = new _bloomfilter.BloomFilter(32 * 1024 * 40000, 32);
    if (queueType == "heapQ") this.queue = new _heapQueue.default();else if (queueType == "priorityQ") this.queue = new _priorityQueue.default();else throw Error(`Please enter correct queue Type ["heapQ", "priorityQ"]`);
    this.queue.enqueue(firstElement);
    this.visited.add(firstElement.hash);
    this.solution = null;
  }
  async buildScenario() {
    let steps = [];
    while (this.solution) {
      steps.push([this.solution.puzzle, this.solution.score]);
      this.solution = this.solution.parent;
    }
    steps = steps.reverse();
    return steps;
  }
  async start() {
    let count = 0;
    const start = process.hrtime();
    while (!this.solution && !this.queue.isEmpty()) {
      const currentPuzzle = this.queue.dequeue();
      currentPuzzle.wakeUpChilds();
      count++;
      if (currentPuzzle.isFinal) {
        this.solution = currentPuzzle;
        break;
      }
      for (let i = 0; i < currentPuzzle.childs.length; i++) {
        const child = currentPuzzle.childs[i];
        if (!this.visited.test(child.hash)) {
          this.visited.add(child.hash);
          this.queue.enqueue(child);
        }
      }
    }
    const time = process.hrtime(start);
    const steps = await this.buildScenario();
    return {
      steps,
      cTime: count,
      cSize: this.queue.maxOpen,
      time
    };
  }
}
exports.default = Solver;
//# sourceMappingURL=solver.js.map