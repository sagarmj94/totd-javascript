document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  let editMode = false;
  let editItem = null;
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    console.log("text", todoText);
    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
    } else {
      alert("please add todo");
    }
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });
  function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    editBtn.innerText = `✏️`;
    removeBtn.innerText = `❌`;
    todoItem.appendChild(editBtn);
    todoItem.appendChild(removeBtn);
    todoList.append(todoItem);
  }
});
