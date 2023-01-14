
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

function print_map(map, score) {
    line = ""
    log("================")
    let size = map.length
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++){

            line += map[i][j] + " ".repeat(((size * size).toString().length -  map[i][j].length)) + ' '
            if (score != undefined && i == map.length -1 && j == map.length -1) 
                line += "\x1b[33m  score: " + score + "\x1b[0m"
        }
        log(line)
        line = ''
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
    map =  mapStr.split('.')
    mapArr = [[],[],[]]
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            if (map[i * size + j])
                mapArr[i].push(map[i * size + j])
            }
        }
    return (mapArr)
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