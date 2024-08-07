const postuser = ()=>{

    const loader = document.getElementById("loader");
    var obj = {
        name:"ram",
        age:23,
        email:"ram@gmail.com",
        isActive:true
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST","https://node5.onrender.com/user/user",true);
    //headr set
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(obj));
    // xhr.onload = ()=>{
    //     console.log(xhr.responseText);
    // }

    xhr.onreadystatechange = ()=>{
        console.log(xhr.readyState);
        // if(xhr.readyState==1){
        //     console.log("request send");
        // }
        if(xhr.readyState == 2){
            alert("request send");
            //loader.innerHTML = "processing request";
            console.log("request send");
            
        }
        if(xhr.readyState == 3){
            //loader.innerHTML = "processing request";
            alert("processing request");
            console.log("processing request");
            
        }
        if(xhr.readyState == 4){
            //loader.innerHTML = "request finished";  
            alert("request finished and response is ready");
            console.log("request finished and response is ready");
            console.log("........",xhr.responseText);
            
        }
    }

}

postuser();