const marvelHeros = ["Tony", "Hulk", "Thor"]
const dcHeros = ["Superman", "Batman", "Flash"]

marvelHeros.push(dcHeros) // this merges the array but treating the whole 2nd array as differnent  element
console.log(marvelHeros[3][2])

const allHeros = marvelHeros.concat(dcHeros)  // it merges the array
console.log(allHeros)

const AllNewHeros = [...marvelHeros, ...dcHeros] // bettter method to merge the array then concate method
//console.log(AllNewHeros)

const anotherArr = [1,2,3,[4,5,6],7, [6,7,[4,5]]]

const real_another_array = anotherArr.flat(Infinity)  // spread the array like a broken glass
//console.log(real_another_array)

console.log(Array.isArray("Divyanshu"))  // check whether its an array or not
console.log(Array.from("Divyanshu"))   // converts into array
console.log(Array.from({name: "Divyanshu"})) //interesting cause samjh hi  hi paaya 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3))