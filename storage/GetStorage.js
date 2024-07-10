const getData = ()=>{


    const data = localStorage.getItem('product');
    console.log(data);

    const productObjStr = localStorage.getItem('pobj');
    console.log(productObjStr);

    const prodObject = JSON.parse(productObjStr);
    console.log(prodObject);
    console.log(prodObject.name);
    console.log(prodObject.date);
    



}