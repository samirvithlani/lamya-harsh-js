var user = {
    id:1,
    name: 'John',
}

//spread operator

console.log(user)

var newData = {...user,name:"parth",age:25}
console.log(newData)


var emps = [
    {
        id:101,
        name:"John"
    },
    {
        id:102,
        name:"Doe"
    }
]

emps.push({id:103,name:"Smith"})
console.log(emps)
emps = [...emps,{id:104,name:"Smith"}]
console.log(emps)


const getUserData = (...user)=>{
    console.log(user)
}

//getUserData("john",23,["amit","sumit"])
//getUserData()
getUserData("john")