// Asyncronous Greeting
// ----- Asynchronous JavaScript is a programming approach that enables non-blocking execution of tasks

function greet(){
    console.log("Hello from explore.js");
}

setTimeout(() => {
    greet();
}, 2000);

