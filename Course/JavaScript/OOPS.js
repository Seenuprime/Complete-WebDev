/**
 * Object-Oriented Programming in JavaScript
 * 
 * Objects:
 * - Key building blocks of JavaScript
 * - Collections of properties and methods
 * - Created using object literals {} or constructors
 * 
 * Encapsulation:
 * - Private fields using # prefix (ES2022+)
 * - Closures for data privacy
 * - Getters/setters for controlled access
 * 
 * Polymorphism:
 * - Method overriding in child classes
 * - Same interface, different implementations
 * - Dynamic method dispatch
 * 
 * Abstraction:
 * - Hide complex implementation details
 * - Show only necessary features
 * - Use interfaces and abstract classes
 * 
 * @example
 * // Encapsulation
 * class BankAccount {
 *   #balance = 0;
 *   deposit(amount) { this.#balance += amount; }
 * }
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes}
 */

// Basic Class Example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

// Inheritance Example
class Employee extends Person {
    #salary; // Private field

    constructor(name, age, role) {
        super(name, age);
        this.role = role;
        this.#salary = 0;
    }

    setSalary(amount) {
        this.#salary = amount;
    }

    getInfo() {
        return `${this.name} is a ${this.role}`;
    }
}

// Usage Examples
const person1 = new Person("Alice", 25);
console.log(person1.greet()); // "Hello, I'm Alice"

const emp1 = new Employee("Bob", 30, "Developer");
emp1.setSalary(75000);
console.log(emp1.getInfo()); // "Bob is a Developer"

// Objects Example
const car = {
    brand: 'Toyota',
    model: 'Camry',
    start() {
        console.log('Engine started');
    }
};

// Encapsulation Example
class CreditCard {
    #number;
    #cvv;
    constructor(number, cvv) {
        this.#number = number;
        this.#cvv = cvv;
    }
    
    getLastFourDigits() {
        return this.#number.slice(-4);
    }
}

// Abstraction Example
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error('Abstract class cannot be instantiated');
        }
    }
    
    calculateArea() {
        throw new Error('Method must be implemented');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Polymorphism Example
class Animal {
    makeSound() {
        return 'Some sound';
    }
}

class Dog extends Animal {
    makeSound() {
        return 'Woof!';
    }
}

class Cat extends Animal {
    makeSound() {
        return 'Meow!';
    }
}