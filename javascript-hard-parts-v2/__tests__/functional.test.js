const {
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatches,
  multiMap,
  commutative,
  objFilter,
  rating,
  pipe,
  highestFunc,
} = require("../functional");

test("Challenge 1: accepts one input and adds 2 to it", () => {
  expect(addTwo(3)).toBe(5);
});

test('Challenge 2: accepts one input and adds an "s" to it', () => {
  expect(addS("pizza")).toBe("pizzas");
});

test(
  "Challenge 3: return a new array filled with numbers that are the result" +
    "of using the 'callback' function on each element of the input array",
  () => {
    expect(map([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5]);
  }
);

test(
  "Challenge 4: forEach takes an array and a callback, and runs" +
    "the callback on each element of the array",
  () => {
    let alphabet = "";
    const letters = ["a", "b", "c", "d"];
    forEach(letters, (char) => (alphabet += char));
    expect(alphabet).toBe("abcd");
  }
);

test("Challenge 5: use forEach inside of mapWith instead of using a for loop", () => {
  expect(mapWith([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5]);
});

test(
  "Challenge 6:  The function reduce takes an array and" +
    "reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.",
  () => {
    const nums = [4, 1, 3];
    const add = (a, b) => a + b;
    expect(reduce(nums, add, 0)).toBe(8);
  }
);

test(
  "Challenge 7: Construct a function intersection that compares input" +
    "arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!",
  async () => {
    expect(
      await intersection([
        [5, 10, 15, 20],
        [15, 88, 1, 5, 7],
        [1, 10, 15, 5, 20],
      ])
    ).toStrictEqual([15, 5]);
  }
);

test("Challenge 8: Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.", () => {
  expect(
    union([
      [5, 10, 15],
      [15, 88, 1, 5, 7],
      [100, 15, 10, 1, 5],
    ])
  ).toStrictEqual([5, 10, 15, 88, 1, 7, 100]);
});

test("Challenge 9: Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.", () => {
  expect(
    objOfMatches(
      ["hi", "howdy", "bye", "later", "hello"],
      ["HI", "Howdy", "BYE", "LATER", "hello"],
      (str) => str.toUpperCase()
    )
  ).toStrictEqual({ hi: "HI", bye: "BYE", later: "LATER" });
});

test("Challenge 10: Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.", () => {
  expect(
    multiMap(
      ["catfood", "glue", "beer"],
      [
        (str) => str.toUpperCase(),
        (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
        (str) => str + str,
      ]
    )
  ).toStrictEqual({
    catfood: ["CATFOOD", "Catfood", "catfoodcatfood"],
    glue: ["GLUE", "Glue", "glueglue"],
    beer: ["BEER", "Beer", "beerbeer"],
  });
});

test("Challenge 11: Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).", () => {
  const multBy3 = (n) => n * 3;
  const divBy4 = (n) => n / 4;
  const subtract5 = (n) => n - 5;

  expect(commutative(multBy3, divBy4, 11)).toBe(true);
  expect(commutative(multBy3, subtract5, 10)).toBe(false);
  expect(commutative(divBy4, subtract5, 48)).toBe(false);
});

test("Challenge 12: Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.", () => {
  const startingObj = {};
  startingObj[6] = 3;
  startingObj[2] = 1;
  startingObj[12] = 4;
  const half = (n) => n / 2;

  expect(objFilter(startingObj, half)).toStrictEqual({ 2: 1, 6: 3 });
});

test("Challenge 13: Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.", () => {
  const isEven = (n) => n % 2 === 0;
  const greaterThanFour = (n) => n > 4;
  const isSquare = (n) => Math.sqrt(n) % 1 === 0;
  const hasSix = (n) => n.toString().includes("6");
  const checks = [isEven, greaterThanFour, isSquare, hasSix];

  expect(rating(checks, 64)).toBe(100);
  expect(rating(checks, 66)).toBe(75);
});
test("Challenge 14: Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.", () => {
  const capitalize = (str) => str.toUpperCase();
  const addLowerCase = (str) => str + str.toLowerCase();
  const repeat = (str) => str + str;
  const capAddlowRepeat = [capitalize, addLowerCase, repeat];

  expect(pipe(capAddlowRepeat, "cat")).toBe("CATcatCATcat");
});
test("Challenge 15: Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.", () => {
  const groupOfFuncs = {};
  groupOfFuncs.double = (n) => n * 2;
  groupOfFuncs.addTen = (n) => n + 10;
  groupOfFuncs.inverse = (n) => n * -1;

  expect(highestFunc(groupOfFuncs, 5)).toBe("addTen");
  expect(highestFunc(groupOfFuncs, 11)).toBe("double");
  expect(highestFunc(groupOfFuncs, -20)).toBe("inverse");
});
