const { log } = console;
function splitArrayIntoChunks(arr, chunkSize) {
  const output = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    output.push(arr.slice(i, i + chunkSize));
    log(chunkSize)
  }
  return output;
}

function createNumberArray(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

export const mapEdit = (newMap, setValues) => {
  setValues(newMap.map((e) => parseInt(e)))

}

export const onSubmit = async (values) => {
  values.preventDefault()
  const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
  const numbers = inputs.map((input) => input.value);
  // setValues(splitArrayIntoChunks(numbers, mapSize))
  // setSteps(await solver())
  log(numbers)
  //setFormSubmited(true)
};
export const mapSizeChange = (event, setMapSize, setValues) => {
  const val = parseInt(event.target.value);
  setMapSize(val)
  setValues((createNumberArray(val * val), val))

  // const gridContainer = document.querySelector('.grid-Container');
  // gridContainer.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
  // gridContainer.style.gridTemplateRows = `repeat(${val}, 100px)`;
};

function dragDropUp(e, map, setValues, mapSize) {
  log("up")
  const dup = map.slice()
  const indexOfZero = map.indexOf(0)
  dup[indexOfZero] = dup[indexOfZero - mapSize]
  dup[indexOfZero - mapSize] = 0
  setValues(dup)

  //this.classList.add('fill');
}
function dragDropDown(e, map, setValues, mapSize) {
  log("down")
  const dup = map.slice()
  const indexOfZero = map.indexOf(0)
  dup[indexOfZero] = dup[indexOfZero + mapSize]
  dup[indexOfZero + mapSize] = 0
  setValues(dup)
  //this.classList.add('fill');
}
function dragDropLeft(e, map, setValues) {
  log("left")
  const dup = map.slice()
  const indexOfZero = map.indexOf(0)
  dup[indexOfZero] = dup[indexOfZero - 1]
  dup[indexOfZero - 1] = 0
  setValues(dup)
  //this.classList.add('fill');
}
function dragDropRight(e, map, setValues) {
  log("right")
  const dup = map.slice()
  const indexOfZero = map.indexOf(0)
  dup[indexOfZero] = dup[indexOfZero + 1]
  dup[indexOfZero + 1] = 0
  setValues(dup)
  //this.classList.add('fill');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  log("dragLeave")
  //this.classList.add('fill');
}

export const attachDragEvents = (element, dropDirection, map, setValues, mapSize) => {
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragleave', dragLeave);
  element.classList.add('empty');
  if (dropDirection == "up")
    element.addEventListener('drop', (e) => dragDropUp(e, map, setValues, mapSize));
  if (dropDirection == "down")
    element.addEventListener('drop', (e) => dragDropDown(e, map, setValues, mapSize));
  if (dropDirection == "left")
    element.addEventListener('drop', (e) => dragDropLeft(e, map, setValues));
  if (dropDirection == "right")
    element.addEventListener('drop', (e) => dragDropRight(e, map, setValues));
}