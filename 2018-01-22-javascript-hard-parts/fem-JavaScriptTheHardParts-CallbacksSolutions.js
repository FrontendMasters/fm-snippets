// Challenge 1
function addTwo(num) {
    return num + 2
}

///////////////////////////////////////////////////////////////////////////////////////

// Challenge 2
function addS(word) {
    return word + 's'
}

///////////////////////////////////////////////////////////////////////////////////////

// Challenge 3
function map(array, callback) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i]);
    }
    return newArr
}

///////////////////////////////////////////////////////////////////////////////////////

// Challenge 4 //
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

///////////////////////////////////////////////////////////////////////////////////////

// Extension 1 //
function mapWith(array, callback) {
    let newArr = [];
    forEach(array, function (i) {
        newArr.push(callback(i));
    });
    return newArr;
}

///////////////////////////////////////////////////////////////////////////////////////

// Extension 2 //
function reduce(array, callback, initialValue) {
    let total = initialValue;
    for (let i = 0; i < array.length; i++) {
        total = callback(total, array[i]);
    }
    return total;
}

var add = function (a, b) { return a + b; };
var nums = [4, 1, 3];
console.log(reduce(nums, add, 0));

///////////////////////////////////////////////////////////////////////////////////////

// Extension 3 //
function intersection(arrays) {
    //note: 'arguments' is a built-in object corresponding, in this case, to what was passed in for arrays
    let result = [];
    for (let k = 1; k < arguments.length - 1; k++) { //loops through arrays
        //console.log(arrays[k]);
        for (let i = 0; i < arguments[0].length; i++) { //loops through first array
            for (let j = 0; j < arguments[k].length; j++) { //loops through k'th array
                if (arguments[0][i] === arguments[k][j]) { //checks if the value is the same as in the first array
                    if (!result.includes(arguments[0][i])) { //checks if number is already noted
                        result.push(arguments[0][i]) //adds the number to our array with elements in all arrays
                    }
                }
            }
        }
    }
    return result;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

///////////////////////////////////////////////////////////////////////////////////////

//Extension 4 //
function union(arrays) {
    //note: 'arguments' is a built-in object corresponding, in this case, to what was passed in for arrays
    let result = []
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (!result.includes(arguments[i][j])) {
                result.push(arguments[i][j]);
            }
        }
    }
    return result
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


///////////////////////////////////////////////////////////////////////////////////////


//Extension 5 //
function objOfMatches(array1, array2, callback) {
    let obj = {};
    for (let i = 0; i < array1.length; i++) {
        if (callback(array1[i]) === array2[i]) { //checks if output matches the element
            obj[array1[i]] = array2[i];
        }
    }
    return obj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

///////////////////////////////////////////////////////////////////////////////////////

//Extension 6 //

function multiMap(arrVals, arrCallbacks) {
    let obj = {};
    for (let i = 0; i < arrVals.length; i++) {
        let result = [];
        for (let j = 0; j < arrCallbacks.length; j++) {
            let currCb = arrCallbacks[j];
            result.push(currCb(arrVals[i]));
        }
        obj[arrVals[i]] = result;
    }
    return obj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function (str) { return str.toUpperCase(); }, function (str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function (str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }