
var {size, openSet, closedSet,} = require('./globalVars');
const { log } = console;


function copyObj(ubj) {
    return JSON.parse(JSON.stringify(ubj))
}

function getCoordInMap(map, target) {
   
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
           
            if (map[i][j] === target)
                return { x: j, y: i }
        }
    }
    return false
}

function print_map(map) {
    log("================")
    for (let i = 0; i < map.length; i++) {
        log("   ", map[i].join(" "))
    }
    log("================")
}

function state_to_arr(stateSet) {
    ret = []
    for (let [key, value] of openSet.entries()) {
        ret.push(value)
    }
    return ret
}

function strToArr(mapStr, size){
    mapArr = []
    log(size)
    for (let i = 0; i < size*2; i++){
        for (let j = 0; j < size*2;j++){
            log(mapStr[i * size + j])
        }
    }
}

/**
 * 
 * @param {array 2d} stateMap 
 * @param {obj {x:number,y:number}} zeroIdx 
 * @param {obj {x:number,y:number}} move 
 * @returns new 2d array where zeroIdx is move to "move" coordinat
 */
 function swapWithZero(stateMap, zeroIdx, move) {
    const stateMapCopy = copyObj(stateMap)
    const tmp = stateMapCopy[move.i][move.x]

    stateMapCopy[move.i][move.x] = '0'
    stateMapCopy[zeroIdx.i][zeroIdx.x] = tmp

    return stateMapCopy
}

module.exports = {
    copyObj,
    getCoordInMap,
    print_map,
    swapWithZero,
    state_to_arr,
    strToArr,
  };