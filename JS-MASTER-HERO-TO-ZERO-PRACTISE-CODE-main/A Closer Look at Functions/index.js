"use strict";
// Coding Challenge #1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0:JavaScript", "1:Python", "2:Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(
      prompt(
        `${this.question} \n${this.options.join("\n")}\n(Write option number)`
      )
    );
    typeof answer === "number" &&
      answer < this.answers.length ?
      this.answers[answer]++ : alert('you enter wrong!! try again :)')
    console.log(this.answers);
    this.displayResults(this.answers);
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// console.log(poll.options);
// console.log(poll.options.join(" "));
// console.log(poll.options.join("\n"));
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// **************challenge no 02***************
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click',()=>header.style.color = 'blue'

)
  })();

// **************challenge no 02***************