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

    //max2 return of the maximum of 2 numbers
    function max(number1, number2){
        if(number1 > number2){
            return number1;
        }
        else {
            return number2;
        }
    }

    //max3 takes three as arguments and returns the larges
    function maxOfThree(number1, number2, number3){
        if(number1 >= number2 && number2 >= number3){
            return number1;
        }else if(number2 >= number1 && number1 >= number3){
            return  number2;
        }
        else {
            return  number3;
        }
    }

    function sum(array) {
        var result = array.reduce((a, b) => a+ b, 0);
        return result;
    }

//multiply function with reduce
    function multiply(array) {
        var result = array.reduce((a , b) => a * b, 1);
        return result;
    }

}());