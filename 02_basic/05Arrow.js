const user = {
    name: "John",
    age: 30,
    price: 100,

    welcomemessage: function(){
     console.log(`hieee ${this.name} your shoes cost ${this.price}`);  // this. is used to access cuurrent object properties in function
    }
}
user.welcomemessage(); // hieee John your shoes cost 100
user.name = "kanha"
user.welcomemessage(); // hieee kanha your shoes cost 100

console.log(this);     // {} this is empty object in global scope

/**************************Declare function using arrow*************************/

function music(){
    const song = "fakir"
    console.log(this.song);
}
music(); // undefined

const chai = function(){
    let username = "kanha"
    console.log(this.username); // undefined
}
chai(); // undefined

// arrow function
const chai2 = () => {
    let username = "kanha"
    console.log(this.username); // undefined
}
chai2(); // undefined

/************************Pure Core Arrow Function*******************************/

//basic syntax is 
() => {}

//hold in variable
// const usernnnn = (num1,num2) => {           //explicit return when we use curly braces and return keyword
//       return num1 + num2
// }

//const usernnnn = (num1,num2) => num1 + num2   // no need to use return keyword and curly braces if only one line of code is there is called implicit return

//const usernnnn = (num1,num2) => (num1 + num2) // if we want to return multiple lines of code then we need to use curly braces and return keyword 

//if we want to return object
const usernnnn = (num1,num2) => ({name: "anshhh"})  // if we want to return object then we need to use paranthesis () otherwise it will be treated as block of code
console.log(usernnnn(10,20))
