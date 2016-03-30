var chai = require('chai');
// var bubbleFunction = require('../public/bubble_sort.js');
var expect = chai.expect;
var should = chai.should();
var bubbleSort = require('../public/bubble_sort.js');
Array.prototype.bubbleSort = bubbleSort;

describe('bubbleFunc function', function() {

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function');
  });

  it('should swap two numbers if the previous is larger than the current', function() {
    var myArray = [5, 3, 6];
    myArray.bubbleSort();
    expect(myArray).to.deep.equal([3, 5, 6]);
  });

    var nextArray = [1, 0, 75, 34, 2, 5, 7, 25, 56, 78, 12];
    nextArray.bubbleSort();
    expect(nextArray).to.deep.equal([ 0, 1, 2, 5, 7, 12, 25, 34, 56, 75, 78 ]);
});

describe('bubbleSort function', function() {
  it('should be a function', function() {
    expect(Array.prototype.bubbleSort).to.be.a('function');
  });

  it('should sort numbers from low to high', function() {

    var messyArr = [2,5,1,9,4];

    expect(messyArr.bubbleSort()).to.deep.equal([1,2,4,5,9]);

  });
});