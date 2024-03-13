const user = {
    username: "Dk",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome in the website`);
        // because of "this" the value arent rigid they can can be updated
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this) ; // this gives empty parantehesis but the if we do this in browser we get windows



// const chai = function (){
//     let username = "Divyanshu"
//     console.log(this.username)
//     // now we arent able to access this inside a function it can only be accessed inside the objects
//     // this we will learn more in DOM manipulation
// }

// chai()

const chai = () => {
    //it is called arrow function it is similar to previous function 
    let username = "Divyanshu"
    console.log(this.username);

}

// chai()

// Basic arrow return---->

// const addTwo = (num1 , num2) => {
//     return num1 + num2

// }

// console.log(addTwo(3,4))



//++++++++++++++++  implicit return --->

//just remove the curly braces and no need to type return


// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username: "Divyanshu"})
//this is the benefit of using parenthesiswe can access objects and all too 




console.log(addTwo(3,4))