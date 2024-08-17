var user = {
    name: "John",
}

Object.assign(user,{age:23})
console.log(user);


Object.keys(user).forEach((u)=>{
    console.log(u);
})
Object.values(user).forEach((u)=>{
    console.log(u);
})

Object.entries(user).forEach((u)=>{
    console.log(u);
})

// delete user.name;
// console.log(user);

// Object.defineProperty(user,'name',{
//     //writable:true
//     //readable:false
//     //configurable:false
//     //value:"Doe"
    
// })
// //user.name = "Smith";
// console.log(user)

//Object.freeze(user);
// user.name = "Smith";
// console.log(user)

// //defreezing the object
// Object.defineProperty(user,'name',{
//     writable:true
// })
// user.name = "Smith";
// console.log(user)

//Object.apply(user,{isACtive:true}) //doubt...
//console.log("after...",user)

//Object.seal(user);