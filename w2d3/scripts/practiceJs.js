/*jshint esversion: 6 */
(function () {
    "use strict";


    //reverseArray() For this function i create new array and pushed element from end
    function reverseArray(array) {
        let newArr = [];
        for(let i = array.length-1; i>=0; i--){
            newArr.push(array[i]);
        }
        return newArr;
    }

    //reverseArrayInPlace() I for loop i go to till the middle of array I then set the first element equal to a variable called first,
    // then set the first element equal to the last, and the last equal to the first (first).
    function reverseArrayInPlace(array){
        for(let i = 0; i <= (array.length / 2); i++){
            let first = array[i];
            array[i] = array[array.length - 1 -i];
            array[array.length - 1 - i] = first;
        }
        return array;
    }

    //arrayToList() here I created empty list and when i reach to ent of array put the null.Then put tp list.value -> spliced from 0 to 1 to
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

    //listToArray I did with while(). First I created empty array  and just pushed list value to ne array till the list.value not null.
    function listToArray(list){
            let arr = [];
           while (list.value != null) {
               arr.push(list.value);
               list = list.rest;
           }
            return arr;
    }

        console.log(reverseArray(['hello', 'lala', 'bye', 'hi']));
        console.log(reverseArray([1, 2, 3, 4, 5]));
        console.log(arrayToList([10, 20]));
        console.log(listToArray(arrayToList([10, 20, 30])));
}());