document.addEventListener("DOMContentLoaded", () => {
  let expense = document.querySelector('input[name="expense"]');
  let cost = document.querySelector('input[name="cost"]');
  let addbtn = document.querySelector("button");
  const listcontainer = document.querySelector(".list-container");

  let allExpenses = JSON.parse(localStorage.getItem("user")) || [];

  function render(items) {
    listcontainer.innerHTML = "";
    items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "items";
      row.dataset.id = item.id;

      const content = document.createElement("p");
      content.textContent = `${item.expenseName} - $${item.expenseCost}`;

      const button = document.createElement("button");
      button.textContent = "delete";

      row.appendChild(content);
      row.appendChild(button);

      listcontainer.appendChild(row);

      row.addEventListener("click", (e) => {
        if (e.target.nodeName !== "BUTTON") return;
        const parent = e.target.closest(".items");
        const idToDate = Number(parent.dataset.id);

        allExpenses = allExpenses.filter((item) => item.id !== idToDate);

        savelocal(allExpenses);
        render(allExpenses);
      });
    });
  }

  render(allExpenses);

  addbtn.addEventListener("click", () => {
    let expenseName = expense.value.trim();
    let expenseCost = cost.value.trim();
    if (expenseName === "" && expenseCost === "") return;

    let store = {
      id: Date.now(),
      expenseName,
      expenseCost,
    };

    allExpenses.push(store);
    savelocal(allExpenses);

    render(allExpenses);
    expense.value = "";
    cost.value = "";
  });
});

function savelocal(items) {
  localStorage.setItem("user", JSON.stringify(items));
}
