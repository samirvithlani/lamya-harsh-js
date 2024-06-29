const add = ()=>{

    var main  = document.getElementById('main');
    
    var h1tag = document.createElement('h1')
    h1tag.innerHTML = "Hello World";
    h1tag.className = "text";


    main.appendChild(h1tag);

}

var users = ["ram","shyam","sita","hari","geeta"]

const loadData =()=>{

    const main = document.getElementById('main');
    const mainUl = document.createElement('ul');
    for(let i=0;i<users.length;i++){

        const li = document.createElement('li'); // <li></li> 
        li.innerHTML = users[i]; // <li>ram</li>
        mainUl.appendChild(li); // <ul><li>ram</li></ul>

    }
    main.appendChild(mainUl);
    




}