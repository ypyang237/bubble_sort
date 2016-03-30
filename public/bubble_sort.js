// function bubbleFunc(arr) {
//   var isSorted = false;
//   var count = 0;

// while(!isSorted) {

// isSorted = true;

//   for (i = 0; i < arr.length; i++) {

//     if (arr[i] > arr[i+1]) {
//       count++;
//       swap(arr, i);
//       isSorted = false;
//     }
//   }

//   }
//   console.log(count);
//   return arr;
// }

//   function swap(arr, i) {
//     temp = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = temp;
//   }

// module.exports = bubbleFunc;

//THIS TOP PART IS THE ORIGINAL CHALLENGE.
//THE BOTTOM PART IS FOR THE CHALLENGE :
//Create a way for all Arrays to be able to use your bubble sort function as a method of the Array object.
//HAD TO CHANGE SPEC FILE WITH THIS

function bubbleSort() {

  var isSorted = false;
  var count = 0;

while(!isSorted) {

isSorted = true;

  for (i = 0; i < this.length; i++) {

    if (this[i] > this[i+1]) {
      count++;
      swap(this, i);
      isSorted = false;
    }
  }

  }
  // console.log(count);
  return this;

  function swap(arr, i) {
    temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }

}

var bubbleSort = bubbleSort();
// module.exports = bubbleSort;