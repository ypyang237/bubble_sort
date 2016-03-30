


var myArr = [2,5,7,1,6,8,3,4];

function bubbleFunc(arr) {
  var isSorted = false;
  var count = 0;

while(!isSorted) {

isSorted = true;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] > arr[i+1]) {
      count++;
      swap(arr, i);
      // console.log('now it is: ', arr);
          for(j = 0; j < arr.length; j++) {

          addElement();
        }
          console.log('arr sets: ', arr);

      isSorted = false;
    }
  }

  }
  // console.log(arr);
  // console.log(count);
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
      var bar = document.createElement('div');
      bar.id = 'aBar';

      bar.style.width = myArr[j] * 10  + "px";
      document.body.appendChild(bar);


    }
    var bubbleFunc = bubbleFunc(myArr);
    console.log('what', bubbleFunc.arr.length);


















