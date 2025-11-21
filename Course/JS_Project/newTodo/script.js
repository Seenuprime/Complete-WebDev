document.addEventListener("DOMContentLoaded", () => {
  let todoInput = document.querySelector("#todoInput");
  let todoAdd = document.querySelector("#addBtn");
  let todoListContainer = document.querySelector("#todoList");

  let storeTodo = [];

  todoAdd.addEventListener("click", () => {
    addToList();
  });

  function addToList() {
    if (todoInput.value.trim() === "") return;
    let todo = { id: Date.now(), name: todoInput.value.trim() };
    storeTodo.push(todo);
    render();
    todoInput.value = "";
  }

  function render() {
    todoListContainer.innerHTML = "";
    storeTodo.forEach((item) => {
      const li = document.createElement("li");
      li.className = "items";

      const textSpan = document.createElement("span");
      textSpan.textContent = item.name;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.dataset.id = item.id;

      li.appendChild(textSpan);
      li.appendChild(deleteBtn);
      todoListContainer.appendChild(li);
    });
  }
});
