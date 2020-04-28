/*jshint esversion: 6  */

(function() {
    "use strict";
function functionTest(expected, reality) {
    if(expected === reality){
        return "TEST SUCCEEDED";
    }else {
        return "TEST FAILED. Expected " + expected + " reality " + reality;
    }
}

//sum function with reduce

function sum(array) {
    var result = array.reduce((a, b) => a+ b, 0);
    return result;
}

//multiply function with reduce
function multiply(array) {
    var result = array.reduce((a , b) => a * b, 1);
    return result;
}

function reverseReduce(str) {
    var revString = str.split("").reduce((rev, char)=> char + rev, '');
    return revString;
}

//filterLong Words function with filter
function filterLongWords(array, num){

    let res = array.filter(function (a) {return a.length > num;  });
    return res.toString();
}




console.log("Expected output of the [3,4,5,6,7] is 25 " + functionTest(25, sum([1,3,5,7,4,5])));
console.log("Expected output of the [1, 3, 4, 2] is 24 " + functionTest(24, multiply([3, 4, 2])));
console.log("Expected output of  of the today  is yadot " + functionTest('yadot', reverseReduce('today')));
console.log("Expected output of the ['Ale', 'Hello', 'Oha', 'u'] " + functionTest("Hello", filterLongWords(['Ale', 'Hello', 'Oha', 'u'], 3)))

console.log(sum([1,3,5,7,4,5]));
console.log(multiply([3, 4, 2]));
console.log(reverseReduce('today'));
console.log(filterLongWords(['Ale', 'Hello', 'Oha', 'u'], 3));
}());