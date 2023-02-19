import React from "react";
import '../App.css';
const { log } = console;
function Grid(props) {
  const { numbers, mapSize } = props;
  console.log("this is map size:", mapSize);

  const gridItems = [];
  for (let i = 0; i < mapSize * mapSize; i++) {
    gridItems.push(
      <div key={i} className="bg-gray-200 p-4 w-12 h-12">
        <input type="number" min="1" max="9" className="w-8 h-8" />
      </div>
    );
  }

  return <div className={`grid grid-cols-${mapSize} grid-rows-${mapSize} gap-4`}>{gridItems}</div>;
}

export default Grid;