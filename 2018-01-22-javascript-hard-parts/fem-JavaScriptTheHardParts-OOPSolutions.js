/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/
/*** CHALLENGE 1 of 1 ***/

function makePerson(personName, personAge) {
    let newPerson = Object.create(null);
    newPerson.name = personName;
    newPerson.age = personAge;
	
    return newPerson
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
    greet: function () {
        console.log("hello");
    }

}

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(personName, personAge) {
    // add code here
    let newPerson = Object.create(personStore);
    newPerson.name = personName;
    newPerson.age = personAge;
    return newPerson;
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// add code here
personStore.introduce = function () {
    console.log("Hi, my name is " + sandra.name);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
    // add code here
    this.greet = function () {
        console.log("hello");
    }
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  let newPerson = new PersonConstructor;
	newPerson.name = name;
  newPerson.age = age;
  
	return newPerson;
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'


/*** CHALLENGE 3 of 3 ***/
PersonConstructor.prototype.introduce = function () {
    console.log("Hi, my name is " + this.name)
}


mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("hello");
    }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
    constructor(name, age) {
        super(name); // call the super class constructor and pass in the name parameter
    }
    introduce() {
        console.log("Hello World, my name is " + this.name)
    }
}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai');
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                     EXTENSION: SUBCLASSING
****************************************************************/

// all types of users can use functions added to the userFunctionStore
var userFunctionStore = {
    sayType: function () {
        console.log(“I am a ” + this.type);
    },
    sayName: function () { // created this in the solution just to log the object’s name and score
        console.log(‘My name is ’ + this.name + ' and score is ' + this.score);
    }
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = “User”;
    user.name = name;
    user.score = score;
    return user;
}

// only admins can use functions added to the adminFunctionStore
var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
    return Object.assign( // Object.assign extends / overwrites properties on an object
        userFactory(name, score), // start with a new user object
        adminFunctionStore, // extend the object with the adminFunctionStore
        { type: “Admin” } // overwrite the “type” property
    );
}

// add a function to the adminFunctionStore
adminFunctionStore.sharePublicMessage = function () {
    console.log(‘Welcome Users’);
}

// /********* Testing the solution *********/
var adminEva = adminFactory(“Eva”, 5);

adminEva.sayType() // -> Logs “I am a Admin”
adminEva.sharePublicMessage() // -> Logs “Welcome users!”
adminEva.sayName() // -> Logs “My name is Eva and score is 5"

var adminBob = adminFactory(“Bob”, 2);

adminBob.sayType() // ->  Logs “I am a Admin”
adminBob.sharePublicMessage() // -> Logs “Welcome users!”
adminBob.sayName() // -> Logs “My name is Bob and score is 2"

var userJen = userFactory(“Jen”, 3);

userJen.sayType() // -> Logs “I am a User”
console.log(userJen.sharePublicMessage === undefined); // -> true
userJen.sayName() // -> Logs “My name is Jen and score is 3”
