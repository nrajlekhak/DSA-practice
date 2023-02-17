const array = [99, 55, 11, 44, 1, 5, 63, 87, 4, 0];

function mergeSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

console.log(mergeSort(array));
