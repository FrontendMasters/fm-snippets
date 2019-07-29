// CHALLENGE 1 //

function createFunction() {
    return function () {
        console.log('hello');
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();

///////////////////////////////////////////////////////////////////////////

// CHALLENGE 2 //

function createFunctionPrinter(input) {
    return function () {
        console.log(input);
    }

}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();

///////////////////////////////////////////////////////////////////////////

// CHALLENGE 3 //

//follow the instructions to solve this problem. Look back at the video if you are unsure of why this is occurring. 

///////////////////////////////////////////////////////////////////////////

// CHALLENGE 4 //

function addByX(x) {
    return function (y) {
        return x + y;
    }
}

var addByTwo = addByX(2);


// now call addByTwo with an input of 1
console.log(addByTwo(1)) //--> 3

// now call addByTwo with an input of 2
console.log(addByTwo(2)) //--> 4

///////////////////////////////////////////////////////////////////////////

// EXTENSION: CHALLENGE 5 //

function once(func) {
    let called;
    let executed = false;
    return function (num) {
        if (executed === false) {
            called = func(num);
            executed = true;
        }
        return called;
    }
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6

///////////////////////////////////////////////////////////////////////////

// EXTENSION: CHALLENGE 6 //

function after(count, func) {
    let callMe = 1;
    return function () {
        if (callMe < count) {
            callMe++;
            return callMe
        } else {
            func();
        }
    }
}

var called = function () { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


///////////////////////////////////////////////////////////////////////////

// EXTENSION: CHALLENGE 7 //

function delay(func, wait) {
    var args = Array.from(arguments);
    if (args.length > 2) { args = args.slice(2, args.length) }
    setTimeout(function() { func.apply(null,args) }, wait);
} 

function displayTwo() { console.log(2) };
delay(displayTwo, 3000); //--> displays 2 after 3000 milliseconds (3 seconds)