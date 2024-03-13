// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// High order array ---->

// const greetings = "Hell world!"
// for(const greet of greetings){
//     console.log(`Each character is ${greet}`)
// }


// const Arr = [ 1 ,2 , 3 ]
// for(const num of Arr){
//     console.log(num)
// }


//Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('US' ,"USA")
// map.set('IN', "INDIA")  //map is for unique values second time it won't run

//console.log(map);


for (const [key, value] of map) {
    // i can also write it as 'const key of map' then it will print as array
    // console.log(key, ':-', value)
    
}


const myObj = {
    game1: 'NFS',
    game2: 'Gta'
}

// for (const [key, value] of object) {
    // objects are not iterable like this
//     console.log(key, ':-', value
//     }
