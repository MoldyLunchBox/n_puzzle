import React from "react";
import Grid from './components/Grid';
import './App.scss';

import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { solver } from './solver';
import PuzzleSteps from "./components/PuzzleSteps";
const { log } = console;

function App() {
  // map values
  const [values, setValues] = useState([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
  // the valid map values generated acording to map size
  const [validNumbers, setValidNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  // submit state, to indicate whether the submit button was pressed and it's succesful or not
  const [formSubmited, setFormSubmited] = useState(false);
  const [mapSize, setMapSize] = useState(3)
  // solution steps
  const [steps, setSteps] = useState()
  const [stepIndex, setStepIndex] = useState(0)

  // setting grid size to 3/3 on load
  useEffect(() => {
    const sizeMap = document.getElementById("mapSzie").value;
    const gridContainer = document.querySelector('.grid-Container');
    gridContainer.style.gridTemplateColumns = `repeat(${sizeMap}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeMap}, 100px)`;
  });

  // handling grid size when map size has changed 
  const mapSizeChange = (event) => {
    const val = event.target.value;
    setMapSize(val); 
   
      log('yo')
      setValues(splitArrayIntoChunks([0, 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15], 4))

    const gridContainer = document.querySelector('.grid-Container');
    gridContainer.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${val}, 100px)`;
  };

  // split an array into an array of arrays
  function splitArrayIntoChunks(arr, chunkSize) {
    const output = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      output.push(arr.slice(i, i + chunkSize));
    }
    return output;
  }
  // handling submit by saving the input numbers to an array of numbers
  const onFinish  = async (values) => {
    values.preventDefault()
    const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    const numbers = inputs.map((input) => input.value);
    setValues(splitArrayIntoChunks(numbers, mapSize))
    setSteps( await solver())
    log(steps)
    setFormSubmited(true)
  };
  const right = () =>{
    setStepIndex(stepIndex + 1)
  }
  return (

    <div className="App">
      <div className="flex mb-4">
        <div className="w-1/3 bg-gray-400 h-12"></div>
        <h1 className="w-1/3 bg-gray-500 h-12 text-3xl text-white font-bold"> N puzzle </h1>
        <div className="w-1/3 bg-gray-400 h-12"></div>
      </div>
      <form onSubmit={onFinish}>
        <div className="w-full max-w-screen-lg mx-auto flex">
          <div className="w-2/3">
            <div className="grid-Container">

              <Grid validNumbers={validNumbers} numbers={values} mapSize={mapSize} />
            </div>
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center">
            <div className="h-full flex flex-col justify-center border-4 border-indigo-200 border-r-indigo-500">
              <div className=" w-24 mx-5">
                  <DropDownMenu className="my-5 py-2" mapSizeChange={mapSizeChange} />
                  <button type="submit" className="my-5 py-2  w-full rounded bg-blue-400 text-white">Submit</button>
                  <button  className="my-5 py-2  w-full rounded bg-red-400 text-white">Clear</button>
               
              </div>


            </div>
          </div>
        </div>
      </form>
      <div className="flex my-4">
        <div className="w-1/3 bg-gray-400 h-12"></div>
        <h1 className="w-1/3 bg-gray-500 h-12 text-3xl text-white font-bold h-auto"> Solution steps </h1>
        <div className="w-1/3 bg-gray-400 h-12"></div>
      </div>
      {formSubmited && (
        <PuzzleSteps validNumbers={validNumbers} numbers={steps[stepIndex]} mapSize={mapSize} step={steps} 
        stepIndex={stepIndex} right={right} />
      )}
    </div>
  );
}

export default App;
