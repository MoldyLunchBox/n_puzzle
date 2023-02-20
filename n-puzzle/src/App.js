import React from "react";
import Grid from './components/Grid';
import './App.scss';

import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { solver } from './solver';
const { log } = console;

function App() {
  const [values, setValues] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [mapSize, setMapSize] = useState(3)
  useEffect(() => {
    const sizeMap = document.getElementById("mapSzie").value;
      const gridContainer = document.querySelector('.grid-Container');
  gridContainer.style.gridTemplateColumns = `repeat(${sizeMap}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${sizeMap}, 100px)`;
  });
const mapSizeChange = (event) => {
  const val = event.target.value;
  setMapSize(val);
  const gridContainer = document.querySelector('.grid-Container');
  gridContainer.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${val}, 100px)`;
};
  const onFinish = (values) => {
    values.preventDefault()
    log(values)
    const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    const numbers = inputs.map((input) => input.value);
    setValues(numbers)
    console.log(numbers);
  };
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
       
            <Grid numbers={values} mapSize={mapSize} />
          </div>
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center">
            <div className="h-full flex flex-col justify-center border-4 border-indigo-200 border-r-indigo-500">
              <div className="divide-y divide-slate-200 w-24 mx-5">
                <div> <DropDownMenu className="my-10" mapSizeChange={mapSizeChange} /></div>
                <div>  <button type="submit" className="my-5 py-2  w-full rounded bg-blue-500 text-white">Submit</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
