const createTable = async () => {
  var data = await fetch("https://node5.onrender.com/user/user", {
    method: "GET",
  });
  var jsonData = await data.json();

  const tabl = document.getElementById("table");

  for (let i = 0; i < jsonData.data.length; i++) {
    var tr = document.createElement("tr");

    var id = document.createElement("td");
    id.innerHTML = jsonData.data[i]._id;

    var name = document.createElement("td");
    name.innerHTML = jsonData.data[i].name;

    var email = document.createElement("td");
    email.innerHTML = jsonData.data[i].email;

    var age = document.createElement("td");
    age.innerHTML = jsonData.data[i].age;

    var isActive = document.createElement("td");
    isActive.innerHTML = jsonData.data[i].isActive;

    var action = document.createElement("td");

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    action.appendChild(deleteButton);
    deleteButton.addEventListener("click", async () => {
      //alert("Are you sure you want to delete this user?" + jsonData.data[i]._id);
      await fetch(
        "https://node5.onrender.com/user/user/" + jsonData.data[i]._id,
        {
          method: "DELETE",
        }
      );
      window.location.reload();
    });

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(email);
    tr.appendChild(age);
    tr.appendChild(isActive);
    tr.appendChild(action);

    tabl.appendChild(tr);
  }
};

createTable();


const addUser = async () => {

    console.log("Adding")
        
    const user ={
        name:"parth",
        email:"parth@gmail.com",
        age:23,
        isActive:true
    }


    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    const data1 = await res.json();
    console.log(data1);



}
