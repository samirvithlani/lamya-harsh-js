//ajax -->asynchronous javascript and xml

const loadDoc = () => {
    const output = document.getElementById("output");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://node5.onrender.com/user/user", true);
  xhr.onload = () => {
    console.log(xhr.responseText);
    console.log(JSON.parse(xhr.responseText));
    output.innerHTML = xhr.responseText;
  };
 xhr.send();
};

