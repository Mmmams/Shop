//Работа c LocalStorage
<<<<<<< HEAD
class LocalStorageUtils {
=======
class LocalStorageUtils{
>>>>>>> d174d5ce363c4540fccfe74a6293671d5156d7fb
    constructor(){
        this.keyName= 'products';
    }
<<<<<<< HEAD
    //Получени э-та с LocalStorage 
=======
//Получени э-та с LocalStorage 
>>>>>>> d174d5ce363c4540fccfe74a6293671d5156d7fb
    getProducts(){
        const productLocalStorage = localStorage.getItem(this.keyName);
        if (productLocalStorage !== null) {
            return JSON.parse(productLocalStorage);
        }
        return [];
    }
<<<<<<< HEAD
    //Добавление в LocalStorage с проверкой на наличие э-а уже в LocalStorage
=======
//Добавление в LocalStorage с проверкой на наличие э-а уже в LocalStorage
>>>>>>> d174d5ce363c4540fccfe74a6293671d5156d7fb
    putProducts(id){
        let products = this.getProducts();
        const index =products.indexOf(id);
        let pushProducts = false;
        if (index === -1) { 
            products.push(id); pushProducts = true; 
        } else { 
            products.splice(index, 1); 
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return { pushProducts, products }
    }
}

const localStorageUtils = new LocalStorageUtils();
