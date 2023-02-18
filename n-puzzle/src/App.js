import logo from './logo.svg';
import './App.css';
import {Row, Col, InputNumber, Form, Button} from  "antd";
import {useState} from "react";
import { solver } from './solver';
const { log } = console;


function App() {
  const [values, setValues] = useState([]);
   const onFinish = (values: any) => {
    values.preventDefault()
    log(values.target[2].value)
  };
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <form onSubmit={onFinish}>
        <div className="w-full max-w-screen-lg mx-auto flex">
          <div className="w-2/3">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input id="1" type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
              <div className="bg-gray-200 p-4 aspect-w-1 aspect-h-1">
                <input type="number" min="1" max="9" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-gray-100 flex items-center justify-center">
            <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
