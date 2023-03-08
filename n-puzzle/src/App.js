import React from "react";
import Grid from './components/Grid';
import Header from './components/Header';
import EditMap from './components/EditMap';
import Puzzle from './components/Puzzle';
import findIndex from "./tools/lib"
import './App.scss';

import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { solver } from './solver';
import PuzzleSteps from "./components/PuzzleSteps";
import { onSubmit, mapSizeChange,  } from "./tools/handlers";
import { dragStart, attachDragEvents} from "./tools/dragEventHandlers";
const { log } = console;

function App() {
  // map values
  const [values, setValues] = useState([4, 1, 2, 3, 5, 0, 6, 7, 8]);
  const [lauding, setLauding] = useState(true);

  // submit state, to indicate whether the submit button was pressed and it's succesful or not
  const [formSubmited, setFormSubmited] = useState(false);
  const [mapSize, setMapSize] = useState(3)



  function dragEnd() {
    log(" drag end")
  }

  useEffect(() => {
    setLauding(false)

    let indexOfZero = 0;
    console.log('Values changed:', values);
    let gridContainer = document.querySelector('.grid-Container');
    gridContainer.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${mapSize}, 100px)`;

    let draggableElements = document.querySelectorAll('.gridItem');
    for (let i = 0; i < draggableElements.length; i++) {

      const element = draggableElements[i];

      element.classList.remove("empty")
      const inputElement = element.querySelector('input');
      if (inputElement.value == 0)
        indexOfZero = i
    }
    log("index of zero is:", indexOfZero)
    const draggableElement = document.querySelectorAll('.gridItem');


    // draggableElement[indexOfZero].addEventListener('dragend', dragEnd);
    // draggableElement[indexOfZero].addEventListener('dragstart', (e) => dragStart(e, values, setValues, mapSize, draggableElement));

    if (indexOfZero > 0 && parseInt(indexOfZero / mapSize) == parseInt((indexOfZero - 1) / mapSize))
      attachDragEvents(draggableElement[indexOfZero - 1], values, setValues, mapSize, draggableElement)
    if (indexOfZero + 1 < mapSize * mapSize && parseInt(indexOfZero / mapSize) == parseInt((indexOfZero + 1) / mapSize))
      attachDragEvents(draggableElement[indexOfZero + 1], values, setValues, mapSize, draggableElement)
    if (indexOfZero + mapSize <= mapSize * mapSize)
      attachDragEvents(draggableElement[indexOfZero + mapSize], values, setValues, mapSize, draggableElement)
    if (indexOfZero - mapSize >= 0)
      attachDragEvents(draggableElement[indexOfZero - mapSize], values, setValues, mapSize, draggableElement)

    // if (indexOfZero > 0 && parseInt(indexOfZero / mapSize) == parseInt((indexOfZero - 1) / mapSize) )
    //   attachDragEvents(draggableElement[indexOfZero - 1], "left", values, setValues, mapSize)
    // if (indexOfZero + 1 < mapSize * mapSize && parseInt(indexOfZero / mapSize) == parseInt((indexOfZero + 1) / mapSize))
    //   attachDragEvents(draggableElement[indexOfZero + 1], "right", values, setValues, mapSize)
    // if (indexOfZero + mapSize <= mapSize * mapSize)
    //   attachDragEvents(draggableElement[indexOfZero + mapSize], "down", values, setValues, mapSize)
    // if (indexOfZero - mapSize >= 0)
    //   attachDragEvents(draggableElement[indexOfZero - mapSize], "up", values, setValues, mapSize)
    setLauding(true)
  })

  return (

    <div className="App">
      <Header title="N puzzle" />
      {
        lauding ?
          <Puzzle
            mapSizeChange={mapSizeChange}
            onSubmit={(event) => onSubmit(event, mapSize, setValues)}
            setValues={setValues}
            setMapSize={setMapSize}
            values={values} mapSize={mapSize} />
          :
          ""
      }

    </div>
  );
}

export default App;
