const fs = require('fs');
const { exit, mainModule } = require('process');
const readline = require('readline');
const { State } = require('./classes');
const { print_map, state_to_arr, strToArr } = require('./utils');
const { generateGoal, isSolvable } = require('./algo');
var { size, openSet, closedSet, } = require('./globalVars');
const { kMaxLength } = require('buffer');
const { log } = console;

/**
 * 
 * @param {map as array of arrays} stateMap 
 * @returns  a string in which each element is seperated by a dot
 */
function stateToStr(stateMap) {
    return [].concat.apply([], stateMap).join(".");
}

/**
 * 
 * @param {map array} arr 
 * @returns -1 if the values in the map are not digits 
 */
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



function blok(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, s * 1000)
    })
}



async function main() {
    console.clear()
    var stateMap = await processLineByLine();
    log (stateMap)
    size = stateMap[0].length
    print_map(stateMap)

    log(`Size of puzzle : ${size}`)
    log(`State in string : ${stateToStr(stateMap)}`)

    const state = new State(stateMap, null, 'missPlaced', false, false)
    openSet.set(state.hash, state)
    log("Start", openSet.size)
    let solution = null
    let closedArr = []
    array = state_to_arr(openSet)
    let goal = generateGoal(array[0].stateMap.length, "ok")
    log(goal)
    let goalArr = strToArr(goal, 3)
    while (array.length) {

        
        log("curr state", array[0].level)
        print_map(array[0].stateMap)
      
        
        // if (array[0].hash == "8.1.3.0.2.4.7.6.5"){
        //     log("-----------array-------------")
        //     array.map((e)=> print_map(e.stateMap, e.score))
        //     log("-----------------------------")
        // }
        let subStates = []
        if (array[0].hash == goal) {
            log("end")
            solution = array[0]
            break
        }
        // break
        subStates = array[0].generateSubStates()
        if (subStates.find(l => l.hash === goal)) {
            log("end")
            solution = subStates.find(l => l.hash === goal)
            break
        }


        closedArr = [...new Set([...closedArr, array[0].hash])]
        array = [
            ...array,
            ...subStates.filter(l => !closedArr.includes(l) && !array.find(el => el.hash == l.hash))
        ]
        array.shift()
        array = array.filter(l => !closedArr.includes(l.hash))

        // just to make sure no closed states are in the open states
        closedArr.forEach(el => {
            let elementPos = array.map(function(x) {return x.hash; }).indexOf(el);
            let objectFound = array[elementPos];
            if (elementPos != -1){
                log(el," closed state was found in open states at index ", elementPos, " hash:", objectFound.hash)
                exit()
            }
        })

        array.sort((a, b) => a.score - b.score)
        // console.clear()
        log("Open Array ", array.length)
        log("Closed Array ", closedArr.length)
        log("***************** children ******************")
        //subStates.filter(l => !closedArr.includes(l) && !array.find(el => el.hash == l.hash)).forEach(el => print_map(el.stateMap))
        subStates.map((e)=> print_map(e.stateMap, e.score))
        log("****************** end ******************\n\n\n")
        



    }
    let steps = 0
    if (!solution){
        log("nop solution was found when in fact there should have been one\n PROBLEM!!!")
        exit()
    }
    while (solution) {    
        print_map(solution.stateMap)
        await blok(1)
        solution = solution.parent
        steps++
    }
    log(steps)
}
main();
