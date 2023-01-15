
const { copyObj, getCoordInMap, print_map, swapWithZero, strToArr } = require('./utils');
const { heuristic_manhattan, generateGoal, isSolvable } = require('./algo');
const { exit } = require('process');

const { log } = console;

class State {
    constructor(stateMap, parent, heuristicName, greedy = false, uniform = false) {
       
        this.stateMap = stateMap;
        this.parent = parent
        this.heuristicToUse = heuristicName
        this.level = (parent == undefined ?  -1 : parent.level) + 1
        this.hash = [].concat.apply([], this.stateMap).join(".");
        this.score = (uniform ? 0 : this.calculateScore())  
    
 
    }
    // parseInt
    calculateScore() {
       
        this.heuristic(this.heuristicToUse)
        return this.heuristic(this.heuristicToUse)
    }
    heuristic(heur) {
       
        const goal = generateGoal(this.stateMap.length, "").split(".")
        const manhattan = () => {
            let score = 0
            for (let i = 0; i < this.stateMap.length; i++) {

                for (let j = 0; j < this.stateMap.length; j++) {

                    const goalNumber = goal[i * this.stateMap.length + j]

                    const targetCord = getCoordInMap(this.stateMap, goalNumber)
                    const position0 = { 'x': j, 'y': i }
                    const position1 = {
                        'x': targetCord.x,
                        'y': targetCord.y
                    }
                    const d1 = Math.abs(position1.x - position0.x);
                    const d2 = Math.abs(position1.y - position0.y);

                    score += d1 + d2;

                }
            }
            return score
        }

        const missPlaced = () =>  {
            let counter = 0
            for (let i = 0; i < this.stateMap.length; i++) {
                for (let j = 0; j < this.stateMap.length; j++) {
                    const goalNumber = goal[i * this.stateMap.length + j]
                    if (goalNumber !== this.stateMap[i][j])
                        counter++
                }
            }

            return counter
        }
        const heurs = {
            'manhattan': manhattan,
            'missPlaced' : missPlaced
        }
        return heurs[heur]()
    }    
    generateSubStates() {
        let zeroIdx = 0
        let possibleStates = []
        let size = stateMap[0].length
        goal = strToArr(goal, size )
        for (let i = 0; i < size; i++) {
            for (let x = 0; x < size; x++) {
                if (this.stateMap[i][x] == '0') {
                    zeroIdx = { i, x }
                    if (this.stateMap[i - 1]?.[x]) {
                        log(swapWithZero(this.stateMap, zeroIdx, { 'i': i - 1, 'x': x }))
                        let  puz = swapWithZero(this.stateMap, zeroIdx, { 'i': i - 1, 'x': x })
                        let good = isSolvable(puz, goal, puz.length)
                        log("it's " , good)
                        if (good)
                            possibleStates.push(puz) 
                        
                    }
                    if (this.stateMap[i + 1]?.[x]) {
                        let puz = swapWithZero(this.stateMap, zeroIdx, { 'i': i + 1, 'x': x })
                        let good = isSolvable(puz, goal, puz.length)
                        log("it's " , good)
                        if (good)
                            possibleStates.push(puz) 
                        
                    }
                    if (this.stateMap[i]?.[x + 1]) {
                        let puz = swapWithZero(this.stateMap, zeroIdx, { 'i': i, 'x': x + 1 })
                        let good = isSolvable(puz, goal, puz.length)
                        log("it's " , good)
                        if (good)
                            possibleStates.push(puz) 
                        
                    }
                    if (this.stateMap[i]?.[x - 1]) {
                        let puz = swapWithZero(this.stateMap, zeroIdx, { 'i': i, 'x': x - 1 })
                        let good = isSolvable(puz, goal, puz.length)
                        log("it's " , good)
                        if (good)
                            possibleStates.push(puz) 
                        
                    }
                    break
                }
            }
        }
    
        const subs = possibleStates.map(pzl => new State(pzl, this, this.heuristicToUse))
       log (subs.length)
       log("\n\n\n\n\n\n")
        return subs
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