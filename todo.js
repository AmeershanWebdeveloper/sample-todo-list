let form = document.querySelector("#todolist");
console.log(form);

form.onsubmit = function (event) {
  event.preventDefault();
  let newItemValue = document.querySelector("#newItem").value;
  let li = document.createElement("li");
  li.className = "newItem";
  li.innerHTML = newItemValue;
  let deleteButton = document.createElement("span");
  deleteButton.className = "delteteButton";
  let mark = document.createElement("p");
  mark.className = "mark";
  mark.innerHTML = "+";
  deleteButton.append(mark);
  li.append(deleteButton);
  document.querySelector("ul").appendChild(li);
  deleteButton.addEventListener("click", () => {
    li.classList.toggle("leave");
    li.addEventListener("transitionend", () => {
      li.remove();
    });
  });
};
