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
   setValues(splitArrayIntoChunks(createNumberArray(val * val), val))

  // const gridContainer = document.querySelector('.grid-Container');
  // gridContainer.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
  // gridContainer.style.gridTemplateRows = `repeat(${val}, 100px)`;
};