//enables storing a collection of multiple items under a single variable name

const car = {
    name: "huhhh",
    owner: "Anshhh",
    age: 20,
    islogin: true,
    email: "www.google.com"
}

console.log(car.age);       // . dot use to access perperty names
console.log(car["name"]);   //use to access property names that are not valid identifiers

car.email = "www.aman.com"
//Object.freeze(car)           //used to freeze an object
car.email = "www.suhani.com"
console.log(car["email"]);

car.greeting = function(){
    console.log("hello car use");
}
car.greetingtwo = function(){
    console.log(`hello use, ${this.name}`)
}
console.log(car.greeting());
console.log(car.greetingtwo());

/******************* Objects 2 ************************/

const sex = {}        //empty object

sex.name = "ansh"    //adding properties
sex.age = 20,
sex.gender = true,
console.log(sex);    

//object nesting
const num = {
    firstname: "asnh",
    fullname: {
        completename: {
            last: "suhani",
            sirname: "kardam"
        }
    }
}
console.log(num.fullname.completename.last);  //accescing nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign(obj1, obj2)     //merging two objects using object.assign
console.log(obj3);

console.log(Object.keys(obj3));          //used to get keys of object
console.log(Object.values(obj3));       //used to get Values of object
console.log(Object.entries(obj3));     //used to get both key and values of object in form of array
