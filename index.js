// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// sum of several arrays
/**
 * you are given an array of several arrays that each contain integers and
 * your goal is to write a function that adds all the numbers in all the arrays
 * For example if the input is [[3, 2], [1], [4, 12]] then your program should
 * output 22.
 *
 */

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

console.log(sumArr([[3, 2], [1], [4, 12]])); //prints 22
console.log(sumArr([[1, 3, 2], [1, 4], [4, 12, 10]])); // prints 37
console.log(sumArr([[43, 21], [11, 30, 44], [4, 12], [67, 78, 33, 21], [55]]));

/**
 * print the numbers divisible by three between low and high numbers.
 */

const divisibleThree = (low, high) => {
  let divisible = [];
  for (let i = low; i <= high; i++) {
    if (i % 3 === 0) {
      divisible.push(i);
    }
  }
  return divisible;
};

console.log(divisibleThree(3, 393));

/**
 * Check palindrome
 */

const checkPlindrome = str => {
  const revStr = str
    .split("")
    .reverse()
    .join("");
  // console.log(revStr);
  if (str == revStr) return true;
  return false;
};

console.log(checkPlindrome("madam"));
console.log(checkPlindrome("water"));
console.log(checkPlindrome("racecar"));

/**
 * Write a function to yield sum of all the odd numbers from a list of
 * numbers.
 */

function sumOfOdd(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0) {
      sum = sum + nums[i];
    }
  }
  return sum;
}
console.log(sumOfOdd([1, 2, 3, 4, 5, 6, 7]));
console.log(sumOfOdd([1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15, 21, 55, 60]));

/**
 * Write a function that adds 1 to each elements of the arrand finally
 * returns the sum of new array.
 */

const sumOfArryAdditionOne = arr => {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
    newArr.push(arr[i]);
  }
  for (let j = 0; j < newArr.length; j++) {
    sum += newArr[j];
  }
  return sum;
};

console.log(sumOfArryAdditionOne([1, 2]));
console.log(sumOfArryAdditionOne([1, 2, 3]));
console.log(sumOfArryAdditionOne([1042, 1414, 2585258]));
