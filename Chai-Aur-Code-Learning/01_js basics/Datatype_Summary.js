// primitive Data type

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId)

//Reference (Non Primitive)
//array, Objects, functions

const heros = ["Bheem , kalia, Raju"]; // array
let myObj = {
    name: "Raju",
    age: "19",


}
const myFunction = function(){
    console.log("Hello World");

}
console.log(typeof anotherId)  //symbol
console.log(typeof myFunction)  //function
console.log(typeof heros)  //object
console.log(typeof myObj)  //object





//*******************************************

// stack(primtive)    , Heap (Non-Primitive)

let myYoutubeName = "fuckme.com"

let anothername= myYoutubeName
anothername = "chairaurcode"
console.log(anothername)
console.log(myYoutubeName)


//example of heap  --->
// its more like call by reference 

let userOne = {
    email: "abc@gmailcom",
    upi: "user@sbi"
}
let userTwo = userOne
userTwo.email = "xyz@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

