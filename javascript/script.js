// var a = prompt("whats your age ?")
// if (a > 18) 
//     {
//      var b = prompt("whats your name : ")   
//     alert("hello " + b + "  you are an adult ")
// }
// else {
//     alert("nabaalik!!!!!")

// }
// console.log("your age is " +a+ " this is a normal console output ")

var a =10;
var qa =true;
console.log(a);

// let b =20
// let b;   
// shows error

let f=true;
f=true;
console.log(f);

var d=7;
d=10;
console.log(d); 

const pi=3.14159;
//pi=3;    // will give error in consoel;
console.log(pi);

/ //Scope
// //Global Scope -> var
var a=10;

function display(){
    console.log(a);
}
display();// can access global variable var a inside the function
{
    console.log(a); // can access global variable var a inside the block as well.
}
{
    let b=8;//block scope
const pi=12;//block scope
console.log(pi);
}
//const pi =3.14159;
console.log(pi);

console.log(b);