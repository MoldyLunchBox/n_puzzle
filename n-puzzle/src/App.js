import React from "react";
import Grid from './components/Grid';

import logo from './logo.svg';
import './App.css';
import {Row, Col, InputNumber, Form, Button} from  "antd";
import {useState} from "react";
import { solver } from './solver';
const { log } = console;

function App() {
  const [values, setValues] = useState([0,1,2,3,4,5,6,7,8]);
   const onFinish = (values: any) => {
    values.preventDefault()
    const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    const numbers = inputs.map((input) => input.value);
    console.log(numbers);
    setValues(numbers)
  };
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <form onSubmit={onFinish}>
        <div className="w-full max-w-screen-lg mx-auto flex">
          <div className="w-2/3">
            <Grid numbers={values} />
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center">
            <div className="h-full border-r border-black m-2 mt-2 pr-2 flex flex-col justify-center">
            <button type="submit" className="px-4 mx-5 px-5 py-2 rounded bg-blue-500 text-white">Submit</button>
              
              <button type="submit" className="px-4  mx-5 px-5  py-2 rounded bg-blue-500 text-white">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
