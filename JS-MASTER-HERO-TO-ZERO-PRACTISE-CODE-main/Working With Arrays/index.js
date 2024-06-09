"use strict";
// ******challenge 1*************

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
function checkDogs(dogsJulia, dogsKate) {
  let dogsJulia1 = dogsJulia.slice();
  //   console.log(dogsJulia1);

  dogsJulia1.splice(0, 1);
  dogsJulia1.splice(-2);
  //   console.log(dogsJulia1);

  let correctedArray = dogsJulia1.concat(dogsKate);
  //   console.log(correctedArray);

  correctedArray.forEach((element, index) => {
    element >= 3
      ? console.log(
        `dog number ${index + 1} is an adult and is ${element} years old`
      )
      : console.log(`dog number ${index + 1} is still a puppy`);
  });
}
// checkDogs(dogsJulia, dogsKate);

// ******challenge 2*************
function calcAverageHumanAge(dogsAges) {
  // First way
  //   let humanAge = [];
  //   let age18 = [];
  //   let sum = 0;

  //   dogsAges.forEach((age, index) => {
  //     if (age <= 2) {
  //       humanAge.push(2 * age);
  //     } else {
  //       humanAge.push(16 + age * 4);
  //     }
  //   });

  //   console.log(humanAge);

  //   humanAge.forEach((elem) => {
  //     if (elem >= 18) {
  //       age18.push(elem);
  //     }
  //   });

  //   console.log(age18);

  //   age18.forEach((elem) => (sum += elem));
  //   let avg = sum / age18.length;

  //   console.log(avg);

  // second way
  let humanAge = dogsAges.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  console.log(humanAge);

  let age18 = humanAge.filter((elem) => elem >= 18);

  console.log(age18);

  let avg = age18.reduce((accu, elem) => accu + elem, 0) / age18.length;

  console.log(avg);
}

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// ******challenge 3*************
function calcAverageHumanAgeChain(dogsAges) {
  return dogsAges
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((elem) => elem >= 18)
    .reduce((accu, elem, i, arr) => accu + elem / arr.length, 0);
}
// console.log(calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3]));
// console.log(
//   calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3, 34, 46546, 8689, 6989])
// );


console.log((Math.trunc(Math.random() * 6 )) + 1 );

// ******challenge 4*************
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// 1.
dogs.forEach((elem, i) => {
  elem.recommendedFood = Math.trunc(elem.weight ** 0.75 * 28);
});

console.log(dogs);

// 2.
let sarahDog = dogs.find((elem) => elem.owners.includes('Sarah'));

console.log(sarahDog.curFood > sarahDog.recommendedFood ? 'eating too much' : 'eating too little');

// 3.
const ownersEatTooMuch = dogs.filter(elem => elem.curFood > elem.recommendedFood).flatMap(elem => elem.owners);

const ownersEatTooLittle = dogs.filter(elem => elem.curFood < elem.recommendedFood).flatMap(elem => elem.owners)

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some((elem => elem.curFood === elem.recommendedFood)));

// 6.
console.log(dogs.some((elem => elem.curFood > (elem.recommendedFood * 0.90) && elem.curFood < (elem.recommendedFood *
  1.10))));

// 7.
const dogsEatingAnOkaAamount = dogs.filter((elem => elem.curFood > (elem.recommendedFood * 0.90) && elem.curFood < (elem.recommendedFood *
  1.10)));
console.log(dogsEatingAnOkaAamount);

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

