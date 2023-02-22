import { useState, useEffect } from "react";
import react from 'react'
import Grid from "./Grid"
const { log } = console

const PuzzleSteps = (props) => {

  const { validNumbers, numbers, mapSize, right, stepIndex } = props
  log("new")
  log(numbers)
  const col = `repeat(${mapSize}, 1fr)`;

  return (
    <div className="w-full max-w-screen-lg mx-auto flex">
      <div className="w-2/3">
        <div className="grid-Container2" style={{ display: 'grid', gridTemplateColumns: col }}>
          <Grid validNumbers={validNumbers} numbers={numbers} mapSize={mapSize} />
        </div>
      </div>
      <div className="w-1/3 bg-gray-100 flex items-center border-4 border-indigo-200 border-r-indigo-500 justify-center">
        <div className="flex flex-row w-full">
          <button type="submit" onClick={right} className="mx-5 py-2 w-full rounded bg-blue-400 text-white" >Left</button>
          <button className="mx-5 py-2 w-full rounded bg-red-400 text-white">Right</button>
        </div>
      </div>
    </div>
  )
}

export default PuzzleSteps