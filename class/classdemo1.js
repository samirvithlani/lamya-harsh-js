class Demo{


        x; //instance variable //class level variable

        display(){
            let x =200;
            console.log("This is display method");
            console.log("value of x = ",x);
            console.log("value of x = ",this.x);

            const demo = ()=>{
                console.log("This is arrow function");
                
            }
            demo();
        }

         constructor(){
             this.x = 100;
             console.log("This is constructor method");
         }

        // constructor(a,b){
        //     console.log("This is constructor method");
        //     console.log("value of a = ",a);
        //     console.log("value of b = ",b);
        // }


}
//create object of class
//var d = new Demo();
var d = new Demo(10,20);
//console.log(d);
d.display();