// Immediately Invoked Function E xpression(IIFE)

//us of this iife is that the global variable wont be able to pollute the function 

(function chai(){
    //named IIFE
    console.log(`DB connected`);

})(); // this semi colon is must here cause invoke to kr dega pr usko ye pta nhi chlega ki rukna kha h au rrukega hi  nhi to agla kaise krega

( (name)=> {
    // simple(unnamed) IIFE
    console.log(`DB connected two ${name}`);
})("Divyanshu")
