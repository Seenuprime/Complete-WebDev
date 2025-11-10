// Prototypal inheritance in JavaScript is a mechanism where objects inherit properties and methods directly from other objects through a prototype chain

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`This guy ${this.name} says Hello!`);
}

let person1 = new Person("Seenu");
person1.greet();