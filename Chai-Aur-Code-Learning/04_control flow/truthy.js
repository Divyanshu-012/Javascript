const userEmail = ""

if(userEmail){
    console.log("got");

}else{
    console.log("dont got");
}


// falsy values

// false , 0, -0, BigInt 0n, "", null, undefined , NaN

// truthy values

//  "0" , 'false' , " " , [], {} , fucntion(){}


//IN CASE OF EMPTY ARRAY PREFRRED SYNTAX

// if (userEmail.length === 0 ){
//     console.log("Array is empty");
// }

// IN CASE OF EMPTY OBJECT

// const emptyObj = {}

// if (Object.keys(emptyObj).length ===0) {
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val 1 = 5?? 10
// val1 = null?? 5
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 50

// console.log(val1);


// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice<= 80 ? console.log("less than 80") : console.log("more than 80")

