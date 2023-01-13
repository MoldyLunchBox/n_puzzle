
const { copyObj, getCoordInMap, print_map, swapWithZero, strToArr } = require('./utils');
const { heuristic_manhattan, generateGoal } = require('./algo');
const { exit } = require('process');

const { log } = console;

class State {
    constructor(stateMap, parent) {
        this.stateMap = stateMap;
        this.parent = parent
        this.level = (parent?.level || -1) + 1
        this.hash = [].concat.apply([], this.stateMap).join(".");
        this.score = this.calculateScore()  + this.level
    }
    // parseInt
    calculateScore() {
        let goal = strToArr(generateGoal(this.stateMap.length, ""), this.stateMap.length)
        let score = 0
        for (let i = 0; i < goal.length; i++) {
        
            for (let j = 0; j < goal.length; j++) {
         
                
                const targetCord = getCoordInMap(this.stateMap, goal[i][j])
                // log(goal[i][j],{'x':j, 'y':i}, targetCord)
                score += heuristic_manhattan(
                    {'x':j, 'y':i}, 
                    {
                        'x':targetCord.x, 
                        'y':targetCord.y
                    })
           
            }

        }
       
        return this.level + score
    }
    generateSubStates() {
        let zeroIdx = 0
        let possibleStates = []
        let size = stateMap[0].length
        for (let i = 0; i < size; i++) {
            for (let x = 0; x < size; x++) {
                if (this.stateMap[i][x] == '0') {
                    zeroIdx = { i, x }
                    if (this.stateMap[i - 1]?.[x]) { possibleStates.push(swapWithZero(this.stateMap, zeroIdx, { 'i': i - 1, 'x': x })) }
                    if (this.stateMap[i + 1]?.[x]) { possibleStates.push(swapWithZero(this.stateMap, zeroIdx, { 'i': i + 1, 'x': x })) }
                    if (this.stateMap[i]?.[x + 1]) { possibleStates.push(swapWithZero(this.stateMap, zeroIdx, { 'i': i, 'x': x + 1 })) }
                    if (this.stateMap[i]?.[x - 1]) { possibleStates.push(swapWithZero(this.stateMap, zeroIdx, { 'i': i, 'x': x - 1 })) }
                    break
                }
            }
        }
        return possibleStates.map(pzl => new State(pzl, this))
    }
    print(pzl = this.stateMap) {
        log(' . . . . . . . . .')
        for (let i = 0; i < size; i++) {
            log(`: ${pzl[i].join(" ")} :`)
        }
    }
}


module.exports = {
    State,
  };