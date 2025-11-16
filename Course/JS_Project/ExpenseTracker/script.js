document.addEventListener("DOMContentLoaded", () => {
  const inputExpense = document.querySelector('input[name="expense"]');
  const inputCost = document.querySelector('input[name="cost"]');
  const inputBtn = document.querySelector(".input-container button");
  const listContainer = document.querySelector(".list-container");

  // Read existing expenses (parse the stored JSON string) or start empty
  const expenses = JSON.parse(localStorage.getItem("user")) || [];

  function saveExpenses() {
    localStorage.setItem("user", JSON.stringify(expenses));
  }

  function render(items) {
    if (!listContainer) return;
    listContainer.innerHTML = "";
    items.forEach((e) => {
      const row = document.createElement("div");
      row.className = "expense-row";
      row.textContent = `${e.name} — $${e.cost}`;
      listContainer.appendChild(row);
    });
  }

  if (expenses.length > 0) render(expenses);

  inputBtn.addEventListener("click", () => {
    const name = inputExpense.value.trim();
    const cost = parseFloat(inputCost.value);

    if (!name || isNaN(cost)) {
      console.warn("Please enter a valid expense name and numeric cost.");
      return;
    }

    const newExpense = { id: Date.now(), name, cost };
    expenses.push(newExpense);
    saveExpenses();
    render(expenses);

    // clear inputs and provide quick feedback
    inputExpense.value = "";
    inputCost.value = "";
    console.log("Added expense:", newExpense);
  });
});
