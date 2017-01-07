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


describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).to.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).to.equal('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).to.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).to.equal('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).to.equal(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).to.equal(101);
  });

  it("should return `FizzBuzz` for -60", function() {
    expect(myApp.fizzBuzz(60)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 0", function() {
    expect(myApp.fizzBuzz(0)).to.equal('FizzBuzz');
  });

});



describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(myApp.aritGeo([])).to.equal(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(myApp.aritGeo([2, 4, 6, 8, 10])).to.equal('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41])).to.equal('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(myApp.aritGeo([15, 10, 5, 0, -5, -10])).to.equal('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(myApp.aritGeo([2, 6, 18, 54, 162])).to.equal('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(myApp.aritGeo([0.5, 3.5, 24.5, 171.5])).to.equal('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(myApp.aritGeo([-128, 64, -32, 16, -8])).to.equal('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

    it("should return -1 for [1, 2, 3, 5, 8]", function() {
      expect(myApp.aritGeo([1, 2, 3, 5, 8])).to.equal(-1);
    });

    it("should return -1 for [1, 3, 6, 10, 15]", function() {
      expect(myApp.aritGeo([1, 3, 6, 10, 15])).to.equal(-1);
    });

    it("should return -1 for [1, 8, 27, 64, 125]", function() {
      expect(myApp.aritGeo([1, 8, 27, 64, 125])).to.equal(-1);
    });
    
  });
});
