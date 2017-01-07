'use strict'

 function findMin(n){
    var min = n[0];
    for (var i = 1; i < n.length; i++) {
        if(n[i] < min){
            min = n[i];
        }
    }
    return min;
 }

 function findMax(n){
    var max = n[0];
    for (var i = 1; i < n.length; i++) {
        if(n[i] > max){
            max = n[i];
        }
    }
    return max;
 }

module.exports = {
    findMinMax: function(n){
        if(n.constructor !== Array){
            // Returns Invalid Input if the user does not enter an array
            return "Invalid input";
        }
        if(n.length === 0){
            // Returns an Empty array if the users enters an empty array
            return [];
        }
        var min = findMin(n);
        var max = findMax(n);
        var x = [];
        if(min === max){
            x.push(min);
        }else{
            x.push(min);
            x.push(max);
        }
        return x;
    }
}