// ***********Array************ 


const myArr = [0,1,2,3,4,5]
const myHeros = [" shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4) // ismei nhi dete h hum square bracket 
//console.log(myArr[1]);


//Array methods

// myArr.push(7)  // push adds the number/element on the given array at last as given
// myArr.pop()  //pop removes the element from the array 


// myArr.unshift(9)  //unshift is not much recommended as it will too time consuming and will give too much much load on software as it will shift every element unlike push ----> it simply adds a number at start
// myArr.shift(9) //removes first elemnt

// console.log(myArr.includes(9)) //finds if the element is present or not 
// console.log(myArr.indexOf(4))  // indexOf mei 'O' is capital -------->tells which element is present the particular index position

const newArr = myArr.join() // this changes array into the string type


// console.log(typeof myArr)  // type of array is object
// console.log(typeof newArr) 


//slice, splice



console.log("A", myArr)

const myn1 = myArr.slice(1,3)  // slice doesnt include closing limit

console.log(myn1)
console.log("B", myArr);


const myn2 = myArr.splice(1,3) // splice includes closing limit too but this is not a only disfference between splice and slice
console.log("B", myArr)  // splice also manipulates the actuall array
console.log(myn2);



