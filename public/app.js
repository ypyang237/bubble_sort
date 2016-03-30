var myArr = [6,5,4,3,2,1];



function bubbleFunc(arr) {
  var isSorted = false;
  var count = 0;

while(!isSorted) {

isSorted = true;
// clearInterval(myInterval);

  for (i = 0; i < arr.length; i++) {

    if (arr[i] > arr[i+1]) {
      count++;
      swap(arr, i);
          document.getElementById('space').innerHTML= '';
          // setInterval(slow(), 1000);
          for(j = 0; j < arr.length; j++) {
          addElement();
        }

          console.log('arr sets: ', arr);

      isSorted = false;
    }  // end of if(arr[i] > arr[i+1])
  }

  } //end of while loop
  return {
    count: count,
    arr : arr
  };

}

  function swap(arr, i) {
    temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }



    function addElement() {
      var bar = '<li style="width:'+ myArr[j] * 10 +'px" id="aBar"></li>';

      document.getElementById('space').innerHTML += bar;

    }
    var bubbleFunc = bubbleFunc(myArr);
    // console.log('what', bubbleFunc.arr.length);
















