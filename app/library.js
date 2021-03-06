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
    },
    
    fizzBuzz: function(n){
        return n % 15 == 0 ? "FizzBuzz" : n % 5 == 0 ? "Buzz" :n % 3 == 0 ? "Fizz" : n;
    },
    
    aritGeo: function(n){
        var arith = true;
        var geo = true;
        var diff = n[1] - n[0];
        var ratio = n[1] / n[0];
       

        for(var i = 0; i < n.length - 1; i++)
        {
            if( n[i + 1] - n[i] !== diff ){
              arith = false;
            }
            if(n[i + 1] / n[i] !== ratio){
              geo = false;
            }
        }

        if(n.length === 0){
            return 0;
        }else if(arith === true){
            return "Arithmetic";
        }else if(geo === true){
            return"Geometric";
        }else{
            return -1;
        }
   }
}