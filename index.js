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

/**
 * give a string and reverse each word in a sentence.
 */

const reverseStr = str => {
  let newStr = str
    .split("")
    .reverse()
    .join("");
  return newStr;
};
console.log(reverseStr("I am a boy"));
console.log(reverseStr("She is a girl"));

// let arr = ["a", "b", "c"];
// let dup = Array.from(arr);
// console.log(dup);
// let obj = { name: "somebody", age: 23 };
// let dupObj = { ...obj };
// let dupObj2 = Object.assign({}, obj);
// console.log(dupObj);
// console.log(dupObj2);

/**
 * Find a missing number in an unsorted array of n consecutive numbers,
 * where the upperbound and lowerbounds are defined.
 */

const findMissingNumber = arr => {
  // assuming there is one missing number
  let n = arr.length + 1;
  let sum = 0;
  let expectedSum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return expectedSum - sum;
};
console.log("should produce 7: ", findMissingNumber([4, 2, 6, 5, 1, 3, 8, 9]));
console.log("should produce 7: ", findMissingNumber([4, 6, 7, 5, 1, 3, 8, 9]));

/**
 * Remove duplicates of array and return arry with only unique elements.
 */

function uniqueArray(arr) {
  let hashmap = {};
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!hashmap.hasOwnProperty(arr[i])) {
      hashmap[arr[i]] = 1;
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(uniqueArray([1, 2, 2, 3, 5, 5, 4, 7]));
console.log(
  uniqueArray([1, 2, 2, 3, 5, 5, 4, 7, 1, 1, 3, 4, 4, 4, 4, 5, 6, 7])
);
console.log(
  uniqueArray(["mukti", "mctea", "mctea", "mcchai", "mctea", "mukti"])
);
console.log(
  uniqueArray([
    "Sally",
    "Sally",
    "Sally",
    "Tally",
    "Mally",
    "Pally",
    "Pally",
    "Mally",
    "Sally",
    "Tally",
    "Pally"
  ])
);
/**
 * What would be the outcome?
 */
function scheduleWork() {
  Promise.resolve().then(() => console.log("m1"));
  Promise.resolve().then(() => console.log("m2"));
  setTimeout(() => console.log("t1"), 0);
  setTimeout(() => {
    Promise.resolve().then(() => console.log("m3"));
    Promise.resolve().then(() => console.log("m4"));
    Promise.resolve().then(() => console.log("m5"));
    Promise.resolve().then(() =>
      Promise.resolve().then(() => console.log("m6"))
    );
  }, 0);
  setTimeout(() => console.log("t2"), 0);
  setTimeout(() => console.log("t3"), 0);
}
scheduleWork();
/**
 * Outcome: Precedence of microtasks over tasks in event loop
 * m1
 * m2
 * t1
 * m3
 * m4
 * m5
 * m6
 * t2
 * t3
 *
 */
