// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');


describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(myApp.findMinMax([1, 2, 3, 4])).to.eql([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(myApp.findMinMax([6, 4])).to.eql([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 67, 2]', function () {
      expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.eql([2, 78]);
    });

    it('should return [-10, -1] for [-5,-6,-4,-9,-1,-2,-10]', function () {
      expect(myApp.findMinMax([-5,-6,-4,-9,-1,-2,-10])).to.eql([-10, -1]);
    });

    it('should return [1000000, 40000, 500000000, 20, 1000]) for [20, 500000000]', function () {
      expect(myApp.findMinMax([1000000, 40000, 5000000000, 20, 1000])).to.eql([20, 5000000000]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(myApp.findMinMax([4, 4, 4, 4])).to.eql([4]);
    });

    it('should return [15] for [15]', function () {
      expect(myApp.findMinMax([15])).to.eql([15]);
    });

  });

  describe('Returns Invalid input if the value entered is not an array', function () {

    it('should return Invalid input for a string', function () {
      expect(myApp.findMinMax("[2,4,5,1]")).to.eql("Invalid input");
    });

    it('should return Invalid input for the boolean true', function () {
      expect(myApp.findMinMax(true)).to.eql("Invalid input");
    });

  });

  describe('Returns an empty array if the value entered is an empty array', function () {
    it('should return [] for []', function () {
      expect(myApp.findMinMax([])).to.eql([]);
    });
  });

});
