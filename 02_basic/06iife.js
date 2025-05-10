// IMMEDIATELY INVOKED FUNCTION EXPRESSION
// IIFE is a function that runs as soon as it is defined
//use for remove global scope pollution

//()() //first used to wrap the function and then 2nd () is used to call the function its IIFE syntax

// basic example
function chai(){
    console.log(`helooo`)
}
chai(); // helooo

// IIFE example -- named iife
(function chai1(){
    console.log(`helooo`)
})();         // ; is used to prevent errors in some cases to break the code

// IIFE example -- anonymous iife
(() => {
    console.log(`hey babyyy girlll`); 
})()