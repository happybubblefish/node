// var is deprecating, use let instead, for variable which will not change uses const
var name = 'Lin Cong'
var age = 18
var hasHobbies = true

function summerizeUser(userName, userAge, userHobbies) {
    return 'Name is ' + userName + ', age is ' + userAge + ', has hobby is ' + userHobbies
}

console.log(summerizeUser(name, age, hasHobbies))

//arrow function
const add = (a, b) => {
    return a + b
}

console.log(add(2, 3))

//even more shorter version
const add2 = (a, b) => a + b
console.log(add2(5, 10))

//====================Object=======================
const person = {
    name: 'Lin Cong',
    age: 38,
    greet() {   //don't use arrow function, otherwise "this" represents global instead of person object 
        console.log('Hi, I am ' + this.name + `, and I'm ` + this.age + ' years old.' )
    }
}

console.log(person)
person.greet()

//====================Array=======================
const hobbies = ['Sports', 'Cooking']
for(let hobby of hobbies) { //of prints text, in prints index
    console.log(hobby)
}

//map creates a new array and leave the old one untouched
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby
}))
console.log(hobbies)

//pointer for hobbies does not change
hobbies.push('Shopping')
console.log(hobbies)

const copiedArray = hobbies.slice()
hobbies.push('Programming')
console.log(hobbies)
console.log(copiedArray)

//====================Spread and Rest operator=======================
//[hobbies] take hobbies as the first element of the new array, array of array
//... here is spread operator which can be used to pull out of the elements/properties from array or object
const copiedArray2 = [...hobbies]
console.log(copiedArray2)   //[ 'Sports', 'Cooking', 'Shopping', 'Programming' ]

const twoDArray = [['1'], ['2'], ['3']]
const copiedTwoDArray = [...twoDArray]
console.log(copiedTwoDArray) //[ [ '1' ], [ '2' ], [ '3' ] ]

//copy an object
const copiedPerson = {...person}
console.log(copiedPerson)

//... acts as rest operator, dynamically accepts arguments
const toArray = (...args) => {
    return args
}
console.log(toArray(1, '2', 3))

//====================Destructing=======================
//destruct object
var { name, age } = person
console.log(name, age)

var printName = ({ name }) => console.log(name)
printName(person)

//destruct array
const [hobby1, hobby2, hobby3] = hobbies
console.log(hobby1, hobby2, hobby3)

//====================Promise=======================
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done')
//     }, 1500)
// }

// setTimeout(() => {
//     console.log('Timer is done')
//     fetchData(text => {
//         console.log(text)
//     })
// }, 2000)

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done')
        }, 1500)
    })

    return promise
}

setTimeout(() => {
    console.log('Timer is done!')
    fetchData
        .then(text => { //pass callback in then method and run it when promise is resolved. In this example, resolve take a text as parameter, callback will take a string as parameter as well
            console.log(text)
            return fetchData()
        })
        .then(text2 => {
            console.log(text2)
        })
}, 2000)

console.log('Hello!')
console.log('Hi!')


