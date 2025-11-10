const person = {
    name : "John Doe",
    greet(){
        console.log(this.name);
    }
}

person.greet();