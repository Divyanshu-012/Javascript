// fetch('https://something.com').then().catch().finally()
// response ---> .then()
// error ---> .catch()
// everything ---> .finally()

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed ")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2 completed')
        resolve()

    }, 1000);
}).then(function () {
    console.log("Promied 2 consumed")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Chai",email:"chai@example.com"})
    }, 1000)

})

promiseThree.then(function (user) {
    console.log(user)

})

//fourth

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Div", pasword: "123"})
        }
        else{
            reject('Error:smthng went wrong')
        }
        
    }, 1000);
})


const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The Promise is either resolved or rejected"))

// fifth 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Javascript", pasword: "123"})
        }
        else{
            reject('Error:smthng went wrong')
        }
        
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);

    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data); 
//     } 
//     catch(error){
//         console.log("E: ", error);

// }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error)
)
     





