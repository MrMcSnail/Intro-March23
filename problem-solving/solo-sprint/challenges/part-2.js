const { check, runTest, skipTest } = require("../../../test-api/index.js");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

// QUESTION 1

function areValuesEqual() {
// This function should take two arguments and return true if they are *strictly* equal, and false otherwise
}

// BONUS POINTS: you can complete this problem without resorting to if statements! Give it a try!

skipTest("areValuesEqual() checks if two values are strictly equal", function () {
    check(areValuesEqual(10, 10)).isEqualTo(true);
    check(areValuesEqual("hello", "hello")).isEqualTo(true);
    check(areValuesEqual("good", "bad")).isEqualTo(false);
    check(areValuesEqual("10", 10)).isEqualTo(false);
});

// QUESTION 2

function isEvenLength() {
// This function should take a string as an argument and return true if its length is even, and false otherwise
}

skipTest("isEvenLength() checks if string has even number of characters", function () {
    check(isEvenLength("hello")).isEqualTo(false);
    check(isEvenLength("northcoders")).isEqualTo(false);
    check(isEvenLength("abcd")).isEqualTo(true);
    check(isEvenLength("even")).isEqualTo(true);
});

// QUESTION 3

function collectTheVowels(str) {
// This function should take a string as its argument and return a string consisting of all vowels found in the input (retaining the order)
}

skipTest("collectTheVowels() takes a string of many letters and returns a string containing those vowels in correct order", function () {
    check(collectTheVowels("a")).isEqualTo("a");
    check(collectTheVowels("bcd")).isEqualTo("");
    check(collectTheVowels("bcdepiaouk")).isEqualTo("eiaou");
    check(collectTheVowels("hello world")).isEqualTo("eoo");
});

// QUESTION 4

function accessItem(arr, index) {
// This function should take two arguments, an array and an index, and return the element at that specified index
// The index provided may be equal to or greater than the length of the given array. In this case, rather than counting past the end of the array where there are no values, the indexing should be considered to "loop back around" and continue from the start of the array
// For examples of this behaviour, look at the second group of tests below
}

runTest("accessItem() can access an item inside in an array with a given index below the array length", function () {
    check(accessItem(["a", "b", "c", "d"], 2)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 0)).isEqualTo("a");
    check(accessItem(["a", "b", "c", "d"], 3)).isEqualTo("d");
});

skipTest("accessItem() can access an item inside in an array with an index equal to or above the array length", function () {
    check(accessItem(["a", "b", "c", "d"], 4)).isEqualTo("a");
    check(accessItem(["a", "b", "c", "d"], 6)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 10)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 11)).isEqualTo("d");
});

// QUESTION 5

function findDayOfTheWeek(num) {
// This function should take a number from 1 to 7 inclusive, and return a string of the corresponding day of the week
}

// BONUS POINTS: Try and solve this without using if statements! Hint: a 'lookup object' might be useful here.

runTest("findDayOfTheWeek() returns the day of the week given a passed number", function () {
    check(findDayOfTheWeek(2)).isEqualTo("Tuesday");
    check(findDayOfTheWeek(3)).isEqualTo("Wednesday");
    check(findDayOfTheWeek(1)).isEqualTo("Monday");
    check(findDayOfTheWeek(6)).isEqualTo("Saturday");
    check(findDayOfTheWeek(7)).isEqualTo("Sunday");
});

// QUESTION 6

function createPercentage() {
// This function should take two numbers, a and b, and return a string representing the value of a as a percentage of b
}

skipTest('createPercentage() creates a percentage string in the form "--%"', function () {
    check(createPercentage(1, 2)).isEqualTo("50%");
    check(createPercentage(50, 100)).isEqualTo("50%");
    check(createPercentage(2, 3)).isEqualTo("67%");
    check(createPercentage(3, 4)).isEqualTo("75%");
    check(createPercentage(1, 7)).isEqualTo("14%");
});

// QUESTION 7

function extractNumber() {
// This function should take a string containing a number wrapped in a pair of round brackets  and return said number
}

skipTest("extractNumber() should return the number buried inside a string", function () {
    check(extractNumber("lasjdasasj(123)asljdlajk")).isEqualTo(123);
    check(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd")).isEqualTo(44687);
    check(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd")).isEqualTo(19827);
    check(extractNumber("qwasdasdfsyer(5601)iusdfsdfsd")).isEqualTo(5601);
    check(extractNumber("qwasdasdfsyer(29)iusdfsdfsd")).isEqualTo(29);
});