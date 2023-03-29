const { check, runTest, skipTest } = require("../../test-api/index.js");
/*
What is this asking me to do? 
>>>>>
In this function, you need to find out which letter is missing. 

What other data or methods might I need to use to create this behaviour
>>>>>
But you can't use a reference lookup table (i.e. no array or object with the whole alphabet in it) so you will have think outside the box!

What behaviours should the code have?
What are the inputs?
What are the outputs?
>>>>>
This function needs to take a list and needs to return the letter it is missing.

What are the inputs?
>>>>>
You will always get a sorted array of consecutive letters, 
and it will always have exactly one letter missing. 
The length of the array will always be at least 2. 
The array will always contain letters in only one case.
*/

/*
- take list as an array
- returns an empty string if no letters are missing
- find letter that is missing:
  - iterate through the array
  - keep track of the previous char
  - find out if the current letter is the next in the sequence
    - if its not, the missing letter will be the letter that comes before the current letter and after the previous letter. 
    >>>>>>>>>>Sequencing of the alphabet in JS? Can it increment or decrement chars in JS?
*/

function findMissingLetter(letters) {
  let missingLetter = "";
  let previousLetter = letters[0];

  for (let i = 1; i < letters.length; i++) {
    // if this letter is not the next letter in the sequence, return it.
    const currentCharacterCode = letters[i].charCodeAt(0);
    const previousCharacterCode = previousLetter.charCodeAt(0);

    const isNotNextLetter = previousCharacterCode !== currentCharacterCode - 1;

    if (isNotNextLetter) {
      missingLetter = String.fromCodePoint(currentCharacterCode - 1);
      return missingLetter;
    };
    
    previousLetter = letters[i];
  }
  return missingLetter;
}

console.log("findMissingLetter()");


runTest("returns an empty string if no letters are missing", function () {
  check(findMissingLetter(["A", "B", "C", "D", "E"])).isEqualTo("");
});

runTest("returns a missing capital letter", function () {
  check(findMissingLetter(["A", "B", "C", "E"])).isEqualTo("D");
});

runTest("returns a missing lower case letter", function () {
  check(findMissingLetter(["e", "f", "g", "i"])).isEqualTo("h");
});
