function one(){
    const Username = "dk"

    function two(){
        const website = "youtube"
        //console.log(Username);

        
    }
    //console.log(website)
    two()
}

one()

if (true) {
    const username = "Dk"
    if (username ==="Dk"){
        const website = " youtube"
        //console.log(username + website)
    }
}

// +++++++++++++++++  interesting  +++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
    //it can access value even if accessed before declaring
}

console.log(addTwo(6))

const addTwo = function(num){
    return num + 2
    //it cant access value which initialised before declaring function
}

//this concept is called hoisting