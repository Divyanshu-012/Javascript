// ****Singleton*****
//object.create

//  object literals 

const mySym = Symbol("Key1")



const JsUser = {
    name: "Divyanshu",  "full name" : "Divyanshu Kapariya",
    [mySym]:"myKey1", // it could have been accessed w/o these brackets[] but then the type of symbol would have been string not symbol basically this is more accurate syntax or say correct syntax 
     
    age: 19,
    location: "Gorakhpur",
    email: "div123@gmail.com"


}  //inmei jo 'name:' aur 'email:' hai na vo ek string hi h samjho 
//like 'full name is string and also written in form of string now this cant be accessd by using .operator'


// console.log(JsUser[mySym])
// console.log(typeof mySym)

// //how can we access objects --->


//console.log(JsUser.email)  // not just a single method
//console.log(JsUser["email"]) // iska fayda ye h ki object mei jo element bante hai (ex.name) vo string ke roop mei bante hai to  unko access krne ke lie .object waala method kaam nhi aaega

//console.log(JsUser["full name"])  // for example this one which explained above

JsUser.email = "fuckoff@chatgpt"
// Object.freeze(JsUser)  // this basically freezes the object from further edit
JsUser.name= "Daaddy"
JsUser.email="Div@microsoft.com"
//console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User ");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name} `);
}

console.log(JsUser.greeting)  // this is not returning function but showing that there is some function
console.log(JsUser.greetingTwo())