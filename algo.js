function heuristic_manhattan(position0, position1) {
    let d1 = Math.abs(position1.x - position0.x);
    let d2 = Math.abs(position1.y - position0.y);

    return d1 + d2;
}

function generateGoal(mapSize, goalType){
    goal = ""
    for (let i = 0; i < mapSize; i++){
        for (let j = 0; j < mapSize; j++){
            if (i != mapSize - 1 ||  j != mapSize - 1){

                goal += i * mapSize + j + 1
                goal += '.'
            }
            else 
                goal += '0'
        }
    }
    return goal
}

module.exports = {
    generateGoal,
    heuristic_manhattan,
  };