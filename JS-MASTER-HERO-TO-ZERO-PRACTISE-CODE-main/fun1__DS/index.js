// ***********************************JavaScript Fundamentals – Part 1(START)

// const country = "Pakistan";
// const continent = "Asia";
// let population = 79697;
// const isIsland = false;
// let language = "Urdu";
// let finland = "6000000";
// let averagePopulation = 33333333;
// let description = `${country} is in ${continent},
// and its ${population} million people speak ${language}`;

// console.log(country, continent, population, isIsland, language);

// console.log(population / 2);

// console.log(population > finland);

// console.log(population < averagePopulation);

// console.log(description);

// if (population > averagePopulation) {
//   console.log(`Portugal"s population is above ${averagePopulation}`);
// } else {
//   console.log(
//     `Portugal"s population is ${
//       averagePopulation - population
//     } million below average`
//   );
// }

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// let numNeighbours = "1";
// if (Number(numNeighbours) === 1) {
//   console.log("1 border");
// } else if (numNeighbours > 1) {
//   console.log("more than 1 border");
// } else {
//   console.log("no border");
// }

// if (language === "english" && population < 500 && !isIsland) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// population > averagePopulation
//   ? console.log(`${country} population is above average`)
//   : console.log(`${country} population is below average`);

// switch (language) {
//   case "chinese":
//     console.log("'MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("'Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;

//   default:
//     console.log("Great language too :D");
//     break;
// }
// ***********************************JavaScript Fundamentals – Part 1(END)

// ***********************************JavaScript Fundamentals – Part 1(Coding CHALLAENGES)(START)

// CHALLENGE 1
// let markHeight = 1.88;
// let markWeight = 95;
// let johnHeight = 1.76;
// let johnWeight = 85;
// let bmiMark = markWeight / (markHeight * markHeight);
// let bmiJohn = johnWeight / (johnHeight * johnHeight);
// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI, bmiMark, bmiJohn);

// CHALLENGE 2
// if (bmiMark > bmiJohn) {
//   console.log(`Mark BMI(${bmiMark}) is higher than John BMI(${bmiJohn})`);
// } else if (bmiJohn > bmiMark) {
//   console.log(`John BMI(${bmiJohn}) is higher than Mark  BMI(${bmiMark})`);
// } else {
//   console.log(`SAME BMI`);
// }

// CHALLENGE 3
// let dolphinAvg = 96 + 108 + 89 / 3;
// let koalasAvg = 88 + 91 + 110 / 3;
// let dolphinAvg = 97 + 112 + 101 / 3;
// let koalasAvg = 109 + 95 + 123 / 3;
// let dolphinAvg = 97 + 112 + 101 / 3;
// let koalasAvg = 109 + 95 + 106 / 3;
// if (dolphinAvg > koalasAvg && dolphinAvg > 100) {
//   console.log(`dolphin team win`);
// } else if (koalasAvg > dolphinAvg && koalasAvg > 100) {
//   console.log(`koalas team win`);
// } else if (koalasAvg === dolphinAvg && koalasAvg >= 100 && dolphinAvg >= 100) {
//   console.log(`DRAW`);
// }

// CHALLENGE 4
// let billValue = 430;
// let tip =
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(
//   `the bill was ${billValue},the tip is ${tip},and the total value is ${
//     billValue + tip
//   }`
// );
// ***********************************JavaScript Fundamentals – Part 1(Coding CHALLAENGES)(END)

// ***********************************JavaScript Fundamentals – Part 2(START)
//   function describeCountry(country, population, capitalCity) {
//     let description = `'${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return description;
//   };
// let country1 = describeCountry("pakistan", 123, "islamabad");
// let country2 = describeCountry("finland", 456, "helsinki");
// let country3 = describeCountry("turkey", 789, "anqara");
// console.log(country1, country2, country3);

// let worldPopulation = 7900;
// console.log(percentageOfWorld1(1441, worldPopulation));
// console.log(percentageOfWorld1(1211, worldPopulation));
// console.log(percentageOfWorld1(1311, worldPopulation));
// function percentageOfWorld1(population, worldPopulation) {
//   return (population / worldPopulation) * 100;
// }

// let worldPopulation = 7900;
// let percentageOfWorld1 = function (population, worldPopulation) {
//   return (population / worldPopulation) * 100;
// };
// console.log(percentageOfWorld1(1441, worldPopulation));
// console.log(percentageOfWorld1(1211, worldPopulation));
// console.log(percentageOfWorld1(1311, worldPopulation));

// let worldPopulation = 7900;
// let percentageOfWorld1 = (population) => {
//   return (population / worldPopulation) * 100;
// };
// console.log(percentageOfWorld1(1441, worldPopulation));
// console.log(percentageOfWorld1(1211, worldPopulation));
// console.log(percentageOfWorld1(1311, worldPopulation));

// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}  of the world`;
// }
// console.log(describePopulation("china", 1441));

// let populations = [123, 456, 789, 159];
// console.log(populations.length === 4);
// let percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// let neighbours = ["india", "china"];
// console.log(neighbours);
// neighbours.push("utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("germony"))
//   console.log("'Probably not a central European country :D");
// let china = neighbours.indexOf("china");
// neighbours[1] = "mansehra";
// console.log(neighbours);

// let myCountry = {
//   country: "pakistan",
//   capital: "islamabad",
//   language: "urdu",
//   population: 79696,
//   neighbours: ["india", "china"],
//   checkIsland: function () {
//     return (this.isIsland = !Boolean(this.neighbours.length));
//   },
//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language} speaking people , ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//   },
// };
// console.log(myCountry);
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people , ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
// myCountry.population = 555555;
// console.log(myCountry);
// myCountry["population"] = 79696;
// console.log(myCountry);
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// console.log(myCountry);

// let voters = 50;
// for (let index = 1; index <= voters; index++) {
//   console.log(`voter number ${index} is currently voting`);
// }

// let populations = [123, 456, 789, 159];
// console.log(populations);
// percentages2 = [];
// for (let index = 0; index < populations.length; index++) {
//   const element = populations[index];
//   percentages2.push(percentageOfWorld1(element));
// }
// console.log(percentages2);

// percentages3 = [];
// console.log(percentages3);
// let index = 0;
// while (index < populations.length) {
//   let element = populations[index];
//   percentages3.push(percentageOfWorld1(element));
//   index++;
// }
// console.log(percentages3);
// let listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// for (let index = 0; index < listOfNeighbours.length; index++) {
//   const element = listOfNeighbours[index];
//   // console.log(element);
//   for (let index = 0; index < element.length; index++) {
//     const element1 = element[index];
//     console.log(`neighbour ${element1}`);
//   }
// }
// ***********************************JavaScript Fundamentals – Part 2(END)

// ***********************************JavaScript Fundamentals – Part 2(Coding CHALLAENGES)(START)

// Coding Challenge #1
// function calcAverage(a, b, c) {
//   return (a + b + c) / 3;
// }
// let dolphinsAvg = calcAverage(85, 54, 41);
// let koalasAvg = calcAverage(23, 34, 27);
// console.log(dolphinsAvg, koalasAvg);
// function checkWinner(dolphinsAvg, koalasAvg) {
//   if (dolphinsAvg > 2 * koalasAvg) {
//     console.log(`dolpin win ${dolphinsAvg} vs ${koalasAvg}`);
//   } else if (koalasAvg >= 2 * dolphinsAvg) {
//     console.log(`koalas win ${koalasAvg} vs ${dolphinsAvg}`);
//   } else {
//     console.log(`no team win`);
//   }
// }
// checkWinner(dolphinsAvg, koalasAvg);

// Coding Challenge #2
// function calTip(billValue) {
//   return billValue >= 50 && billValue <= 300
//     ? billValue * 0.15
//     : billValue * 0.2;
// }
// let tip = calTip(400);
// console.log(tip);
// let billArr = [125, 555, 44];
// let tipArr = [calTip(billArr[0]), calTip(billArr[1]), calTip(billArr[0])];
// console.log(tipArr);
// let total = [
//   billArr[0] + tipArr[0],
//   billArr[1] + tipArr[1],
//   billArr[2] + tipArr[2],
// ];
// console.log(total);

// Coding Challenge #3
// let mark = {
//   name: "mark",
//   mass: 78,
//   height: 1.69,
//   calBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// let john = {
//   name: "john",
//   mass: 92,
//   height: 1.95,
//   calBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// console.log(john);
// mark.calBMI();
// console.log(john.calBMI());
// console.log(john);
// if (john.bmi < mark.bmi) {
//   console.log(`john BMI ${john.bmi} is less than marks BMI ${mark.bmi}`);
// }

// Coding Challenge #4
// let bill = [12, 13, 14, 15, 16];
// let tips = [];
// let totals = [];
// for (let index = 0; index < bill.length; index++) {
//   const element = bill[index];
//   tips.push(calTip(element));
//   totals.push(element + calTip(element));
// }
// function calTip(billValue) {
//   return billValue >= 50 && billValue <= 300
//     ? billValue * 0.15
//     : billValue * 0.2;
// }
// console.log(tips);
// console.log(totals);
// function calcAverage(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sum += element;
//   }
//   console.log(sum / arr.length);
// }
// calcAverage(bill);
// ***********************************JavaScript Fundamentals – Part 2(Coding CHALLAENGES)(END)

// ***********************************Developer Skills & Editor Setup(START)
// Coding Challenge #1
let arr = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let str = "";

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element <= 0) continue;
    str += `...${element}C in ${index + 1} day `;
  }
  // console.log(str);
}
printForecast(data2);
// ***********************************Developer Skills & Editor Setup(END)

// ****************Data Structures, Modern Operators and Strings (Coding CHALLAENGES) (Start)***********
// Coding Challenge #1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [player1, player2] = game.players;
// console.log(player1, player2);

// 2.
const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// 4.
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw);

// 6.
function printGoals(...players) {
  const totalScore = players.length;
  players.forEach((player, index) => {
    // console.log(`${player}, goal are ${index + 1}`);
  });
}
printGoals(...game.scored);

// 7.
// team1 < team2 && console.log("team 1 win");
// team1 > team2 && console.log("team 2 win");

// Coding Challenge #2
// 1:
// const gameScoredArray = game.scored;
// console.log(gameScoredArray);
for (const [goal, playerName] of game.scored.entries()) {
  // console.log(`GOAL:${goal+1} : ${playerName}`);
}

// 2.
const gameOddsAverage = Object.values(game.odds);

let avg = 0;
for (const oddVal of gameOddsAverage) {
  avg += oddVal;
  // console.log(avg);
}
avg /= gameOddsAverage.length;
// console.log(avg);

// 3.
for (const [teamName, oddValue] of Object.entries(game.odds)) {
  let str = teamName === "str" ? "draw" : game[teamName];
  // console.log(`Odd of ${str}: ${oddValue}`);
  // console.log(teamName, oddValue);
}

// 4.
const scorers = {};
for (const player of game.scored) {
  // 1.
  // if (scorers[player]) {
  //   scorers[player] = scorers[player] + 1;
  // } else {
  //   scorers[player] = 1;
  // }
  // 2.
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

// Coding Challenge #3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);
// console.log(gameEvents);
// 1.
const events = new Set(gameEvents.values());
const events1 = [...new Set(gameEvents.values())];
// console.log(events);
// console.log(events1);

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(
//   `"An event happened, on average, every ${90 / gameEvents.size} minutes"`
// );

// 4.
for (const [count, event] of gameEvents) {
  // console.log(count, event);
  // count < 45
  //   ? console.log(`FirstHalf ${count}: ${event}`)
  //   : console.log(`SecondHalf ${count}: ${event}`);
  // console.log(count);
  // console.log(event);
}

// Coding Challenge #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
let button = document.querySelector("button");
// console.log(button, textArea);

function camelCase(string) {
  let str = string.split("\n");
  for (const [i, x] of str.entries()) {
    const [first, second] = x.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(40)}  ${":)".repeat(i + 1)}`);
  }
}
button.addEventListener("click", () => {
  let textArea = document.querySelector("textarea").value;
  // console.log(textArea);
  camelCase(textArea);
});

// ***********************************Data Structures, Modern Operators and Strings (Coding CHALLAENGES) (END)
