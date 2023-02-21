import React from "react";
import '../App.css';
const { log } = console;
function Grid(props) {
  const { numbers, mapSize, validNumbers} = props;
const handleChange =  (event) =>{
  const valid_Numbers = new Set(validNumbers);
  if (!valid_Numbers.has(parseInt(event.target.value)))
  event.target.style.color = "red";
  else 
  event.target.style.color = "black";
  log(numbers)
}
  const gridItems = [];
  for (let i = 0; i < mapSize * mapSize; i++) {
    gridItems.push(
      <div key={i} className="h-full bg-gray-200 p-4 aspect-w-1 aspect-h-1">
        <input onChange={handleChange} type="number" min="1" max={mapSize * mapSize} className="w-full h-full text-3xl" />
      </div>
    );
  }

return gridItems;

}
export default Grid;