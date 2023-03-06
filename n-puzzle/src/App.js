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
import { onSubmit, mapSizeChange } from "./tools/handlers";
const { log } = console;

function App() {
  // map values
  const [values, setValues] = useState([4, 1, 2, 3, 0, 5, 6, 7, 8]);
  // submit state, to indicate whether the submit button was pressed and it's succesful or not
  const [formSubmited, setFormSubmited] = useState(false);
  const [mapSize, setMapSize] = useState(3)



  useEffect(() => {
    let indexOfZero = 0;
    log("these are the values :", values)
    const gridContainer = document.querySelector('.grid-Container');
    gridContainer.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${mapSize}, 100px)`;

    const draggableElements = document.querySelectorAll('.gridItem');
    for (let i = 0; i < draggableElements.length; i++) {
      
      const element = draggableElements[i];
      const inputElement = element.querySelector('input');

      if (inputElement.value == 0)
        indexOfZero = i
      element.setAttribute('draggable', 'false');
      draggableElements[i].classList.remove('empty');
      draggableElements[i].classList.remove('fill');
      draggableElements[i].removeEventListener('dragover', dragOver);
      draggableElements[i].removeEventListener('dragenter', dragEnter);
      draggableElements[i].removeEventListener('drop', dragDrop);
      draggableElements[i].removeEventListener('dragstart', dragStart);
      draggableElements[i].removeEventListener('dragend', dragEnd);

    }

    log("loop index of zero:", indexOfZero)
    log("values index of zero:", draggableElements[values.indexOf(0)].querySelector('input').value)






const draggedFill = ""
    function dragStart() {
      draggedFill = this;
      log("start")
      // this.className += ' hold';
      //setTimeout(() => (this.className = 'invisible'), 0);
  }
  
   function dragEnd() {
      draggedFill.classList.remove('fill');
      //this.classList.add('fill');
  }
  
   function dragOver(e) {
      e.preventDefault();
  }
  
   function dragEnter(e) {
      e.preventDefault();
      //this.className += ' hovered';
  
  }
   function dragDrop() {
  
      const dup = values.slice()
      const tmp = this.querySelector('input').value;
      log("dropping", 0, " on", this.querySelector('input').value)
      log(draggedFill)
      log(this)
      dup[findIndex(values, parseInt(tmp)).i][findIndex(values, parseInt(tmp)).j] = 0
      dup[parseInt(indexOfZero / mapSize)][indexOfZero % mapSize] = parseInt(tmp)
  
      setValues(dup)
  
  
  
  }
  
  })

  return (

    <div className="App">
      <Header  title="N puzzle" />
      <Puzzle mapSizeChange={mapSizeChange} 
              onSubmit={(event) => onSubmit(event, mapSize, setValues)}  
              setValues={setValues}
              setMapSize={setMapSize}
              values={values} mapSize={mapSize}/>
    </div>
  );
}

export default App;
