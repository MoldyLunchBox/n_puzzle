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

// function getInvCount(arr)
// {
//     let inv_count = 0 ;
//     for(let i=0;i<2;i++){
//         for(let j=i+1;j<3;j++){
         
//             // Value 0 is used for empty space
//             if (arr[j][i] > 0 && arr[j][i] > arr[i][j])
//                 inv_count += 1;
//         }
//      }
//     return inv_count;
// }
// // This function returns true
// // if given 8 puzzle is solvable.
// function isSolvable(puzzle)
// {
//     // Count inversions in given 8 puzzle
//     eh = puzzle.map((e)=> e.map((el)=> parseInt(el)))
//     let invCount = getInvCount(eh);
//     // return true if inversion count is even.
//     return (invCount % 2 == 0);
// }
 


// function get_taxicab_distance(puzzle, goal, size):
//     pi = puzzle.index(0)
//     p1, p2 = pi // size, pi % size
//     qi = goal.index(0)
//     q1, q2 = qi // size, qi % size
//     return abs(p1 - q1) + abs(p2 - q2)


// function count_inversions(puzzle, goal, size){
//     res = 0
//     for i in range(size * size - 1):
//         for j in range(i + 1, size * size):
//             vi = puzzle[i]
//             vj = puzzle[j]
//             if goal.index(vi) > goal.index(vj):
//                 res += 1
//     return res
// }

// function is_solvable(puzzle, goal, size){
//     let taxicab_distance = get_taxicab_distance(puzzle, goal, size)
//     let num_inversions = count_inversions(puzzle, goal, size)
//     return taxicab_distance % 2 == num_inversions % 2
// }

function isSolvable(initial, goal, size = 3) {
    // Helper function to count inversions in a given state
    let initialInt = initial.map((e)=> e.map((el)=> parseInt(el)))
    let goalInt = goal.map((e)=> e.map((el)=> parseInt(el)))
    function countInversions(state, size) {
      let inversions = 0;
      for (let i = 0; i < size * size; i++) {
        for (let j = i + 1; j < size * size; j++) {
          if (state[i] && state[j] && state[i] > state[j]) {
            inversions++;
          }
        }
      }
      return inversions;
    }
    // Count inversions in initial and goal states
    let initialInversions = countInversions(initialInt, size);
    let goalInversions = countInversions(goalInt, size);
    // Check if the puzzle is solvable by comparing inversions
    if ((initialInversions % 2 === 0) === (goalInversions % 2 === 0)) {
      return true;
    } else {
      return false;
    }
  }


module.exports = {
    generateGoal,
    heuristic_manhattan,
    isSolvable,
};