function sayMyName(){
    console.log("D ")
    console.log("I ")
    console.log("V ")
    console.log("Y ")
    console.log("A ")
    console.log("N ")
    console.log("S ")
    console.log("H ")
    console.log("U ")

}

//sayMyName()

function addTwonumbers(Num1, Num2){
    // let result = Num1 + Num2
    // return result
    return Num1 + Num2

}
const result = addTwonumbers(3, 4)
// console.log("Result:", result)


//username===undefined can also be written as !username
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("divyanshu"))
//console.log(loginUserMessage("Divyanshu"))



/* knowledge for making e-commerce website */


function CalculateCartPrice(val1, val2, ...num1){
    return num1
    //val1 and val2 tooks 200 & 400 respectively
}

//console.log(CalculateCartPrice(200,400,500,5000))

const user = {
    username: "Divyanshu",
    price: 199
}


function handleObject(anyObject){
    //console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);


}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,600]


function returnSecondValue(getArray){
    return getArray[1]
}


// console.log(returnSecondValue(myNewArray))
//console.log(returnSecondValue([200,800,500,600]));




