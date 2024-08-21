class Bank{

    #balance = 0; // private field
    namem = "SBI"; // public field
    constructor(){
        this.#balance = 1000;
    }

    display(){
        console.log("This is display method");
     //   console.log("value of balance = ",this.#balance);
        console.log("value of balance = ",this.#getbalance());
    }
    #getbalance(){
        return this.#balance;
    }


}

const b = new Bank();
b.display();
//console.log(b.namem);
//console.log(b.#balance); // error
//b.#getbalance(); // error