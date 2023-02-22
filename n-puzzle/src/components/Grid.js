import React from "react";
import '../App.css';
const { log } = console;
function Grid(props) {
  const { numbers, mapSize, validNumbers } = props;
  const handleChange = (event) => {
    const valid_Numbers = new Set(validNumbers);
    if (!valid_Numbers.has(parseInt(event.target.value)))
      event.target.style.color = "red";
    else
      event.target.style.color = "black";
  }
  log("grid")
  log(numbers[0])
  const gridItems = [];
  for (let i = 0; i < mapSize ; i++) {
    for (let j = 0; j < mapSize; j++) {
      gridItems.push(
        <div key={i * mapSize + j} className="h-full bg-gray-200 p-4 aspect-w-1 aspect-h-1">
          <input onChange={handleChange} value={numbers[0][i][j]} type="number" min="0" max={mapSize * mapSize} className="w-full h-full text-3xl" />
        </div>
      );
    }
  }

  return gridItems;

}
export default Grid;