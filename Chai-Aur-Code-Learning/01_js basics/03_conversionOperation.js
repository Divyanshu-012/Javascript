let score= "123abc";

console.log(typeof(score));
 
let valueInNumber = Number(score) // string ko number bna deta hai 
console.log(typeof valueInNumber);
console.log(valueInNumber); // print nhi kr paaya number cause 33abc number nhi hai



/* conversions--->
// '33' => 33
// "33abc" => NaN
// true => 1; false=> 0
*/


let isLoggedIn = "null";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=> true ;  0=> false
//""=> false basically empty strings
// " something is here" => true 


// **************************Operations**********************  

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");