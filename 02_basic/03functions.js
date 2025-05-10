// Function Declaration
 
function babyy(){
    // console.log("A");
    // console.log("n");
    // console.log("s");
    // console.log("h");
}
babyy();

function addtwonum(num1, num2){   //parameters
    //console.log(num1 + num2);      //15, result : undefined
}

function addtwonum(num1, num2){   //parameters

    let result = num1 + num2;      //return value = 15     // 1st method to return value
    return result;              
    
    return num1 + num2;            //return value = 15    // 2nd method to return value
}

const result = addtwonum(6,9);       //arguments    
    // console.log("result :",result);  


function newuserlogin(username){
    return `${username} is loginn just now`   // 3rd method to return value
}

//console.log(newuserlogin("Kanha"))            //  "Kanha is loginn just now"

/*******************************if user is UNDEFINED****************************/

function newuserlogin(username){
    if(username === undefined){
       //console.log("Please enter your name");   //if its true, it will print this
       return
    }
    return `${username} is loginn just now`   // 3rd method to return value
}

// console.log(newuserlogin("hahaha"))            //if we pass argument it print,hahaha is loginn just now 
// console.log(newuserlogin())               //but if we dont pass argument it return, Please enter your name - undefined

/*******************************FUNCTIONS PART 2****************************/

function calculatecartprice(num2,num3,...num1){    //...num1 is a rest parameter it will return all the values in an array
    return num1;
}

console.log(calculatecartprice(100,200,300,400,500,600,700))   // 300,400,500,600,700 becoz they are rest parameters and we only return num1

/****************************Passing object through function*******************************/

const user ={
    name : "ansh",
    age : 22,
    emal : "www.google.com"
}

function userlogindetails(anyobject){           //use any parameter name for object to work with different objects
    console.log(`his name is ${anyobject.name} and his age is ${anyobject.age}`);  //
}

userlogindetails(user)  //  his name is ansh and his age is 22

userlogindetails({      // we can also pass object directly without creating a object
    name : "kanha",
    age : 23,
})

/****************************Passing array through function*******************************/

const arr = [1,2,3,4,5,6,7];

function returnvalue(wantarr){
    return wantarr[4];
}

console.log(returnvalue(arr));     // 5

console.log(returnvalue([1,2,3,4,5,6,7]));   // we can also pass array directly without creating a array

