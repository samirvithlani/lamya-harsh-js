//static prop in js
class Data{

    static name = "Dhruv";
    static age = 20;

    static display(){
     
        console.log("This is display method");
        //console.log("name = ",this.name)
//        console.log("name = ",Data.name) // static prop in static way
    }
    demo(){
        console.log("This is demo method");
        //Data.display();
        //var x = new Data();
        //x.display();
        //Data.#java();
    }

    static #java(){
        console.log("This is java method");
    }
}

//Data.display();
var d = new Data();
d.demo();
//d.display(); // error