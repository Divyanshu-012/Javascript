const name = "Div"
const repoCount = 50

// console.log(name + repoCount + "Value"); // not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('divyanshu-fc-cf')

// console.log(gameName[0]);
//console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))  // PRINT THE CHAR OF THAT POSITION
// console.log(gameName.indexOf('y'))  // PRINT THE INDEX OF THE CHARACTER

const newString = gameName.substring(0,4) // PRINT ALL THE CHARS BETWEEN THE INDEXES GIVEN but not included the characters indicated by the end 
console.log(newString);

const anotherString = gameName.slice(0,3)  //not included the character indicated by the end limit
console.log(anotherString);

const newStringOne = "  DIV  "
console.log(newStringOne)
console.log(newStringOne.trim())  //removes extra spaces from start and end

const url = "https://div.com/div%20kapariya"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(url.includes('div'))
console.log(gameName.split('-'))
