import React from "react";
import logo from '../logo.svg';
import '../App.css';
import {useState} from "react";
import { solver } from '../solver';
const { log } = console;

function Grid(props) {
    const {numbers} = props 
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
         {numbers.map(e=>{
            return(
                    <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                        <input  type="number" min="1" max="9" className="w-full h-full" />
                    </div>
            )
        })}
     
    </div>

  );
}

export default Grid;