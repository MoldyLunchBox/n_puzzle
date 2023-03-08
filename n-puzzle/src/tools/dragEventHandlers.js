const { log } = console;
export function drop(e, values, setValues, mapSize, draggableElements, movedPiece) {
    log(movedPiece, "is dropped here")
    const dup = values.slice()
    const empty = values.indexOf(0)
    const piece = values.indexOf(movedPiece)

    dup[empty] = dup[piece]
    dup[piece] = 0

    removeEvents(draggableElements)
    setValues(dup)

    
}
export function dragStart(e, values, setValues, mapSize, draggableElements, dropHandler) {
    log(" drag start",e.target.childNodes[0].value)
    const movedPiece = parseInt(e.target.childNodes[0].value)
    let i = 0;
    for (i = 0; i < draggableElements.length; i++) {
        
        const inputElement = draggableElements[i].querySelector('input');
        if (inputElement.value == 0)
        break ;
    }
      draggableElements[i].addEventListener('dragover', dragOver)
      draggableElements[i].addEventListener('dragenter', dragEnter)
      draggableElements[i].addEventListener('dragleave', dragLeave)
      draggableElements[i].addEventListener('drop', dropHandler)
      
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnd(e, draggableElements) {
    e.preventDefault();
    log("events removed")
    removeEvents(draggableElements)

  }

  function dragEnter(e) {
    e.preventDefault();
  }
  
  function dragLeave() {
    log("dragLeave")
    //this.classList.add('fill');
  }
  
  
  function  removeEvents(draggableElements, dropHandler) {
    for (let i = 0; i < draggableElements.length; i++) {
        const element = draggableElements[i];
        element.removeEventListener("dragover", dragOver);
        element.removeEventListener("dragenter", dragEnter);
        element.removeEventListener("dragleave", dragLeave);
        element.removeEventListener("drop", dropHandler);
        element.removeEventListener("dragstart", dragStart);
        element.removeEventListener("dragend", dragEnd);


        log("events are removed", element.removeEventListener("dragstart", dragStart))
      }
  }

  export const attachDragEvents = (element, values, setValues, mapSize, draggableElements) => {

    const dropHandler = (e) => drop(e, values, setValues, mapSize, draggableElements, 2);

    element.addEventListener('dragstart', (e) => dragStart(e, values, setValues, mapSize, draggableElements, dropHandler));
    element.addEventListener('dragend', (e) => dragEnd(e, draggableElements, dropHandler));
}