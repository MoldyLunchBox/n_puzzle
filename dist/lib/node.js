"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Node {
  constructor(puzzle, greedy, uniform, goal, parent, heuristics) {
    this.puzzle = puzzle;
    this.treeLevel = 0;
    if (!greedy) {
      if (parent === undefined) this.treeLevel = 0;else this.treeLevel = parent.treeLevel + 1;
    }
    this.hash = this.toHash(this.puzzle);
    this.parent = parent && {
      parent: parent.parent,
      puzzle: parent.puzzle,
      score: parent.score
    };
    this.goal = goal;
    this.isFinal = this.checkIfFinal();
    this.childs = [];
    this.score = this.treeLevel + (uniform ? 0 : this.calculateScore(heuristics));
    this.genChilds(uniform, greedy, heuristics);
  }
  toHash(twoDarray) {
    return (twoDarray || this.puzzle).map(row => row.join(".")).join(".");
  }
  calculateScore(heuristics) {
    let score = 0;
    let ready_scores = this.heuristics_in_one_loop();
    const heuristicsFunctions = {
      manhattan: () => ready_scores.manhattan,
      linearConflicts: () => ready_scores.manhattan + 2 * this.heuristic_linear_conflicts(),
      hamming: () => ready_scores.hamming,
      euclidean: () => ready_scores.euclidean,
      diagonal: () => ready_scores.diagonal,
      gaschnig: () => this.heuristic_gaschnig()
    };
    heuristics.forEach(heuristic => {
      score += heuristicsFunctions[heuristic]();
    });
    return score;
  }
  heuristics_in_one_loop() {
    let manhattan = 0;
    let hamming = 0;
    let euclidean = 0;
    let diagonal = 0;
    const size = this.puzzle.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const currentTile = this.puzzle[i][j];
        const tileInGoal = this.findindexOf(this.goal, currentTile);
        const mirrorInGoal = this.goal[i][j];
        if (currentTile != "0") try {
          let d1 = Math.abs(i - tileInGoal.x);
          let d2 = Math.abs(j - tileInGoal.y);
          if (currentTile != mirrorInGoal) hamming += currentTile != mirrorInGoal ? 1 : 0;
          manhattan += d1 + d2;
          euclidean += Math.sqrt(d1 ** 2 + d2 ** 2);
          diagonal += Math.max(d1, d2);
        } catch (err) {
          throw err;
        }
      }
    }
    const tff = f => parseFloat(f.toFixed(4));
    euclidean = tff(euclidean);
    manhattan = tff(manhattan);
    return {
      manhattan,
      hamming,
      euclidean,
      diagonal
    };
  }
  heuristic_linear_conflicts() {
    let conflicts = 0;
    const size = this.puzzle.length;
    const values = size * size;
    for (let i = 1; i < values - 1; i++) {
      for (let j = 2; j < values; j++) {
        const currI = this.findindexOf(this.puzzle, i);
        const currJ = this.findindexOf(this.puzzle, j);
        const targI = this.findindexOf(this.goal, i);
        const targJ = this.findindexOf(this.goal, j);
        if (currI.x === currJ.x && targI.x === targJ.x) if (currI.y < currJ.y && targI.y > targJ.y || currI.y > currJ.y && targI.y < targJ.y) conflicts++;
        if (currI.y === currJ.y && targI.y === targJ.y) if (currI.x < currJ.x && targI.x > targJ.x || currI.x > currJ.x && targI.x < targJ.x) conflicts++;
      }
    }
    return conflicts;
  }
  heuristic_gaschnig() {
    let score = 0;
    const currentMap = JSON.parse(JSON.stringify(this.puzzle));
    const goal = JSON.parse(JSON.stringify(this.goal));
    const goalHash = this.toHash(goal);
    while (this.toHash(currentMap) != goalHash) {
      const cmz = this.findindexOf(currentMap, "0");
      if (goal[cmz.x][cmz.y] == "0") {
        for (let i = 0; i < this.puzzle.length; i++) for (let j = 0; j < this.puzzle.length; j++) if (currentMap[i][j] != goal[i][j]) {
          const tmp = currentMap[i][j];
          currentMap[i][j] = currentMap[cmz.x][cmz.y];
          currentMap[cmz.x][cmz.y] = tmp;
          break;
        }
      } else {
        const sv = goal[cmz.x][cmz.y];
        const ci = this.findindexOf(currentMap, sv);
        const tmp = currentMap[cmz.x][cmz.y];
        currentMap[cmz.x][cmz.y] = currentMap[ci.x][ci.y];
        currentMap[ci.x][ci.y] = tmp;
      }
      score++;
    }
    return score;
  }
  genChilds(u, g, heuristic) {
    const moves = {
      right: {
        x: 0,
        y: 1
      },
      up: {
        x: -1,
        y: 0
      },
      left: {
        x: 0,
        y: -1
      },
      down: {
        x: 1,
        y: 0
      }
    };
    const zeroIdx = this.findindexOf(this.puzzle, "0");
    for (const dir in moves) {
      const newPuzzle = this.moveTile(zeroIdx, moves[dir], JSON.parse(JSON.stringify(this.puzzle)));
      if (newPuzzle) {
        this.childs.push([newPuzzle, g, u, heuristic]);
      }
    }
  }
  findindexOf(arr2D, trgt) {
    const size = arr2D.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (arr2D[i][j] == trgt) return {
          x: i,
          y: j
        };
      }
    }
  }
  moveTile(tilePos, direction, array2D) {
    const array2DSize = array2D.length;
    if (direction.x + tilePos.x >= array2DSize || direction.x + tilePos.x < 0 || direction.y + tilePos.y >= array2DSize || direction.y + tilePos.y < 0) return null;
    const tmp = array2D[tilePos.x + direction.x][tilePos.y + direction.y];
    array2D[tilePos.x + direction.x][tilePos.y + direction.y] = array2D[tilePos.x][tilePos.y];
    array2D[tilePos.x][tilePos.y] = tmp;
    return array2D;
  }
  wakeUpChilds() {
    this.childs = this.childs.map(l => new Node(l[0], l[1], l[2], this.goal, this, l[3]));
  }
  checkIfFinal() {
    return this.hash == this.toHash(this.goal);
  }
}
exports.default = Node;
//# sourceMappingURL=node.js.map