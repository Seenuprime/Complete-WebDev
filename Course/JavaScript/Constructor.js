function hello(name) {
  this.myName = name;
//   console.log(`Hello, ${this.myName}`);
}

hello("Seenu");

const obj = new hello("Seenu");
// console.log(obj.myName);

function greet(){
    this.message = "Welcome to JavaScript!";
    this.showMessage = function(){
        // console.log(this.message);
    }
}

let greetOcj = new greet()
// greetOcj.showMessage();

// ----------- ------- ----  another way 
function greet(message){
    this.message = message;
}

greet.prototype.showMessage = function(){
    return `Hello ${this.message}`
}

let greet2 = new greet("Seenu");
console.log(greet2.showMessage());