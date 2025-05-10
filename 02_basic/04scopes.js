{ }   //if this use in object it called object declaration
{ }   //if this use in function,if-else it called scope of that function

/*
| Scope Type   | Kaha banta hai?         | Kaha accessible hai?                    |
| ------------ | ----------------------- | --------------------------------------- |
| Global Scope | Function/block ke bahar | Har jagah (function/block ke andar bhi) |
| Local Scope  | Function ke andar       | Sirf us function ke andar               |
| Block Scope  | `{ }` block ke andar    | Sirf us block ke andar                  |
*/

//Global Scope Example: Global scope means the variable is accessible from anywhere in the code
let name = "Anshh baby";                // yeh global scope mein hai

function greet() {
  //console.log("Hello " + name);       // yahaan bhi 'name' accessible hai
}

greet(); // Output: Hello Anshh baby


//Local Scope Example: Local scope means the variable is accessible only within the function
{
  let age = 21; // yeh block scope mein hai
  //console.log("Inside block: " + age); // Output: 21
}

//console.log("Outside block: " + age); // ❌ Error: age is not defined


//Block Scope
if (true) {
  let age = 21;                          // Block scoped
  //console.log(age);                    // ✅ Accessible
}

//console.log(age);                      // ❌ Error: age is not defined

/************************NESTED FUNCTION************************/

function one(){
const name = "anshhh"
    function two(){
        const age = 21
        console.log(name);
    }
    two()
}
one() // Output: anshhh


