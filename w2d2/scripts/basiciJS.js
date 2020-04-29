/*jshint esversion: 6  */

(function() {
    "use strict";

    let assign = {
        array: [],
        myMap(arr, mapFunc){
            let result = [];
            for(let itm of arr){
                result.push(mapFunc(itm));
            }
            return result;
        },
        myFilter(arr, filterFunc){
            let result = [];
            for(let itm of arr) {
                if(filterFunc(itm)){
                    result.push(itm);
                }
            }
            return result;
        },

    //max2 return of the maximum of 2 numbers
     max(number1, number2) {
        if (number1 > number2) {
            return number1;
        } else {
            return number2;
        }
    },

    //max3 takes three as arguments and returns the larges
    maxOfThree(number1, number2, number3) {
        if (number1 >= number2 && number2 >= number3) {
            return number1;
        } else if (number2 >= number1 && number1 >= number3) {
            return number2;
        } else {
            return number3;
        }
    },

        isVowel(letter){
            let vowels = /^[aeiou]$/i;
            return vowels.test(letter);
        },

    sum() {
        return this.array.reduce((a, b) => a + b, 0);
    },

    //multiply function with reduce
    multiply() {
        return  this.array.reduce((a, b) => a * b, 1);
    },

        //reverse returns revers of string
        reverse(str){
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");

        return joinArray;
    }

};

    describe("assign", function () {
        function checkArray(result, resultMust){
            assert.isArray(result, "result must be array");
            assert.equal(result.length, resultMust.length, "Result array must have length = "+resultMust.length);
            for(let indx in resultMust){
                assert.equal(result[indx], resultMust[indx], "result["+indx+"] is "+result[indx]+". It must be "+resultMust[indx]);
            }
        }

        context("When we find max number", function () {
            beforeEach(function () {

            });
            it('the max of (25, 35) is 35', function () {
                assert.equal(assign.max(25, 35), 35);
            });
            it('should the max of three number(10, 12, 15) is 15', function () {
                assert.equal(assign.maxOfThree(10,12,15), 15);
            });
            it("the maxOfTree(41, 20, 30) is 41 (specially made mistake)", function () {
                assert.equal(assign.maxOfThree(41, 20,30), 20);
            });
        });

        context("When given an array [3, 5, 7, 8]", function () {
            beforeEach(function () {
                assign.array = [3, 5, 7, 10];
            });
            it('the sum() is 25', function () {
                assert.equal(assign.sum(), 25);
            });
            it("the multiply() is 120", function () {
                assert.equal(assign.multiply(), 1050);
            });
        });

        context("letter isVowel()", function () {
            beforeEach(function () {

            });
            it('the isVowel("g") is False', function () {
                assert.isFalse(assign.isVowel("g"), "g is not vowel");
            });
            it('the isVowel("e") is True', function () {
                assert.isTrue(assign.isVowel("e"), "e is vowel");
            });
        });

        context("reverse the word", function () {
            beforeEach(function () {

            });
            it('the ("baiaman") will be namaiab', function () {
                assert.equal(assign.reverse("baiaman"), "namaiab");
            });
            it('the ("inter") will be retni', function () {
                assert.equal(assign.reverse("inter"), "retni");
            });
        });

    });

}());