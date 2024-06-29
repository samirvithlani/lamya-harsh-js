const add = ()=>{

    var stack = document.getElementById('stack');
    var rano = Math.floor(Math.random()*10000);

    var boxDiv = document.createElement('div');
    boxDiv.style.width = "100%";
    boxDiv.style.height = "50px";
    boxDiv.style.backgroundColor = "red";
    boxDiv.innerHTML = rano;
    stack.appendChild(boxDiv);
    // alert('Element added to stack');


}