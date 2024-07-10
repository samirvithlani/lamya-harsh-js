var product;
const searchProduct = ()=>{


        product= document.getElementById('search').value;
        //console.log(product);


}

//udf
const storeProductToLocalStorage = () => {

    var prodObject = {
        name:product,
        date: new Date().toLocaleString()
    }

    console.log(prodObject)
    console.log(typeof prodObject)

    console.log(JSON.stringify(prodObject))
    console.log(typeof JSON.stringify(prodObject))

        console.log(product)
        localStorage.setItem('product',product);
        //localStorage.setItem("pobj",prodObject)
        localStorage.setItem("pobj",JSON.stringify(prodObject))
        sessionStorage.setItem('product',product);



}