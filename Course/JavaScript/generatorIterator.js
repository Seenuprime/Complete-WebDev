function* numberGenerator() { // this is a generator function
    yield 1;
    yield 2;
    yield 3;
}

const iterator = numberGenerator(); // create an iterator from the generator

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);