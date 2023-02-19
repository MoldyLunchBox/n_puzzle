import React from "react";
import Grid from './components/Grid';
import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState } from "react";
import { solver } from './solver';
const { log } = console;

function App() {
  const [values, setValues] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [mapSize, setMapSize] = useState(3)
  const mapSizeChange = (mapSize1) =>{
    const val = mapSize1.target.value
    setMapSize(val)
  

  }
  const onFinish = (values) =>{
    values.preventDefault()
    log(values)
    const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    const numbers = inputs.map((input) => input.value);
    setValues(numbers)
    console.log(numbers);
  };
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>

      <form onSubmit={onFinish}>
        <div className="w-full max-w-screen-lg mx-auto flex">
          <div className="w-2/3">
            <Grid numbers={values}  mapSize={mapSize} />
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center">
            <div className="h-full flex flex-col justify-center border-4 border-indigo-200 border-r-indigo-500">
              <div className="divide-y divide-slate-200 ...">
             <div> <DropDownMenu mapSizeChange={mapSizeChange} /></div>
                <div>              <button type="submit" className="px-4  my-5 mx-5 px-5  py-2 rounded bg-blue-500 text-white">Submit</button>
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
