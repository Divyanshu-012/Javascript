/* another way of declaring objects*/
// const tinderUser = new Object()    // singleton object
const tinderUser = {}  // non singleton object


tinderUser.id= "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        UserFullname : {
            Firstname: "Divyanshu",
            Lastname : "Kapariya"
        }
    }
}

// console.log(regularUser.fullname.UserFullname.Lastname)


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)  //{{}} this is jusyt an optional  prefer read doumentation{objecct assign mdn} for more knowledge

const obj3 = {...obj1, ...obj2} //preferred syntax than previous .assign
// console.log(obj3)



const users = [
    {
        id: 1,
        email: "d@gmail.com"

    },
    {
        id: 1,
        email: "d@gmail.com"

    },
    {
        id: 1,
        email: "d@gmail.com"

    },

    
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
    
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "0",
    courseInstructor: "Hitesh"

}
// course.courseInstructor


// this is a knowledge which will be used in react mainly known as 'destructring'
const{courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);




/*            json Talk---->        */  



// method 1
// {
//     " name": "dk",
//     "coursename": "js in hindi",
//     "price": "free"

// }

// method 2

// [
//     {},
//     {},
//     {}

// ]

//all these method 1 & 2 are API in json format full form -java script object notation