// better and alternative ietraion method for arrays



const coding = ["ruby", "python", "js", "cpp"]


//     1----->
// coding.forEach(function (val){
//     console.log(val)
// })


//     2---->

// coding.forEach( (val)=>{
//     console.log(val)

// }) 

//      3------->


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

//   4---->

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)

//     // it will print the value of --> array + index of array +  whole array

// })


// 5 ---->



const MyCoding = [
    {
        languageName: "javascript",
        languagefile: "js"

    },
    {
        languageName: "java",
        languagefile: "java"

    },
    {
        languageName: "python",
        languagefile: "py"

    }
]

MyCoding.forEach( (item) => {
    console.log(item.languageName)

})