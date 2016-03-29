var chai = require('chai');
var bubbleFunction = require('../public/bubble_sort.js');
var expect = chai.expect;
var should = chai.should();

describe('bubble_sort function', function() {

  it('should be a function', function(){
    expect(bubbleFunction).to.be.a('function');
  });

  it('should swap two numbers if the previous is larger than the current', function() {
    var myArray = [5, 3, 6];
    bubbleFunction(myArray);
    expect(myArray).to.deep.equal([3, 5, 6]);
  });

    var nextArray = [1, 0, 75, 34, 2, 5, 7, 25, 56, 78, 12];
    bubbleFunction(nextArray);
    expect(nextArray).to.deep.equal([ 0, 1, 2, 5, 7, 12, 25, 34, 56, 75, 78 ]);
});