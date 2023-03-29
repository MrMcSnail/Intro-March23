const { check, runTest, skipTest } = require("../../test-api/index.js");

/*
This function marks passwords out of 7 using the scores below.
Invalid inputs should return 0.

Score	Criteria	Example
1 Less than four characters	e.g. bob
2	Less than nine characters	e.g. bobbybob
3	More than eight characters and all letters	e.g. bobbobbob
4	More than eight characters includes a number	e.g. bobbobbob1
5	More than eight characters includes a number and special character	e.g. bobbob1#2$
6	More than twelve characters includes a number	e.g. bobbobbobbob123
7	More than twelve characters includes a number and special character	e.g. bobbobbob1!2@3#

Special characters: ! @ £ # $ % ^ & *
*/
function passwordScore(password) {
  let score = 0;
  const passwordLength = password.length;

  const isAllLetters = /^[a-z]+$/i.test(password);
  const includesNumber = /\d+/.test(password);
  const hasSpecialCharacter = /[!@£#$%^&*]+/.test(password);

  // const isLessThan4 = passwordLength < 4;
  // const isBetween4_and_8 = passwordLength < 9 && passwordLength > 3;
  // const isMoreThan8_LettersOnly = passwordLength > 8 && isAllLetters;

  // const isBetween8_and_12_HasNumber_NoChars =
  //   passwordLength > 8 && passwordLength < 13 && includesNumber && !hasSpecialCharacter;

  // const isBetween8_and_12_HasNumber_HasChars =
  //   passwordLength > 8 && passwordLength < 13 && includesNumber && hasSpecialCharacter;

  // const isMoreThan12_HasNumber_NoChars = passwordLength > 12 && includesNumber && !hasSpecialCharacter;
  // const isMoreThan12_HasNumber_HasChars = passwordLength > 12 && includesNumber && hasSpecialCharacter;

  // switch (true) {
  //   case isLessThan4:
  //     return 1;
  //   case isBetween4_and_8:
  //     return 2;
  //   case isMoreThan8_LettersOnly:
  //     return 3;
  //   case isBetween8_and_12_HasNumber_NoChars:
  //     return 4;
  //   case isBetween8_and_12_HasNumber_HasChars:
  //     return 5;
  //   case isMoreThan12_HasNumber_NoChars:
  //     return 6;
  //   case isMoreThan12_HasNumber_HasChars:
  //     return 7;
  //   default:
  //     return 0;
  // }

  if (passwordLength < 4) {
    score = 1;
  } else if (passwordLength < 9 && passwordLength > 3) {
    score = 2;
  } else if (passwordLength > 8 && passwordLength < 12) {
    if (isAllLetters) {
      score = 3;
    } else if (includesNumber) {
      score = hasSpecialCharacter ? 5 : 4;
    }
  } else if (passwordLength > 12) {

    if (isAllLetters) {
      score = 3;
    } else if (includesNumber) {
      score = hasSpecialCharacter ? 7 : 6;
    }
  }

  return score;
}

console.log("passwordScore()");

runTest("scores 1 for less than four characters", function () {
  check(passwordScore("bob")).isEqualTo(1);
});

runTest("scores 2 for less than nine characters", function () {
  check(passwordScore("bobbybob")).isEqualTo(2);
});

runTest("scores 3 for more than eight characters and all letters", function () {
  check(passwordScore("bobbobbob")).isEqualTo(3);
});

runTest("scores 4 for more than eight characters includes a number", function () {
  check(passwordScore("bobbobbob1")).isEqualTo(4);
});

runTest("scores 5 for more than eight characters includes a number and special character", function () {
  check(passwordScore("bobbob1#2$")).isEqualTo(5);
});

runTest("scores 6 for more than twelve characters includes a number", function () {
  check(passwordScore("bobbobbobbob123")).isEqualTo(6);
});

runTest("scores 7 for more than twelve characters includes a number and special character	", function () {
  check(passwordScore("bobbobbob1!2@3#")).isEqualTo(7);
});
