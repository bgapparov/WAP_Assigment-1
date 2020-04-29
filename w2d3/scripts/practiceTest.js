/*jshint esversion: 6 */
(function () {
    "use strict";

    let assign = {
        //For this function i create new array and pushed element from end
        reverseArray(array) {
            let newArr = [];
            for (let i = array.length - 1; i >= 0; i--) {
                newArr.push(array[i]);
            }
            return newArr;
        },

        //I for loop i go to till the middle of array I then set the first element equal to a variable called first,
        // then set the first element equal to the last, and the last equal to the first (first).
        reverseArrayInPlace(array) {
            for (let i = 0; i <= (array.length / 2); i++) {
                let first = array[i];
                array[i] = array[array.length - 1 - i];
                array[array.length - 1 - i] = first;
            }
            return array;
        },

        //For this function I did with for loop. I took from the end array and create new element and add for rest previous element
        arrayToList(array) {
            let result = null;
            for (let i = array.length - 1; i >= 0; i--) {
                let listItem = {
                    value: array[i],
                    rest: null
                };
                if (result === null) {
                    result = listItem;
                } else {
                    listItem.rest = result;
                    result = listItem;
                }
            }
            return result;
        },

        //For this function I used while and in while I add values to array until item is null.
        listToArray(list) {
            let result = [];
            let item = list;
            while (item !== null) {
                result.push(item.value);
                item = item.rest;
            }
            return result;
        },

        //I create new element and add list to newElement's rest.
        prepend(val, list) {
            let result = {
                value: val,
                rest: null
            };
            result.rest = list;
            return result;
        },

        //For this function I used while and local parameter pos. Until pos less then index(from argument) and currentItem is not null.
        // After that I just return currentItem(if currentItem is null I returned undefined)
        nth(list, index) {
            if (index < 0) {
                return undefined;
            }
            let curItm = list;
            let pos = 0;
            while (pos < index && curItm !== null) {
                curItm = curItm.rest;
                pos++;
            }
            if (curItm === null) {
                return undefined;
            }
            return curItm.value;
        },

        //I like this function.If it is object I check every property from object by this function (deepEqual).
        deepEqual(obj1, obj2) {
            if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
                return obj1 === obj2;
            }
            if (typeof (obj1) === typeof (obj1) && typeof (obj1) === "object") {
                let keys1 = Object.keys(obj1);
                let keys2 = Object.keys(obj2);
                if (keys1.length !== keys2.length) {
                    return false;
                }
                for (let k of keys1) {
                    if (!keys2.includes(k) || !this.deepEqual(obj1[k], obj2[k])) {
                        return false;
                    }
                }
                return true;
            }
            return obj1 === obj2;
        }

    };

    describe("assign", function () {
       context("Reverse array element", function () {
           beforeEach(function () {});
           it('the reverseArray(["A", "B", "C", "D"] is ["D", "C", "B", "A"])', function () {
            assert.isTrue(assign.deepEqual(assign.reverseArray(["A", "B", "C", "D"]), ["D", "C", "B", "A"]));
           });
           it('the reverseArrayInPlace([1, 2, 3, 4, 5]) is [5, 4, 3, 2, 1]', function () {
            assert.isTrue(assign.deepEqual(assign.reverseArrayInPlace([1,2,3,4,5]), [5,4,3,2,1]));
           });
           it('the reverseArrayInPlace([1, 2, 3, 4, 5]) is [5, 4, 3, 2, 1]', function () {
               assert.isTrue(assign.deepEqual(assign.reverseArrayInPlace([1,2,3,4,5]), [4,5,3,2,1], "(Special made mistake)"));
           });
       });

        context("A List", function () {
            beforeEach(function () { });
            it("the given arrayToList([10, 20]) is {value: 10, rest: {value: 20, rest: null}}", function () {
                assert.isTrue(assign.deepEqual(assign.arrayToList([10, 20]),  {value: 10, rest: {value: 20, rest: null}}));
            });
            it("the given list listToArray(arrayToList([10, 20, 30])) is [10, 20, 30]", function () {
                assert.isTrue(assign.deepEqual(assign.listToArray(assign.arrayToList([10, 20, 30])),  [10, 20, 30]));
            });
            it("the given prepend(10, prepend(20, null)) is {value: 10, rest: {value: 20, rest: null}}", function () {
                assert.isTrue(assign.deepEqual(assign.prepend(10, assign.prepend(20, null)),  {value: 10, rest: {value: 20, rest: null}}));
            });
            it("the given nth(arrayToList([10, 20, 30]), 1) is 20", function () {
                assert.equal(assign.nth(assign.arrayToList([10, 20, 30]), 1),  20);
            });
        });

        context("Deep comparison", function () {
            beforeEach(function () { });
            it("the given obj = {here: {is: \"an\"}, object: 2} deepEqual(obj,obj) is true", function () {
                let obj = {here: {is: "an"}, object: 2};
                assert.isTrue(assign.deepEqual(obj,obj));
            });
        });
    });

}());