export default function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === number) {
          return { i, j };
        }
      }
    }
    return null;
  }