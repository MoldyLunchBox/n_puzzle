import { parsePuzzle, readFile } from "./utils";
import Node from "./node"
import Solver from "./Solver";
const { log } = console;

function covertTo2dArr(arr, size) {
	let result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
}



function goalGen(size, type) {
	let proto = new Array(size * size).fill(0)
	let row = 0
	let col = 0
	let rowInc = -1
	let colInc = 1
	let inc = 1
	while (inc < size * size) {
		rowInc *= -1
		log(" col:", col, "colInc:", colInc, "row:", row, "rowInc:", rowInc)
		while ((colInc == 1 && col < size && !proto[row * size + col]) || (colInc == -1 && col >= 0 && !proto[row * size + col])) {
			proto[row * size + col] = inc
			col += colInc
			inc++
		}
		if (colInc == 1) {
			col -= 1
			row++
		}
		else {
			col += 1
			row--
		}
		while ((rowInc == 1 && row < size && !proto[row * size + col]) || (rowInc == -1 && row >= 0 && !proto[row * size + col])) {
			proto[row * size + col] = inc
			row += rowInc
			inc++
		}
		if (colInc == 1)
			col--
		else
			col++
		if (rowInc == 1)
			row--
		else
			row++
		colInc *= -1
	}
	return (covertTo2dArr(proto.join().split(','), size))
}

async function main() {
	const inputFileTxt = await readFile("./src/input");

	const puzzle = parsePuzzle(inputFileTxt);
	log(puzzle)
	//const goal2 = [['1', '2', '3', '4'], ['12', '13', '14', '5'], ['11','0', '15', '6'], ['10', '9', '8', '7']]
	//goal generator
	const goal = goalGen(4)
	const init = new Node(puzzle, false, false, goal, undefined, 'manhattan')
	// init.wakeUpChilds()
	const solver = new Solver(init)
	solver.start()

}
main();
