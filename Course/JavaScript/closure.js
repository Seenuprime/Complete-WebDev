// A closure in JavaScript is a function that retains access to variables from its outer (lexical) scope, even after the outer function has finished executing.


function count() {
  let counter = 3;
  return function () {
    counter++;
    return counter;
  };
}

let increment = count();
console.log(increment());

console.log(increment());
console.log(increment());
console.log(increment());
