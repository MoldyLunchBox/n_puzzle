import { useState, useEffect } from "react";
import react from 'react'
import Grid from "./Grid"
const {log} = console

const PuzzleSteps = (props) =>{

    const {validNumbers, numbers, mapSize} = props
    log("new")
    log(mapSize)
    const col = `grid-template-columns: repeat(${mapSize}, 1fr)`;
    log(col)
    return(
        <div className="w-full max-w-screen-lg mx-auto flex">
          <div className="w-2/3">
            <div className="grid-Container2" style={`grid-template-columns: repeat(${mapSize}, 1fr)`}>

              <Grid validNumbers={validNumbers} numbers={numbers} mapSize={mapSize} />
            </div>
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center">
            <div className="h-full flex flex-col justify-center border-4 border-indigo-200 border-r-indigo-500">
              <div className=" w-24 mx-5">
                  <button type="submit" className="my-5 py-2  w-full rounded bg-blue-400 text-white">Submit</button>
                  <button  className="my-5 py-2  w-full rounded bg-red-400 text-white">Clear</button>
               
              </div>


            </div>
          </div>
        </div>
    )
}

export default PuzzleSteps