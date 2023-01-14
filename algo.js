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

function getInvCount(arr)
{
    let inv_count = 0 ;
    for(let i=0;i<2;i++){
        for(let j=i+1;j<3;j++){
         
            // Value 0 is used for empty space
            if (arr[j][i] > 0 && arr[j][i] > arr[i][j])
                inv_count += 1;
        }
     }
    return inv_count;
}
// This function returns true
// if given 8 puzzle is solvable.
function isSolvable(puzzle)
{
    // Count inversions in given 8 puzzle
    eh = puzzle.map((e)=> e.map((el)=> parseInt(el)))
    let invCount = getInvCount(eh);
    // return true if inversion count is even.
    return (invCount % 2 == 0);
}
 

module.exports = {
    generateGoal,
    heuristic_manhattan,
    isSolvable,
  };