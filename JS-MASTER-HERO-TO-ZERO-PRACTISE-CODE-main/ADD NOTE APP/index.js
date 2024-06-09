"use strict";
printNotes();

console.log("file attached");
let addBtn = document.querySelector("#addBtn");
let textArea = document.querySelector("#textArea");

addBtn.addEventListener("click", function () {
  console.log("btn click add");
  let notesObj;
  let textAreaValue = textArea.value;
  let getNotes = localStorage.getItem("notes");
  if (getNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(getNotes);
  }
  notesObj.push(textAreaValue);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  textArea.value = " ";
  printNotes();
});

function printNotes() {
  let getNotes = localStorage.getItem("notes");
  let mainContainerNotes = document.querySelector(".mainContainerNotes");
  console.log();

  let notesObj;
  if (getNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(getNotes);
  }
  let html = "";
  if (notesObj.length > 0) {
    notesObj.forEach((element, index) => {
      html += `
    <div class="card m-2 p-3 notes" id='notes' style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">
          ${element}
        </p>
        <button id='${index}' class="btn btn-primary deleteBtn" onclick="deleteNote(this.id)">DELETE</button>
      </div>
    </div>`;
      mainContainerNotes.innerHTML = html;
    });
  } else {
    mainContainerNotes.innerHTML = `plz add some some.........`;
  }
}

function deleteNote(index) {
  console.log(index);
  let getNotes = localStorage.getItem("notes");
  let notesObj;
  if (getNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(getNotes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  printNotes();
}
let search = document.querySelector("#search");

search.addEventListener("input", (e) => {
  let searchValue = search.value.toLowerCase();
  let cardNotes = document.getElementsByClassName("notes");
  Array.from(cardNotes).forEach(function (element) {
    let noteText = element.getElementsByTagName("p")[0].innerText;
    if (noteText.includes(searchValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    console.log(noteText);
  });
  console.log(cardNotes);
  console.log(searchValue);
});
