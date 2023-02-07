const { check, runTest, skipTest } = require("../../test-api");

// For each of these tasks, replace the variable USE_ARRAY_METHOD with the use of an appropriate array method to satisfy the tests - No For Loops! >:(

runTest("can sum numbers in a list using forEach()", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let sum = 0; // <- don't change this line

  // Try using .forEach() for this task

  USE_ARRAY_METHOD;

  check(sum).isEqualTo(120);
});

skipTest(
  "can sum each number in the list plus it's index using forEach()",
  function () {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let sum = 0; // <- don't change this line

    // "forEach() part two: Using a for each again, sum each number in the list plus it's index, for this task you may want to look at the docs for how to access the index using a forEach()

    USE_ARRAY_METHOD;

    check(sum).isEqualTo(225);
  }
);

skipTest("can check if there's milk in the fridge using includes()", function () {
    const fridge = ["sandwich", "limes", "tabasco", "cucumber", "milk", "cheese", "broccoli"];

    // Try using .includes() for this task

    const isThereMilk = USE_ARRAY_METHOD;

    check(isThereMilk).isEqualTo(true)
});

skipTest("adds an isCool property with a value of true if the name value includes 'ch'", function () {
  const devs = [{name: 'Mitch', age: 25}, {name: 'Rich', age: 28}, {name: 'Simon', age: 22}, {name: 'Jonathan', age: 26}, {name: 'Bela', age: 23}, {name: 'Michael', age: 25}];

  // Try using .map() for this task

  const coolDevs = USE_ARRAY_METHOD;

  check(coolDevs).isEqualTo([{name: 'Mitch', age: 25, isCool: true}, {name: 'Rich', age: 28, isCool: true}, {name: 'Simon', age: 22}, {name: 'Jonathan', age: 26}, {name: 'Bela', age: 23}, {name: 'Michael', age: 25, isCool: true}]);
});

skipTest("finds the items less than or equal to 1.00", function () {
  const vendingMachine = [{item: 'Mars Bar', cost: 0.65}, {item: 'Nik Naks', cost: 1.39}, {item: 'Diet Coke', cost: 1.35}, {item: 'Lucozade', cost: 1.55}, {item: 'kitkat', cost: 0.60}, {item: 'Freddo', cost: 1.00}];

  // Try using .filter() for this task

  const lessThan1 = USE_ARRAY_METHOD;

  check(lessThan1).isEqualTo([{item: 'Mars Bar', cost: 0.65}, {item: 'kitkat', cost: 0.60}, {item: 'Freddo', cost: 1.00}]);
});

skipTest("finds the first number that is less than 10", function () {
  const nums = [35, 104, 66, 3, 99, 4, 1, 50];

  // Try using .find() for this task

  const lessThan10 = USE_ARRAY_METHOD;

  check(lessThan10).isEqualTo(3);
});

skipTest("finds a question", function () {
  const strings = ['I like', 'Where we are', 'When we drive', 'In your car', 'Who sings that?'];

  // Try using .some() for this task
  // There is a useful string method available that may help you to check what a string ends with...

  const includesOdd = USE_ARRAY_METHOD;

  check(includesOdd).isEqualTo(true);
});

skipTest("checks for all ratings above or including 6", function () {
  const films = [
    {title: "Black Panther", rating: 7.3},
    {title: "Mr Bean's Holiday", rating: 6.0},
    {title: "Up", rating: 8.3},
    {title: "I Love You, Man", rating: 7.0}
  ];

  // Try using .every() for this task

  const allAbove6 = USE_ARRAY_METHOD;

  check(allAbove6).isEqualTo(true);
});

skipTest("can get the names of staff over 28", function () {
  const staff = [
    { name: "Anat", age: 22 },
    { name: "Paul C", age: 31 },
    { name: "Paul R", age: 27 },
    { name: "Vel", age: 29 },
    { name: "Sam", age: 30 },
    { name: "Jonny", age: 32 },
    { name: "Ant", age: 26 },
    { name: "Mitch", age: 28 },
    { name: "Tom", age: 24 },
    { name: "Alex", age: 24 },
  ];

  const staffOver28 = USE_ARRAY_METHOD;

  const namesOfStaffOver28 = USE_ARRAY_METHOD;

  check(namesOfStaffOver28).isEqualTo(["Paul C", "Vel", "Sam", "Jonny"]);
});

// ADVANCED

// Well done for getting this far! As an added bonus have another look at the first task and refactor using the .reduce() method.
// Still going? Now try refactoring the second challenge to use .reduce() as well!