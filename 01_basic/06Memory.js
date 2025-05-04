// ****************************Memory******************************//

//Two Type of memory : stack, heap

//Stack use at (primitive) --- We get copy of value by using this
//heap use at (Non-primitive) --- We get Refrence of original value by using this

let name1 = "hituuu"
let name2 = name1
console.log(name1);
console.log(name2);

//---------- stack 

let userone = {
    email:"user@gmail.com"
}
let usertwo = userone
usertwo.email = "hemant@gmail.com"

console.log(userone);
console.log(usertwo);

//---------- heap


