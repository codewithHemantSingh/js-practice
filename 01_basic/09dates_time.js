const tarikh = new Date()
console.log(tarikh);                                //2025-05-02T18:26:21.767Z
console.log(tarikh.toDateString());                 //Fri May 02 2025
console.log(tarikh.toISOString());                  //2025-05-02T18:26:21.767Z
console.log(tarikh.toJSON());                       //2025-05-02T18:26:21.767Z
console.log(tarikh.toLocaleString());               //5/2/2025, 6:26:21 PM
console.log(tarikh.toLocaleTimeString());           //6:26:21 PM

const newtarikh = new Date(2025, 0, 29)
//const newtarikh = new Date("01-29-2025,12:00:00")
console.log(newtarikh.toLocaleString());             //Wed Jan 29 2025

let newdate = new Date()
console.log(newdate);                           //2025-05-02T18:45:00.879Z
console.log(newdate.getDate());                 //2
console.log(newdate.getTime());                //1746211500879
console.log(newdate.getFullYear());            //2025


