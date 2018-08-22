///////////////////////////////////////////////////////////////////
//CHALLENGE 1//

console.log('Start of Challenge 1');

console.log('I am at the beginning of the code');
function setTimeoutFunc() {
    console.log('I am in the setTimeout callback function');
}
setTimeout(setTimeoutFunc, 0);
console.log('I am at the end of the code');



console.log('End of Challenge 1');

///////////////////////////////////////////////////////////////////
//CHALLENGE 2 PART 1//
console.log('Start of Challenge 2');

function intervalLog() {
    console.log("Interval Hello!");
}

function startLog() {
    setInterval(intervalLog, 2000);
}

startLog(); //type clearAllIntervals(), then press run to stop the cycle

// ...your code above
function clearAllIntervals() {
    for (let i = 0; i < 1000; i++) {
        clearInterval(i);
    }
}
console.log('End of Challenge 2');

//CHALLENGE 2 PART 2//
console.log('Start of Challenge 2');

function intervalLog() {
    console.log("Interval Hello!");
}

function clearLog() {
    clearInterval(start); //clears the setInterval function
}


setTimeout(clearLog, 10000); //starts the timer to stop the output message
let start = setInterval(intervalLog, 2000); //begins the message

// ...your code above
function clearAllIntervals() {
    for (let i = 0; i < 1000; i++) {
        clearInterval(i);
    }
}
console.log('End of Challenge 2');

///////////////////////////////////////////////////////////////////

//CHALLENGE 3 PART 1//
console.log('Start of Challenge 3');
// ...your code below
function everyXsecsForYsecs(callback, interval, totalTime) {
    function stopFunc() { //keeps the clearInterval function out of scope until ready
        clearInterval(startFunc);
    }
    let startFunc = setInterval(callback, interval * 1000);
    setTimeout(stopFunc, totalTime * 1000);
}

function sayHowdy() {
    console.log("Howdy");
}

everyXsecsForYsecs(sayHowdy, 1, 5);
console.log('End of Challenge 3');

//CHALLENGE 3 PART 2//

console.log('Start of Challenge 3');
// ...your code below
function everyXsecsForYsecs(callback, interval, totalTime) {
    for (let i = 0; i < totalTime / interval; i++) { //deposits the correct amount of setTimeouts onto the stack 
        setTimeout(callback, interval * 1000);
    }
}

function sayHowdy() {
    console.log("Howdy");
}

everyXsecsForYsecs(sayHowdy, 1, 5);
console.log('End of Challenge 3');


///////////////////////////////////////////////////////////////////

//CHALLENGE 4//
console.log('Start of Challenge 4');
// ...your code below
function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i);
    }
}

let delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {
    setTimeout(function () { console.log("printing element " + i) }, delayTime);
}

forEach(delays, delayLog);
console.log('End of Challenge 4');


///////////////////////////////////////////////////////////////////

//CHALLENGE 5//
console.log('Start of Challenge 5');
// ...your code below
function changeColor() {
    if (document.body.style.background === "rgb(221, 238, 255)") {
        document.body.style.background = "rgb(221,238,221)";
    } else {
        document.body.style.background = "rgb(221,238,255)";
    }
}

let activate = document.getElementById("activate");
let color = document.getElementById("color");
activate.addEventListener("click", function (event) {
    console.log("clicked #1");
    color.addEventListener("click", function (event) {
        console.log("clicked #2")
        changeColor();
    });
});

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 5');

///////////////////////////////////////////////////////////////////

//CHALLENGE 6//
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
    var database = ['Aaron', 'Barbara', 'Chris'];
    setTimeout(callback(database[id]), 0);
}

function storeData(data) {
    dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log(dataReceived);

console.log('End of Challenge 6');

///////////////////////////////////////////////////////////////////

//CHALLENGE 7//
console.log('Start of Challenge 7');
// ...your code below
//here's a link to how to write an Ajax request: https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
const Http = new XMLHttpRequest(); //creates new XHR object
const url = 'https://rest.bandsintown.com/artists/sleepingwithsirens?app_id=jshp'; //url where the Sleeping With Sirens JSON can be found
Http.open("GET", url); //initializes a newly-created request
Http.send(); //sends the request to the server

Http.onreadystatechange = function () { //when event is finished, call this function
    if (this.readyState == 4 && this.status == 200) { //ensures task is done
        let response = Http.responseText;
        dataHandler(JSON.parse(response)); //parses the JSON received to construct the object described
    }
}

function dataHandler(data) {
    $("#ch2").append("<img src='" + data.image_url + "'/>"); //appends the correct section of our JSON into our HTML
}


console.log('End of Challenge 7');

///////////////////////////////////////////////////////////////////

//CHALLENGE 8//
console.log('Start of Challenge 8');
// ...your code below
const Http = new XMLHttpRequest(); //creates new XHR object
const url = 'https://rest.bandsintown.com/artists/sleepingwithsirens/events?app_id=jshp'; //url where the Sleeping With Sirens JSON can be found
Http.open("GET", url); //initializes a newly-created request
Http.send(); //sends the request to the server

Http.onreadystatechange = function () { //when event is finished, call this function
    if (this.readyState == 4 && this.status == 200) { //ensures task is done
        var response = Http.responseText;
        dataHandler(JSON.parse(response)); //parses the JSON received to construct the object described
    }
};

function dataHandler(data) {
    for (let i = 0; i < data.length; i++) {
        $("#ch3").append(data[i].venue.name + ', ');//appends the correct section of our JSON into our HTML
    }
    $("#ch3").slice(0, -1); //takes off the extra comma
}

console.log('End of Challenge 8');

///////////////////////////////////////////////////////////////////

//Challenge 9//
console.log('Start of Challenge 9');
// ...your code below
const Http = new XMLHttpRequest(); //creates new XHR object
const url = 'https://rest.bandsintown.com/artists/sleepingwithsirens/events?app_id=jshp&date=1990-01-01%2C2019-01-01'; //url where the Sleeping With Sirens JSON can be found
Http.open("GET", url); //initializes a newly-created request
Http.send(); //sends the request to the server

Http.onreadystatechange = function () { //when event is finished, call this function
    if (this.readyState == 4 && this.status == 200) { //ensures task is done
        var response = Http.responseText;
        dataHandler(JSON.parse(response)); //parses the JSON received to construct the object described
    }
};

function dataHandler(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].venue.country === "United States") {
            $("#ch4").append(data[i].venue.name + ', ');//appends the correct section of our JSON into our HTML
        }
    }
    $("#ch4").slice(0, -1); //takes off the extra comma
}

console.log('End of Challenge 9');