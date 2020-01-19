class LocalStorageUtils{
    constructor(){
this.keyName= 'products';
    }

    getProducts(){
const productLocalStorage = localStorage.getItem(this.keyName);
if (productLocalStorage !== null){return JSON.parse(productLocalStorage);}
return [];
    }

    putProducts(id){
let products = this.getProducts();
const index =products.indexOf(id);
let pushProducts = false;
if(index === -1){products.push(id); pushProducts = true; }
else{products.splice(index, 1);}
 localStorage.setItem(this.keyName, JSON.stringify(products));
 return {pushProducts, products}
    }
}
const localStorageUtils = new LocalStorageUtils();
