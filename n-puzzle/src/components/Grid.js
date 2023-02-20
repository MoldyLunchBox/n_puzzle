import React from "react";
import '../App.css';
const { log } = console;
function Grid(props) {
  const { numbers, mapSize } = props;
  console.log("this is map size:", mapSize);

  const gridItems = [];
  for (let i = 0; i < mapSize * mapSize; i++) {
    gridItems.push(
      <div key={i} className="h-full bg-gray-200 p-4 aspect-w-1 aspect-h-1">
        <input type="number" min="1" max="9" className="w-full h-full text-3xl" />
      </div>
    );
  }

return gridItems;

}
export default Grid;