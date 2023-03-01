// CHALLENGE 1
function createFunction() {
	return function(){
    console.log('hello')
  }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
//function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  function printer(){
    console.log(input)
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

//const willCounter = outer();
//const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
//willCounter();
//willCounter();
//willCounter();

//jasCounter();
//willCounter();


function addByX(x) {
	let step = x;
  function add(start){
    //console.log('addByX', start + step)
    return start + step;
  }
	return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
	let output;
  function callOnce(x) {    
    if(output > 0){
      return output;
    } else {
      output = func(x)
      return output;
    }
  }
  return callOnce;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
//console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let numCalls = 0
  function calledAfter() {
    numCalls++;
    if(numCalls == count) {
      func()
    }
  }
  
  return calledAfter
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
//afterCalled(); // => nothing is printed
//afterCalled(); // => nothing is printed
//afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...params) {
	setTimeout(() => {
    func(...params)
  }, wait)
}

// Testing Challenge 6 (tests were not included in the exercise for this challenge)
const cb = function(...params){ console.log("called!", ...params) };
//delay(cb, 1000); // "called!" printed after 1000 ms
//delay(cb, 2000, "param1", "param2"); // "called! param1 param2" printed after 2000 ms


// CHALLENGE 7
function rollCall(names) {
	let roll = names
  function caller() {
    if(roll.length > 0) {
      console.log(roll.shift())
    } else {
      console.log("Everyone accounted for")
    }
  }
  
  return caller
}

// /*** Uncomment these to check your work! ***/
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
	let obj = {}
  
  function save(x) {
    if(x === magicWord){
    	return obj;  
    }
    else {
      obj[x] = func(x)
			return obj[x]
    }
    
  }
  
  return save;
}

// /*** Uncomment these to check your work! ***/
 const multiplyBy2 = function(num) { return num * 2; };
 const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
	let index = 0
  function iterate(){
    let output = array[index % array.length]
    index++
    return output
  }
  
  return iterate;
}

// /*** Uncomment these to check your work! ***/
 const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 const getDay = cycleIterator(threeDayWeekend);
 //console.log(getDay()); // => should log 'Fri'
 //console.log(getDay()); // => should log 'Sat'
 //console.log(getDay()); // => should log 'Sun'
 //console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {

  function firstArg(...params){
    return func(arg, ...params)
  }
  
  return firstArg;
}

// /*** Uncomment these to check your work! ***/
 const subtract = function(big, small) { return big - small; };
 const subFrom20 = defineFirstArg(subtract, 20);
 // console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
	function stamp(...params){
    return {
      date: (new Date()).toDateString(),
      output: func(...params)
    }
  }
  
  return stamp;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
	let list = [];
  function change(str1, str2){
    if(str2){
      list.push({search: str1, replace: str2});
      return;
    } else {
      list.map((item) => {
        str1 = str1.replace(item.search, item.replace);
      })
      return str1;
    }
  }
  
  return change;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
//console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
	let privateSecret = secret; 
  
  function getSecret() {
    console.log(privateSecret);
    return privateSecret;
  }
  
  function setSecret(x){
    privateSecret = x;
  }
  
  return {getSecret, setSecret}
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
//obj.getSecret() // => returns 5
//obj.setSecret(2)
//obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
	let count = 0;
  function increment(){
    count++;
    console.log(count)
  }
  
  return increment;
}

// /*** Uncomment these to check your work! ***/
 let myNewFunc1 = callTimes();
 let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
	let n = num;
  function spin(){
    if(n > 1) {
      n--;
      return "spin";
    } else if (n == 1) {
      n--;
      return "win";
    } else {
      return "pick a number to play again";
    }
  }
  
  return spin
}

// /*** Uncomment these to check your work! ***/
 const play = roulette(3);
 //console.log(play()); // => should log 'spin'
 //console.log(play()); // => should log 'spin'
 //console.log(play()); // => should log 'win'
 //console.log(play()); // => should log 'pick a number to play again'
 //console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
  let numbers = []

  function calc(num){
    if(num){
      numbers.push(num)
    }
    
    let avg = 0
    if(numbers.length) {
      avg = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length  
    }
    return avg;
  }
  
  return calc
}

// /*** Uncomment these to check your work! ***/
 //const avgSoFar = average();
 //console.log(avgSoFar()); // => should log 0
 //console.log(avgSoFar(4)); // => should log 4
 //console.log(avgSoFar(8)); // => should log 6
 //console.log(avgSoFar()); // => should log 6
 //console.log(avgSoFar(12)); // => should log 8
 //console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let tests = arrOfTests;
  
  function test(func){
  	let result = true;
    tests.map((item) => {
      if(func(item[0]) !== item[1]) {
        result = false;
      }
    })
    return result;
  }
  
  return test;
}

// /*** Uncomment these to check your work! ***/
 const capLastTestCases = [];
 capLastTestCases.push(['hello', 'hellO']);
 capLastTestCases.push(['goodbye', 'goodbyE']);
 capLastTestCases.push(['howdy', 'howdY']);
 const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
 const capLastAttempt1 = str => str.toUpperCase();
 const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
 //console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
 //console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
	let history = []
  
  function save(str){
  	if(str === "undo") {
      if(history.length === 0) {
        return "nothing to undo";
      }
      return `${history.pop()} undone`;
    } 
    
    history.push(str)
    return `${str} done`
    
  }
  
  return save;
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
/*
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'walk undone'
console.log(myActions('undo')); // => should log 'nothing to undo'
*/

// CHALLENGE 19
function blackjack(array) {
	let index = 0;
  
  function dealer(num1, num2){
    
  	let playerSum;
    let busted = false;
    
    function player(){
      if(!playerSum){
        playerSum = num1 + num2;
        return playerSum;
      }
      
      if(playerSum + array[index % array.length] <= 21 ) {
        playerSum += array[index % array.length]
        index++;
        return playerSum;
      } 
      
      if(busted){
        return "you are done!"
      }
      
      busted = true;
      index++;
      return "bust";
    }
    
    return player;
  }
  
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
/*
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
*/

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
/*
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
*/
