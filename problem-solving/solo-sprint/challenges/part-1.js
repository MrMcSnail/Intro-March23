const { check, runTest, skipTest } = require("../../../test-api/index.js");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

// QUESTION 1

function connectStrings() {
// This function should take 2 strings and join them together with a space in between
// return this newly created string
}

runTest("connectStrings() can join 2 strings together", function () {
    check(connectStrings("hello", "world")).isEqualTo("hello world");
    check(connectStrings("paul", "rogerson")).isEqualTo("paul rogerson");
    check(connectStrings("blue", "sky")).isEqualTo("blue sky");
});

// QUESTION 2

function getLength() {
// return the length of the passed string
}

skipTest("getLength() returns the correct string length", function () {
    check(getLength("jonny")).isEqualTo(5);
    check(getLength("jd")).isEqualTo(2);
    check(getLength("rosa")).isEqualTo(4);
});


// QUESTION 3

function capitaliseString() {
// return the passed string as upper case
}

skipTest("capitaliseString() can capitalise a single word", function () {
    check(capitaliseString("bang")).isEqualTo("BANG");
    check(capitaliseString("apple")).isEqualTo("APPLE");
    check(capitaliseString("abc")).isEqualTo("ABC");
});

// QUESTION 4

function modulo() {
// This function should take two arguments a and b, and return the remainder of the division of a / b
}

skipTest("modulo() returns the correct remainder", function () {
    check(modulo(10, 2)).isEqualTo(0);
    check(modulo(119, 10)).isEqualTo(9);
    check(modulo(50, 6)).isEqualTo(2);
});

// QUESTION 5

function accessObject(obj, key) {
// This function should take an object and a key as its arguments and return the value found at the provided key in the input object
}

skipTest("accessObject() can access a property value using a key", function () {
    check(accessObject({ name: "jonny", age: 32 }, "name")).isEqualTo("jonny");
    check(accessObject({ name: "jonny", age: 32 }, "age")).isEqualTo(32);
});

// QUESTION 6

function makeAllUpperCase(arr) {
// This function should take an array of strings as an argument and return an array consisting of the same strings in upper case (retaining the order)
}

skipTest("makeAllUpperCase() can convert all strings to upper case", function () {
    check(makeAllUpperCase(["a", "b", "c"])).isEqualTo(["A", "B", "C"]);
    check(makeAllUpperCase(["I", "love", "coding"])).isEqualTo(["I", "LOVE", "CODING"]);
});

// QUESTION 7

function getEvenNumbers(arr) {
// This function should take an array of numbers as an argument and return an array containing all even numbers from the input (retaining the order)
}

skipTest("getEvenNumbers() can get all the even numbers from an array of numbers", function () {
    check(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).isEqualTo([2, 4, 6, 8, 10]);
    check(getEvenNumbers([9, 100, 13, 20])).isEqualTo([100, 20]);
    check(getEvenNumbers([78, 5, 9, 11, 24])).isEqualTo([78, 24]);
});