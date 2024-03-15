const people = [
    {
        name: "john",
        age: 20,
        height: 169

    },
    {
        name: "Whie",
        age: 22,
        height: 163

    },
    {
        name: "walker",
        age: 28,
        height: 189

    },

]

const getAges = (person) => person.age * 2;



// this is main syntax of map -->
const ages = people.map(getAges);
console.log(ages);


const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,

    }


});
console.log(newPeople)

// in mapping
// returns a new array
// the size of array is same as original array
// uses values of original array when making new one 