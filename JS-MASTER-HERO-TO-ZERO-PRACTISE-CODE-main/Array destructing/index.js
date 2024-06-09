"use strict";
const retaurant = {
  name: "raja",
  location: "mansehra",
  categories: ["italian", "pizza", "oragnic"],
  startMenu: ["garlic", "bread", "egg"],
  mainMenu: ["Pizza", "pasta", "risotto"],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelievery: function ({ time, name }) {
    // console.log("obj raja usman");
    // console.log(time);
    // console.log(name);
  },
};

/* *****************************SPREAD OPERATOR DESTRUCTURING*********************/
const arr = [1, 2, 3];
// console.log(arr);
const newArr = [...arr, 4, 5, 6];
// console.log(newArr);
/* *****************************SPREAD OPERATOR DESTRUCTURING*********************/

/* *****************************OBJECT DESTRUCTURING*********************/
const { name, openingHours, categories } = retaurant;
// console.log(name, openingHours, categories);

// variable name different
const {
  name: restuarantName,
  openingHours: hours,
  categories: tags,
} = retaurant;
// console.log(restuarantName, hours, tags);

// defaultVAlues
const { menu = [], location = "abbottabad" } = retaurant;
// console.log(menu, location);

// mutating variable
let a = 4141;
let b = 547;
const obj = { a: 23, b: 24, c: 25 };
({ a, b } = obj);
// console.log(a, b);

// nestedObjects
const {
  thur: { open, close },
} = openingHours;
// console.log(open, close);

retaurant.orderDelievery({
  time: "22:00",
  name: "usman",
});

/* *****************************OBJECT DESTRUCTURING*********************/

/* *****************************ARRAY DESTRUCTURING*********************/
let [first, second] = retaurant.categories;
const [first1, , second1] = retaurant.categories;
// console.log(first, second);
// console.log(first1, second1);
[first, second] = [second, first];
// console.log(first, second);

const [starter, main] = retaurant.order(2, 2);
// console.log(starter, main);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
// console.log(i, j, k, l);

// default values
const [p, q, r, s = 1] = nested;
// console.log(p, q, r, s);
/* *****************************ARRAY DESTRUCTURING*********************/

/* *****************************OBJECT ENHANCEMENT*********************/
// 1.
const firstName = "RAJA";
const middleName = {
  middleName: "usman",
};
const obj3 = {
  year: 2021,
  firstName,
  middleName,
  lastName: "murad",
  calAge() {
    // console.log(this.year - 1999);
  },
};
// console.log(this.year - 1999);
obj3.calAge();
// console.log(obj3);
let name1 = "middleName";
// console.log(obj3.middleName[name1]);
// console.log(obj3.middleName["middleName"]);

/* *****************************OBJECT ENHANCEMENT*********************/

/* *****************************SHORT CIRCUITING && ||*********************/
// || jo first  value true ho ge ly lay ga agr koi true na oe tou last vali lay ga
let a1 = 0;
let a2 = 20;
// console.log(a1 || null || 10);
// console.log(a1 || null);

// NULISH VALUES
// console.log(a1 ?? null ?? undefined);

// && agr first  value false ho ge tu agy ni jae ga usy e return kr dy ga agr sari true oe tu last vali ly ga
let a3 = 10;
let a4 = 20;
// console.log(null && a3 && a4);
// console.log(!null && !a3 && a4);
// console.log(!null && !a3 && !a4);
// console.log(true && a3 && a4);
/* *****************************SHORT CIRCUITING && ||*********************/

/* *****************************OPTIONAL CHAINING*********************/
let days = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];
for (const day of days) {
  const open = retaurant?.openingHours?.[day]?.open ?? "closed";
  // console.log(`on ${day} ,we open at ${open}`);
}
/* *****************************for of loop(ARRAYS)*********************/
let days1 = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];
for (const [index, day] of days.entries()) {
  // console.log(day);
  // console.log(`${index} : ${day}`);
}
/* *****************************for of loop(ARRAYS)*********************/

/* *****************************for of loop(OBJECTS)*********************/
let obj5 = {
  name: "raja",
  lname: "usman",
};
for (const value of Object.values(obj5)) {
  // console.log(value);
}
/* *****************************for of loop(OBJECTS)*********************/

/* *****************************OBJECTS COPY SPREAD OPERATOR*********************/
let obj4 = {
  name: "usman",
  lname: "murad",
};
// console.log(obj4);
let newObj4 = { ...obj4 };
// console.log(newObj4);
newObj4.lname = "raja";
// console.log(newObj4);
/* *****************************OBJECTS COPY SPREAD OPERATOR*********************/

/* *****************************WEB API DATA*********************/
let webAPIobj = {
  count: 3,
  recipes: [
    { name5: "raja", age: 23 },
    { name5: "usman", age: 24 },
    { name5: "murad", age: 25 },
  ],
};
const {
  recipes: [
    { name5, age },
    { name5: name6, age: age8 },
    { name5: name7, age: age9 },
  ],
} = webAPIobj;
const arr9 = [name5, age, name6, name7, age9, age8];
const objData = webAPIobj;
console.log(objData);
console.log(arr9);
/* *****************************WEB API DATA*********************/
