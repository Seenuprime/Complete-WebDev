document.addEventListener("DOMContentLoaded", () => {
  let btns = document.querySelectorAll(".items button");
  let checkoutBtn = document.querySelector(".checkout-btn");
  let cartitems = document.querySelector(".cart-items");
  let checkout = document.querySelector(".checkout");

  let total_cost = 0;
  btns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const parentDiv = event.currentTarget.parentElement;
      const dish = parentDiv.querySelector("p").innerHTML;

      const dish_cost = dish.split(".")[1];
      total_cost += Number(dish_cost);
      console.log(total_cost);

      updateCartItems(dish);

      checkout.querySelector(".total")?.remove();
      checkout.insertAdjacentHTML(
        "afterbegin",
        `<p class="total">Total: ₹${total_cost}</p>`
      );
      checkoutBtn.style.display = "block";
    });
  });

  cartitems.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return;

    const parent_div = event.target.parentElement;
    const delete_item = parent_div.querySelector("p").textContent;
    parent_div.remove();

    total_cost -= Number(delete_item.split(".")[1]);

    checkout.querySelector(".total")?.remove();
    if (total_cost > 0) {
      checkout.insertAdjacentHTML(
        "afterbegin",
        `<p class="total">Total: ₹${total_cost}</p>`
      );
    } else {
      checkoutBtn.style.display = "none";
    }
  });

  checkoutBtn.addEventListener("click", () => {
    alert(`Your total bill is ₹${total_cost}`);
    total_cost = 0;
    cartitems.innerHTML = "";
    checkout.querySelector(".total")?.remove();
    checkoutBtn.style.display = "none";
  });

  function updateCartItems(item) {
    cartitems.innerHTML += `
    <div class='Citems'>
    <p>${item}</p> 
    <button>Delete</button>
    </div>
    `;
  }
});
