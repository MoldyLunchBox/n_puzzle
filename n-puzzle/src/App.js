import React from "react";
import Grid from './components/Grid';
import Header from './components/Header';
import EditMap from './components/EditMap';
import Puzzle from './components/Puzzle';

import './App.scss';

import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { solver } from './solver';
import PuzzleSteps from "./components/PuzzleSteps";
import { onSubmit, mapSizeChange } from "./tools/handlers";
const { log } = console;

function App() {
  // map values
  const [values, setValues] = useState([[4, 1, 2], [3, 7, 5], [6, 0, 8]]);
  // submit state, to indicate whether the submit button was pressed and it's succesful or not
  const [formSubmited, setFormSubmited] = useState(false);
  const [mapSize, setMapSize] = useState(3)

  useEffect(() => {
    let indexOfZero = 0;
    const gridContainer = document.querySelector('.grid-Container');
    gridContainer.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${mapSize}, 100px)`;
  })

  return (

    <div className="App">
      <Header  title="N puzzle" />
      <Puzzle mapSizeChange={(event) => mapSizeChange(event, setMapSize, setValues)} onSubmit={(event) => onSubmit(event, mapSize, setValues)}  values={values} mapSize={mapSize}/>
    </div>
  );
}

export default App;
