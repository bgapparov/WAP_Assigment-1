/*jshint esversion: 6 */
(function () {
    "use strict";


    //For this function i create new array and pushed element from end
    function reverseArray(array) {
        let newArr = [];
        for(let i = array.length-1; i>=0; i--){
            newArr.push(array[i]);
        }
        return newArr;
    }

    //I for loop i go to till the middle of array I then set the first element equal to a variable called first,
    // then set the first element equal to the last, and the last equal to the first (first).
    function reverseArrayInPlace(array){
        for(let i = 0; i <= (array.length / 2); i++){
            let first = array[i];
            array[i] = array[array.length - 1 -i];
            array[array.length - 1 - i] = first;
        }
        return array;
    }

    //Here I created empty list and when i reach to ent of array put the null.Then put tp list.value -> spliced from 0 to 1 to
    function arrayToList(array){
            var result = {};
            for(var i = 0; i < array.length; i++){
                if(i === array.length){
                    return result.rest = null;
                }
                result.value = array.splice(0,1);
                result.rest = arrayToList(array);
            }

            return result;
    }

    //I did with while(). First I created empty array  and just pushed list value to ne array till the list.value not null.
    function listToArray(list){
            let arr = [];
           while (list.value != null) {
               arr.push(list.value);
               list = list.rest;
           }
            return arr;
    }

    //I create new element and add list to newElement's rest.
    function prepend(val,  list){
        let result = {
            value: val,
            rest: null
        };
        result.rest = list;
        return result;
    }

    //For this function I used while and local parameter pos. Until pos less then index(from argument) and currentItem is not null.
    // After that I just return currentItem(if currentItem is null I returned undefined)
    function nth(list, index){
        if(index < 0) {
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
    }

    //I like this function.If it is object I check every property from object by this function (deepEqual).
    function deepEqual(obj1, obj2){
        if(obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined){
            return obj1 === obj2;
        }
        if (typeof (obj1) === typeof (obj1) && typeof (obj1) === "object") {
            let keys1 = Object.keys(obj1);
            let keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length) {
                return false;
            }
            for (let k of keys1) {
                if (!keys2.includes(k) || !deepEqual(obj1[k], obj2[k])) {
                    return false;
                }
            }
            return true;
        }
        return obj1 === obj2;
    }

    let obj = {here: {is: "an"}, object: 2};

        console.log(reverseArray(['hello', 'lala', 'bye', 'hi']));
        console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
        console.log(arrayToList([10, 20]));
        console.log(listToArray(arrayToList([10, 20, 30])));
        console.log(prepend(10, prepend(20, null)));
        console.log(nth(arrayToList([10, 20, 30]), 1));
        console.log(deepEqual(obj, obj));
        console.log(deepEqual(obj, {here: 1, object: 2}));
        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
}());