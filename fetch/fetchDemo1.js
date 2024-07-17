//fetch : response time: return promise:
///class Response{}
//resolve("ok")
const getApi=async()=>{

    //fetch("url")
    //Response
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
    })

    const data = await res.json();
    //console.log(res);
    console.log(data);


}

getApi();