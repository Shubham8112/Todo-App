const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const printDiv = document.querySelector(".print");

// addBtn.addEventListener("click", () => {
//   if (input.value.trim() === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   const p = document.createElement("p");
//   p.innerText = input.value.trim();

//   printDiv.appendChild(p);

//   input.value = "";
// });
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const todo = document.createElement("div");
  todo.className = "todo";

  const p = document.createElement("p");
  p.innerText = input.value;

  const del = document.createElement("span");
  del.innerText = "delete";

  del.classList.add("delete-btn");

  del.addEventListener("click", () => {
    todo.remove();
  });

  todo.appendChild(p);
  todo.appendChild(del);

  printDiv.appendChild(todo);

  input.value = "";
});
