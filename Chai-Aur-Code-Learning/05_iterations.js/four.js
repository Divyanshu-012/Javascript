// const coding  = [ "abc ", "123", "456", "hs"]

// const values= coding.forEach( (item)=> {
//     console.log(item)
//     return item

// } )

// console.log(values)


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10]

// const newNums = myNums.filter( (num)=> num >4  );

// console.log(newNums)


// in case we use {}---->

const newNums = myNums.filter( (num)=> {
    return num>4
})

console.log(newNums)