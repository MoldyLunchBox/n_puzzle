const { log } = console;

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(elem) {
        let contain = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].score > elem.score) {
                this.items.splice(i, 0, elem);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(elem);
        }
        // this.items.push(elem)
        // this.items.sort((a,b) => a.score - b.score)
         
    }

    dequeue() {
        return this.isEmpty() ? undefined : this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
} 

function blok(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, s * 1000)
    })
}

function print_map(map, score) {

    let line = ""
    log("================")
    let size = map.length
  
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j] == '0')
            map[i][j] = '_'
        line += " " + map[i][j] + " ".repeat(((size * size).toString().length - map[i][j].length)) + ' '
        if (score != undefined && i == map.length - 1 && j == map.length - 1)
          line += "\x1b[33m  score: " + score + "\x1b[0m"
      }
      log(line)
      line = ''
    }
    log("================")
  }
export default class Solver {
    constructor(firstElement) {
        this.visited = new Set()
        this.queue = new PriorityQueue()
        this.queue.enqueue(firstElement)
 
    }
    async buildScenario(solution) {
        let steps = []
        
        while(solution)  {
            steps.push([solution.puzzle, solution.score])
            solution = solution.parent
        }
        steps = steps.reverse()
        for (let i = 0 ; i < steps.length; i++) {
            console.clear()
            print_map(steps[i][0], steps[i][1])
            await blok(0.05)
        }
        log(steps.length)
    }ß
    async start() {
        let count = 0
        let solutionFound = false
        while (!solutionFound && !this.queue.isEmpty()) {
            const currentPuzzle = this.queue.dequeue();
            currentPuzzle.wakeUpChilds()
            this.visited.add(currentPuzzle.hash)
             
            for (let i = 0; i < currentPuzzle.childs.length; i++) {
                const child = currentPuzzle.childs[i];
                if (child.isFinal) {
                    
                    log("solution found")
                    solutionFound = true
                    this.buildScenario(child)
                 
                    break
                }
              
                if(!this.visited.has(child.hash))
                {
                    this.queue.enqueue(child)
                    this.visited.add(child.hash)
                }
            }
            count++
        }
    }    
}