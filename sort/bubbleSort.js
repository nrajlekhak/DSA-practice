const array = [99, 55, 11, 44, 1, 5, 63, 87, 4, 0];

function insertionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(insertionSort(array));