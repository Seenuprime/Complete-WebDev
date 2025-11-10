let expr = document.getElementById("input");

function clicked(value) {
  try {
    if (value === "ac") {
      expr.value = "";
      return;
    } else if (value === "=") {
      let nums = expr.value.split(/[\+\-\*\/\%\pom]/).map(Number);
      let ops = expr.value.match(/[\+\-\*\/\%\pom]/g);

      let result = nums[0];
      for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") result += nums[i + 1];
        if (ops[i] === "-") result -= nums[i + 1];
        if (ops[i] === "*") result *= nums[i + 1];
        if (ops[i] === "/") result /= nums[i + 1];
        if (ops[i] === "+" && ops[i + 1] === "%") {
          result = (nums[i + 1] * nums[i]) / 100 + nums[i];
        }
        // // If you want to toggle the sign, use the following logic (example implementation):
        // if (ops[i] === "pom") result = -nums[i];
      }
      expr.value = result;
      return;
    }
    expr.value += value;
  } catch (e) {
    console.log(e);
  }
}
