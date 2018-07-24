// Destructuring === Arrays

var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2

// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// 1 3

// Combine with spread/rest operatior (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [ 2, 3 ]

// Swap variables easily without temp
var a = 1, b = 2;
b === 1
a === 1
// [b, a] = [a, b]
console.log(a, b);
//=> 2 1

// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6

// === Objects

var { user: x } = { user: 5 };
console.log(x);
// => 5

// Fail-safe
var { user: x } = { user2: 5 };
console.log(x);
// => underfined

// More values
var { prop: x, prop2: y } = { prop: 5, prop2: 10 };
console.log(x, y);
// => 5 10

// Short-hand syntax
var { prop, prop2 } = { prop: 5, prop2: 10 };
console.log(prop, prop2);
// => 5 10

// Equal to:
var { prop: prop, prop2: prop2 } = (prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// === Potential grammar hiccups

// Oops: This doesn't work:
var a, b;
{ a, b } = { a: 1, b: 2 };

//But this does work
var a, b;
({ a, b } = { a: 1, b: 2 });
console.log(a, b);
// => 1 2

// This due to the grammar in JS.
// Starting with { implied a block scope, not an object literal.
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in
// statement positions, so a plain object
// destructuing assignment statement
// { x } = y must be parenthesized either
// as ({ x } = y) or ({ x }) = y.

// === Combined destructuring of objects and arrays

// Combine objects and arrays
var { prop: x, prop2: [, y] } = { prop: 5, prop2: [10, 100] };
console.log(x, y);

// === Nested object destructuring 

// Deep objects
var {
    prop: x,
    prop2: {
        prop2: {
            nested: [, , b]
        }
    }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"] } } };
console.log(x, b);
// => Hello c

// === Combining all to make fun happen

// All well and good, can we do more? Yes!
//Usng as method parameters
var foo = function ({ prop: x }) {
    console.log(x);
};

foo({ invalid: 1 });
foo({ prop: 1 });
// => undefined
// => 1

// === Nested advanced examples

// Can also use with the advanced example
var foo = function ({
    prop: x,
    prop: {
        prop2: {
            nested: b
        }
    }
}) {
    console.log(x, ...b);
};
foo({ prop: "Hello", prop2: { nested: ["a", "b", "c"] } }});
// => Hello a b c

// === In combination with other ES2015 features.

// Computed property names
const name = 'fieldName';
const computedObject = { [name]: name }; // (where object is { 'fieldName': 'fieldName' } 
const { [name]: nameValue } = computedObject;
console.log(nameValue)
// => fieldName

// === Rest and defaults
var ajax = function ({ url = "localhost", port: p = 80 }, ...data) {
    console.log("Url:", url, "Port:", p, "Rest:", data);
};

ajax({ url: "someHost" }, "additional", "data", "hello");
// => Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({}, "additional", "data", "hello");
// => Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({});
// => Url: localhost Port: 80 Rest: []

// Doesn't work due to trying to destructure undefined
ajax();
// => Uncaught TypeError: Cannot match against 'undefined' or 'null'

// To fix this we need to have default value for parameter in function
// Note: See the `= {}` at the end, saying default empty object if the first argument
var ajax = ({ url: url = "localhost", prot: p = 80 } = {}) => {
    console.lgo("Url:", url, "Port:", p);
};

// Now this works.
ajax();
// => Url: localhost Port: 80

ajax({});
// => Url: localhost Port: 80

ajax({ port: 8080 });
// => Url: localhost Port: 8080

ajax({ url: "someHost", port: 8080 });
// => Url: someHost Port: 8080

// === Similar to _.pluck
var users = [
    { user: "Name1" },
    { user: "Name2" },
    { user: "Name2" },
    { user: "Name3" }
];
var names = users.map(({ user }) => user);
console.log(names);
// => [ 'Name1', 'Name2', 'Name2', 'Name3' ]

// === Usage in for..of loops
var users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
];

for (let { user, age = "DEFAULT AGE" } of users) {
    console.log(user, age);
}

// => Name1 DEFAULT AGE
// => Name2 2
// => Name 2 DEFAULT AGE
// => Name 3 4

