var addItems = document.getElementById("addItems");
var searchBox = document.getElementById("searchBox");
var ul = document.getElementById("ul");

var existingItems = [];

function inputLength() {
  return searchBox.value.trim().length;
}

function deleteItem() {
  var itemText = this.parentNode.textContent.trim().toLowerCase();
  var itemIndex = existingItems.indexOf(itemText);
  if (itemIndex !== -1) {
    existingItems.splice(itemIndex, 1);
  }
  this.parentNode.remove();
}

function createElement() {
  var newItemText = searchBox.value.trim().toLowerCase();

  if (existingItems.includes(newItemText)) {
    alert("Item already exists in the list.");
    return;
  }

  existingItems.push(newItemText);

  var li = document.createElement("li");
  li.textContent = searchBox.value;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteItem);

  li.appendChild(deleteButton);
  ul.appendChild(li);
  searchBox.value = "";
}

function afterClickButton() {
  if (inputLength() > 0) {
    createElement();
  } else {
    alert("Enter your item");
  }
}

function afterEnter(event) {
  if (inputLength() === 0 && event.keyCode === 13) {
    alert("Enter your item");
  } else if (event.keyCode === 13) {
    createElement();
  }
}

searchBox.addEventListener("keypress", afterEnter);
addItems.addEventListener("click", afterClickButton);
