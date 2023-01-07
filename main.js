const fs = require('fs');
const { exit, mainModule } = require('process');
const readline = require('readline');

const { log } = console;
function copyObj(ubj) {
    return JSON.parse(JSON.stringify(ubj))
}
let size = 0
let openSet = new Map()
let closedSet = new Map()
class State {
    constructor(stateMap, parent) {
        this.stateMap = stateMap;
        this.parent = parent
        this.level = (parent?.level || -1) + 1
        this.score = this.calculateScore()
        this.hash = [].concat.apply([], this.stateMap).join(".");
    }
    calculateScore() {
        
        return this.level + 0
    }
    generateSubStates() {
        let zeroIdx = 0
        let possibleStates = []

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


function swapWithZero(stateMap, zeroIdx, move) {
    const stateMapCopy = copyObj(stateMap)
    const tmp = stateMapCopy[move.i][move.x]

    stateMapCopy[move.i][move.x] = '0'
    stateMapCopy[zeroIdx.i][zeroIdx.x] = tmp

    return stateMapCopy
}

function stateToStr(stateMap) {
    return [].concat.apply([], stateMap).join(".");
}


function puzzle_verifier(arr) {
    i = 0;
    j = 0
    while (arr[i]) {
        while (arr[i][j]) {
            if ((arr[i][j] < '0' || arr[i][j] > '9'))
                return -1
            j++;
        }
        j = 0;
        i++;
    }

    return 0;
}
async function processLineByLine() {
    const fileStream = fs.createReadStream('input');
    i = 0
    line_length = 0;
    arr = []
    stateMap = []
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        if (i != 0 && !(line.startsWith('#')) && line.length > 2) {
            string = line.replace(/\s\s+/g, ' ').trim();
            if (!(arr.length)) {
                arr = string.split(' ');
                line_length = arr.length
            }
            else
                arr = string.split(' ');
            if (line_length == arr.length && !puzzle_verifier(arr)) {
                console.log(`Line ${i}: is good and has length of ${arr.length}`);
            }
            else {
                console.log("the file is not correct")
                break;
            }
        }
        if (arr.length)
            stateMap.push(arr)
        i++;
    }
    return (stateMap);
}


async function main() {
    console.clear()
    var stateMap = await processLineByLine();
    size = stateMap[0].length
    console.log(stateMap)
    log(`Size of puzzle : ${size}`)
    log(`State in string : ${stateToStr(stateMap)}`)

    const state = new State(stateMap, null)
    openSet.set(state.hash ,state)
   
    log("Start", openSet.size)
    let solution = null
    while (openSet.size) {
        let subStates = []
    
        for (let [key, value] of  openSet.entries()) {
         
            if (value.hash == '0.1.2.3.4.5.6.7.8')
            {
                solution = value
                break
            }
        
            subStates.push(...value.generateSubStates())
            openSet.delete(key)
            closedSet.set(key, value)
        }
      
        if (solution)
            break
          
  
        subStates.map(pzlState => {
            if (!openSet.get(pzlState.hash))
                openSet.set(pzlState.hash , pzlState)
             
        })


        // sort openset
        
    }
    log("end")
    log(openSet.size)
    log(closedSet.size)

    let steps = 0
    log(solution.hash)
    while (solution.parent) {
        log(solution.parent.hash)
        solution = solution.parent
        steps++
    }
    log(steps)
}
main();