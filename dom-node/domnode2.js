
const imagesArray = ["javajee.png","js.png","mongo.png","phsycics.png",]

const loadImage = ()=>{

        const main  = document.getElementById('main');

        const img = document.createElement('img');
        //../images/javajee.png
        var randomIndex = Math.floor(Math.random()*imagesArray.length);
        console.log(randomIndex);
        img.src = "../images/"+imagesArray[randomIndex]; 


        main.appendChild(img);

}