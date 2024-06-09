"use strict";
//***** TASK1: Write a JavaScript function to check whether an `input` is an array or not******
var is_array = function (input) {
  return Array.isArray(input);
};
// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 4, 0]));

//***** TASK2: Write a JavaScript function to clone an array.******
function array_Clone(arr) {
  // return arr.slice();
  // return arr.slice(0);
  return arr.slice(0);
  // return arr.map((e) => e);
}
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

//***** TASK3: Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.******
var first = (array, n) => {
  if (n == undefined) {
    console.log("usman n");
    return array[0];
  }
  if (n < 0) return [];
  return array.slice(0, n);
};
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

//***** TASK4: Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.******
var last = (array, n) => {
  if (n == undefined) {
    return array[array.length - 1];
  }
  return array.slice(Math.max(array.length - n, 0));
};
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

//***** TASK5:Write a simple JavaScript program to join all elements of the following array into a string.******
function myColor(colors) {
  let colorsCopy = colors.slice();
  console.log(colorsCopy.toString());
  console.log(colorsCopy.join());
  console.log(colorsCopy.join("+"));
}
myColor(["Red", "Green", "White", "Black"]);
