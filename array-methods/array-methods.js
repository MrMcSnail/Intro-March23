const { check, runTest, skipTest } = require("../test-api");

// For each of these tasks, replace the variable USE_ARRAY_METHOD with the use of an appropriate array method to satisfy the tests - No For Loops! >:(

skipTest("can sum numbers in a list using forEach()", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let sum = 0; // <- don't change this line

  // Try using .forEach() for this task

  USE_ARRAY_METHOD;

  check(sum).isEqualTo(120);
});

runTest(
  "can sum each number in the list plus it's index using forEach()",
  function () {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let sum = 0; // <- don't change this line

    // "forEach() part two: Using a for each again, sum each number in the list plus it's index, for this task you may want to look at the docs for how to access the index using a forEach()

    USE_ARRAY_METHOD;

    check(sum).isEqualTo(225);
  }
);

runTest("can check if there's milk in the fridge using includes()", function () {
    const fridge = ["sandwich", "limes", "tabasco", "cucumber", "milk", "cheese", "broccoli"];

    const isThereMilk = USE_ARRAY_METHOD;

    check(isThereMilk).isEqualTo(true)
})

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

skipTest("can check ");

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var USE_ARRAY_METHOD;
