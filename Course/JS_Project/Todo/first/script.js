function take_input() {
  let input = document.getElementsByClassName("form-control")[0].value;

  if (input.length != 0) {
    // Create list item
    let item = document.createElement("li");
    item.style.listStyleType = "none";
    item.style.padding = "10px";
    item.style.borderBottom = "1px solid #ccc";
    item.style.fontSize = "18px";
    item.style.cursor = "pointer";
    item.style.backgroundColor = "#f9f9f9";
    item.style.color = "#333";
    item.style.borderRadius = "4px";
    item.style.display = "flex"; // to align text & button
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";

    // Text
    let span = document.createElement("span");
    span.textContent = input;
    item.appendChild(span);

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.border = "none";
    delBtn.style.background = "transparent";
    delBtn.style.cursor = "pointer";
    delBtn.style.fontSize = "18px";
    delBtn.style.color = "red";

    item.appendChild(delBtn);

    // Add to list
    document.getElementById("todo-list").appendChild(item);

    // Clear input
    document.getElementsByClassName("form-control")[0].value = "";

    // Click to mark completed
    span.addEventListener("click", function () {
      span.style.textDecoration = "line-through";
      span.style.color = "#999";
    });

    // Delete button logic
    delBtn.addEventListener("click", function (e) {
      item.remove();
    });
  }
}

document
  .getElementsByClassName("add_it")[0]
  .addEventListener("click", take_input);
