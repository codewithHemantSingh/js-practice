const Arr = [0, 1, 2, 3, 4, 5]
const Arr1 = ["army", "navy", "force"]
const Arr2 = new Array(4,5,6,7,8)
console.log(Arr1[1]);

let fruits = ["Apple", "Banana", "Mango"];
console.log("My fruits array:", fruits);

//Array methods 

Arr.push(6)   //add elements in array from end
Arr.push(9)   //add elements in array from end
Arr.pop(6)    //remove elements in array from end
Arr.pop(9)    //remove elements in array from end

Arr.unshift(8)    //add elements in array from Start
Arr.shift()    //Remove elements in array from Start

console.log(Arr.includes(6));  //Check element exist return T/F
console.log(Arr.indexOf(5));  //Check element Index

const newarr = Arr.join();   //Adds all the elements of an array into a string and bind them

console.log(typeof newarr);  
console.log(newarr);
console.log(Arr);

//slice And splice Method

console.log(" A",Arr);
const xyz = Arr.slice(1, 3);
console.log(xyz);
console.log(" B",Arr);

const xyz1 = Arr.splice(1, 3);
console.log(" C",Arr);          //use  B to see what happn with b bcoz of slice
console.log(xyz1);

/********************** Array Part 2 *******************/

const heros = ["ironman","thor","spiderman"]
const dc = ["flash","panthom","cobra"]

heros.push(dc);   //merge both array //work on exist array
console.log(heros);
console.log(heros[3][2]);

const hero2 = heros.concat(dc);   //merge both array  //need a new array
console.log(hero2);

const hero3 = [...heros,...dc]      //spread use for merge and easy and more worth it
console.log(hero3);

const anotherarr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const useablearr = anotherarr.flat(Infinity)  //flat can spread array in single peace and return single array
console.log(useablearr);

console.log(Array.isArray("suhani"));  //check if it is array or not
console.log(Array.from("Suhani"));  //convert string / object anything into array
console.log(Array.from({name: "suku"}));  

let score1 = 100
let score2 = 400
let score3 = 700

console.log(Array.of(score1,score2,score3));     //creates a new array from any number of arguments