function bubbleFunc(arr) {
  var isSorted = false;
  var count = 0;

while(!isSorted) {

isSorted = true;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] > arr[i+1]) {
      count++;
      swap(arr, i);
      isSorted = false;
    }
  }

  }
  console.log(count);
  return arr;
}

  function swap(arr, i) {
    temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }




module.exports = bubbleFunc;