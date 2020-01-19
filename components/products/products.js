class Products{

    constructor(){
        this.activeClassName = 'product-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    HandleSetLocationStorage(element, id){
        const {pushProducts, products} = localStorageUtils.putProducts(id);
if(pushProducts){
    element.classList.add(this.activeClassName);
    element.innerHTML=this.labelRemove;
}else{
    element.classList.remove(this.activeClassName);
    element.innerHTML=this.labelAdd;
}
}

render() {
    const productStore = localStorageUtils.getProducts();


    let catalogHtml ='';
    CATALOG.forEach(({id, name, price, img})=> {
        let activeClass = '';
        let activeText = '';
if (productStore.indexOf(id) === -1){
    activeText = this.labelAdd;
}else{
    activeText = this.labelRemove;
    activeClass = ' ' + this.activeClassName};
        this.catalogHtml+=`<li class='product-element'>
        <span class='product-element__name'>${name}</span>
        <img src='${img}' class='product-element__img' />
        <span class='product-element__price' >${price.toLocaleString()} BLR </span>
        <button class='product-element__btn${activeClass}' onclick="productsPage.HandleSetLocationStorage(this, '${id}');" >${activeText}</button>
            </li>`
        });
    const  html = `<ul class='product-container'>${this.catalogHtml}</ul>` ;
    ROOT_PRODUCTS.innerHTML = html; 
    }
}



let productsPage = new Products();
productsPage.render();