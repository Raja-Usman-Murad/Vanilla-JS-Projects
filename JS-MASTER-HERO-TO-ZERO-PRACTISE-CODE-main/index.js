// @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @(codewars.com)##############
// task 1:
/*let arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const countOccurrences = function (arr, val) {
  return arr.reduce(function (a, v) {
    return v === val ? a + 1 : a;
  }, 0);
};
// Examples
console.log(countOccurrences(arr, true));
*/

/* ##############task 2:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
 Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

 Note for F#: The input will be of (int list list) which is a List<List>

 Example Input
 [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
 */
/*
let data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
function seniorOpen(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "senior" : "open"
  );
}

function seniorOpen(data) {
  let arr = [];
  data.forEach(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      arr.push("senior");
    } else {
      arr.push("open");
    }
  });
  return arr;
}
console.log(seniorOpen(data));
*/

//##############task 3:
/*function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
// createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
.reverse().join("");
}
##############task 4:
function reverseString(s) {
split jo hy har word ko new arr main add krta hy split arr ko reverse krti hy or join arr ko string banata hy or "" jorty hain coma hataty hay.
  return s.split("").reverse().join("");
}
console.log(reverseString("Hello"));
*/
