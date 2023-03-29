const { check, runTest, skipTest } = require("../../test-api/index.js");

function extractNumber(string) {
  const firstBracketIndex = string.indexOf("(");
  const secondBracketIndex = string.indexOf(")");
  const extractedNumber = string.slice(firstBracketIndex + 1, secondBracketIndex);

  const value = parseInt(extractedNumber);
  // OR Number(extractedNumber)
  return value;
}

// This function should take a string containing a number wrapped in a pair of round brackets  and return said number
// take a string 
// find the brackets 
// extract the number
// return the number

runTest("extractNumber() should return the number buried inside a string", function () {
  check(extractNumber("lasjdasasj(123)asljdlajk")).isEqualTo(123);
  check(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd")).isEqualTo(44687);
  check(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd")).isEqualTo(19827);
  check(extractNumber("qwasdasdfsyer(5601)iusdfsdfsd")).isEqualTo(5601);
  check(extractNumber("qwasdasdfsyer(29)iusdfsdfsd")).isEqualTo(29);
});
