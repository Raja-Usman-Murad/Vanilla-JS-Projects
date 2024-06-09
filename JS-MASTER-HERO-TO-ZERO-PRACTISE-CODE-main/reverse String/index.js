console.log("usman");
let text = document.getElementById("text");
let text1 = document.getElementById("text1");
let disabledField = document.getElementById("disabledField");
let disabledField1 = document.getElementById("disabledField1");

function inverseAlphabet(value) {
  let arr = value.split("").reverse().join("");
  disabledField.value = arr;
}
text.addEventListener("input", () => {
  console.log("btn clicked");
  let textValue = text.value;
  inverseAlphabet(textValue);
});

function inverseWord(value) {
  let arr = value.split(" ").reverse().join(" ");
  console.log(arr);
  disabledField1.value = arr;
}
text1.addEventListener("input", () => {
  console.log("btn clicked");
  let textValue = text1.value;
  inverseWord(textValue);
});
