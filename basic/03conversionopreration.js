//Conversion operations 
let score = "30abc"
console.log(score);

let Isscore = Number(score)
console.log(typeof Isscore); //it show number as type
console.log(Isscore);  //it show NaN (Not A Number)

// "33" => 33
// "33abc" => NaN
//  true => 1  false => 0

let isbool = 1
let booland = Boolean(isbool)
console.log(booland);

// 1 => true  0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);