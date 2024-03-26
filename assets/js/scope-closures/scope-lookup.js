var globalVar = "I'm global";

function myFunction() {
    var localVar = "I'm local";
    console.log(globalVar);
    console.log(localVar);
}

myFunction();