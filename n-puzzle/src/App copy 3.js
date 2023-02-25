import React from "react";
import Grid from './components/Grid';
import './App.scss';
import $ from 'jquery'; 

import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { solver } from './solver';
import PuzzleSteps from "./components/PuzzleSteps";
const { log } = console;

function App() {
 
  useEffect(() => {
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    
    // Fill listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
    
    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener('dragover', dragOver);
      empty.addEventListener('dragenter', dragEnter);
      empty.addEventListener('dragleave', dragLeave);
      empty.addEventListener('drop', dragDrop);
    }
    
    // Drag Functions
    const draggedFill  = ""
    function dragStart() {
      draggedFill = this;
    }
    
    function dragEnd() {
      this.className = 'fill';
    }
    
    function dragOver(e) {
      e.preventDefault();
    }
    
    function dragEnter(e) {
      e.preventDefault();
      this.className += ' hovered';
    }
    
    function dragLeave() {
      this.className = 'empty';
    }
    function dragDrop() {
      log("before")
      let parent1 = draggedFill.parentNode;
      let next1 = draggedFill.nextSibling;
      let parent2 = this.parentNode;
      let next2 = this.nextSibling;
      
      parent1.insertBefore(this, next1);
      
      parent2.insertBefore(draggedFill, next2);
    }

    // function dragDrop() {
    //   this.className = 'empty';
    //   this.append(fill);
    // }
  });
  return (


<div>
<div className="empty">
  0
    <div className="fill" draggable="true"> </div>
  </div>

  <div className="empty">
    1
  </div>

  <div className="empty">
    2
  </div>

  <div className="empty">
    3
  </div>

  <div className="empty">
    4
  </div>
</div>
  );
}

export default App;










---------




import React from "react";
import Grid from './components/Grid';
import './App.scss';
import $ from 'jquery'; 

import DropDownMenu from './components/DropDownMenu';

import logo from './logo.svg';
import './App.css';
import { Row, Col, InputNumber, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { solver } from './solver';
import PuzzleSteps from "./components/PuzzleSteps";
const { log } = console;

function App() {
 
  useEffect(() => {
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    
    // Fill listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
    
    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener('dragover', dragOver);
      empty.addEventListener('dragenter', dragEnter);
      empty.addEventListener('dragleave', dragLeave);
      empty.addEventListener('drop', dragDrop);
    }
    
    // Drag Functions
    let draggedFill  = ""
    function dragStart() {
      draggedFill = this;
    }
    
    function dragEnd() {
      this.className = 'fill';
    }
    
    function dragOver(e) {
      e.preventDefault();
    }
    
    function dragEnter(e) {
      e.preventDefault();
      this.className += ' hovered';
    }
    
    function dragLeave() {
      this.className = 'empty';
    }
    function dragDrop() {
      log("before")
      let parent1 = draggedFill.parentNode;
      let next1 = draggedFill.nextSibling;
      let parent2 = this.parentNode;
      let next2 = this.nextSibling;
      
      parent1.insertBefore(this, next1);
      
      parent2.insertBefore(draggedFill, next2);
    }

    // function dragDrop() {
    //   this.className = 'empty';
    //   this.append(fill);
    // }
  });
  return (


<div>
<div className="empty">

    <div className="fill" draggable="true">0 </div>
  </div>

  <div className="empty">
    1
  </div>

  <div className="empty">
    2
  </div>

  <div className="empty">
    3
  </div>

  <div className="empty">
    4
  </div>
</div>
  );
}

export default App;





