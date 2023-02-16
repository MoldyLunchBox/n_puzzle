"use strict";

var _utils = require("./utils");
var _node = _interopRequireDefault(require("./lib/node"));
var _solver = _interopRequireDefault(require("./lib/solver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  log
} = console;
async function main() {
  const inputFileTxt = await (0, _utils.readFile)("./src/input");
  const puzzle = (0, _utils.parsePuzzle)(inputFileTxt);
  const goal = _utils.generateGoal.snail(puzzle.length);
  const params = {
    puzzle: puzzle,
    greedy: false,
    uniform: false,
    heuristic: ["linearConflicts"],
    queueType: "heapQ"
  };
  const initPuzzle = new _node.default(params.puzzle, params.greedy, params.uniform, goal, undefined, params.heuristic);
  (0, _utils.printPuzzle)(initPuzzle.puzzle, initPuzzle.score);
  const solver = new _solver.default(initPuzzle, params.queueType);
  let solution = await solver.start();
  if (solution) {
    const steps = solution.steps;
    const t = {
      s: solution.time[0],
      m: parseFloat((solution.time[1] / 1000000).toFixed(3))
    };
    for (let i = 0; i < steps.length; i++) {
      console.clear();
      (0, _utils.printPuzzle)(steps[i][0], steps[i][1]);
      log(`Step n: ${i + 1}/${steps.length}`);
      await (0, _utils.blok)(0.1);
    }
    log('---------------------------------------------');
    log(`	Steps to solution  :`, solution.steps.length);
    log("	complexity in time :", solution.cTime);
    log("	complexity in size :", solution.cSize);
    log("	Time spent : ", t.s, "s,", t.m, "ms");
    log('---------------------------------------------');
  } else log("[ Sorry i cant solve this, take that s**t away from me, thanks! ]");
}
main();
//# sourceMappingURL=index.js.map