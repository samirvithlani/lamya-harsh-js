const getPhone = () => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id:101,name:"Samsung",price:10000,unit:1});
        }, 1000);
    });


}

//phone {id:101,name:"Samsung",price:10000,unit:1}
const payment= (phone) => {

    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phone);
        }, 1000);
    })

}


getPhone().then((data)=>{

    
    payment(data).then((phoneBill)=>{
        console.log("Phone Bill",phoneBill);
    })


}).catch((err)=>{
    console.log(err);
})