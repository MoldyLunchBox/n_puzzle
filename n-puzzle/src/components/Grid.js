import React from "react";
import '../App.css';
const { log } = console;

function Grid(props) {
  const { values, mapSize } = props;
  // const handleChange = (event) => {
  //   const valid_Numbers = new Set(validNumbers);
  //   if (!valid_Numbers.has(parseInt(event.target.value)))
  //     event.target.style.color = "red";
  //   else
  //     event.target.style.color = "black";
  // }
  log("length", values)
  log(values.length)
  log("mapsiz", mapSize)
  const gridItems = [];
  for (let i = 0; i < mapSize ; i++) {
    for (let j = 0; j < mapSize; j++) {
      gridItems.push(
        <div key={i * mapSize + j}  id={i * mapSize + j} dropzone="move" draggable="true" className="gridItem  h-full bg-gray-200 p-4 aspect-w-1 aspect-h-1">
          {/* <input  value={values[i][j]}className=" w-full h-full text-3xl" readOnly /> */}
          <input value={values.length === mapSize * mapSize ? values[i * mapSize + j]  : ""} className="w-full h-full text-3xl" readOnly />

        </div>
      );
    }
  }
//   return <>
//   {[...Array(mapSize)].map((_, i) => [...Array(mapSize)].map((_, j) => (<div key={i * mapSize + j}  id={i * mapSize + j} dropzone="move" draggable="true" className="gridItem  h-full bg-gray-200 p-4 aspect-w-1 aspect-h-1">
//         {/* <input  value={values[i][j]}className=" w-full h-full text-3xl" readOnly /> */}
//         <input value={values.length === mapSize * mapSize ? values[i * mapSize + j]  : ""} className="w-full h-full text-3xl" readOnly />

//       </div>)))}
// </>;
  return gridItems;

}
export default Grid;