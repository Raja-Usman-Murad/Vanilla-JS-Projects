let phoneNumber = document.getElementById("phone-number");
let button = document.getElementById("button");
let show = document.getElementById("show");

phoneNumber.addEventListener("input", () => {
  if (
    phoneNumber.value.length.toString() ===
    phoneNumber.getAttribute("maxlength")
  ) {
    phoneNumber.disabled = true;
  }
});

function cnicFormat(format, value) {
  let arr = value.split("");
  arr.map((e) => {
    format = format.replace("x", e);
    show.innerHTML = format;
  });
}

button.addEventListener("click", () => {
  console.log("btn clicked");
  let format = "xxxxx-xxxxxxx-x";
  let value = phoneNumber.value;
  cnicFormat(format, value);
});
