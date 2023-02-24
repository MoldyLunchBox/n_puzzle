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
    
    function dragStart() {
      log("start")
      this.className += ' hold';
      setTimeout(() => (this.className = 'invisible'), 0);
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
      this.className = 'empty';
      this.append(fill);
    }
  });
  return (


<div>
<div className="empty">
    <div className="fill" draggable="true"> </div>
  </div>

  <div className="empty">
  </div>

  <div className="empty">
  </div>

  <div className="empty">
  </div>

  <div className="empty">
  </div>
</div>
  );
}

export default App;





